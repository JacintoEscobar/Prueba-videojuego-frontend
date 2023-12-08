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
            updateCampos(idVideojuego, nuevoNombre);
        }
    });
};
