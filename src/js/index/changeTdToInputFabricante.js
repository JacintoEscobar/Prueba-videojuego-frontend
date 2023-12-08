/**
 * @param { HTMLTableCellElement } tdFabricante
 */
const changeTdToInputFabricante = (tdFabricante) => {
    const fabricante = $(tdFabricante).text().trim();
    $(tdFabricante).replaceWith(
        `<input id="input-change-fabricante" type="text" class="form-control form-contro-sm" value="${fabricante}" style="widht: auto;" />`
    );
    $("#input-change-fabricante").focus();
    $("#input-change-fabricante").blur((e) => {
        const nuevoFabricante = e.target.value.trim();
        const idVideojuego = parseInt(
            $(e.target).parent().first().text().trim()
        );

        $(e.target).replaceWith(
            `<td id="remplazo_fabricante" class="td-fabricante" style="cursor: pointer;">${nuevoFabricante}</td>`
        );
        $("#remplazo_fabricante").click((e) =>
            changeTdToInputFabricante(e.target)
        );
        $("#remplazo_fabricante").removeAttr("id");

        if (nuevoFabricante !== fabricante) {
            updateCampos(idVideojuego, "", null, nuevoFabricante);
        }
    });
};
