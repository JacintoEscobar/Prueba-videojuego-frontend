const setUpdateCampos = () => {
    $(".td-nombre").each((index, tdNombre) =>
        $(tdNombre).click((e) => changeTdToInputNombre(e.target))
    );
};

/**
 * @param { HTMLTableCellElement } tdNombre
 */
const changeTdToInputNombre = (tdNombre) => {
    const nombre = $(tdNombre).text().trim();
    $(tdNombre).replaceWith(
        `<input id="input-change-nombre" type="text" class="form-control form-contro-sm" value="${nombre}" style="widht: auto;" />`
    );
    $("#input-change-nombre").focus();
    $("#input-change-nombre").blur((e) => {
        const nuevoNombre = e.target.value.trim();
        const idVideojuego = parseInt($(e.target).prev().text().trim());

        $(e.target).replaceWith(
            `<td id="remplazo_nombre" class="td-nombre" style="cursor: pointer;">${nuevoNombre}</td>`
        );
        $("#remplazo_nombre").click((e) => changeTdToInputNombre(e.target));
        $("#remplazo_nombre").removeAttr("id");

        if (nuevoNombre !== nombre) {
            updateCampos(nuevoNombre, idVideojuego);
        }
    });
};

/**
 *
 * @param { String } nuevoNombre
 * @param { number } idVideojuego
 */
const updateCampos = (nuevoNombre, idVideojuego) => {
    Swal.fire({
        icon: "info",
        title: "¡Espera!",
        text: "Actualizando nombre...",
        showConfirmButton: false,
        timer: 1800,
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => Swal.showLoading(),
    });

    setTimeout(() => {
        fetch(PATCH_VIDEOJUEGO.replace("{id}", idVideojuego), {
            method: "PATCH",
            body: JSON.stringify({ nombre: nuevoNombre }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.text())
            .then((response) => {
                Swal.fire({
                    icon: "success",
                    title: "¡Hecho!",
                    text: response,
                    showConfirmButton: false,
                    timer: 1800,
                });
            })
            .catch((error) => console.error(error));
    }, 1900);
};
