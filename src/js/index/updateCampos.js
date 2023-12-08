const setUpdateCampos = () => {
    $(".td-nombre").each((index, tdNombre) =>
        $(tdNombre).click((e) => changeTdToInputNombre(e.target))
    );
};

const changeTdToInputNombre = (tdNombre) => {
    // Version 2
    const nombre = $(tdNombre).text();
    $(tdNombre).empty();
    $(tdNombre).append(
        `<input id="input-change-nombre" type="text" class="form-control form-contro-sm" value="${nombre}" style="widht: auto;" />`
    );
    $("#input-change-nombre").focus();
    $("#input-change-nombre").blur(() => {
        const nuevoNombre = $("#input-change-nombre").val();
        const idVideojuego = $("#input-change-nombre").parent().prev().text();
        $(tdNombre).text(nuevoNombre);
        $("#input-change-nombre").remove();
        updateCampos(nuevoNombre, idVideojuego);
    });
};

const updateCampos = (nuevoNombre, idVideojuego) => {
    Swal.fire({
        icon: "info",
        title: "¡Espera!",
        text: "Actualizando nombre...",
        showConfirmButton: false,
        timer: 1800,
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
            Swal.showLoading();
        },
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
