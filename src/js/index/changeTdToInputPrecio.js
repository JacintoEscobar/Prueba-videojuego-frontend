/**
 * @param { HTMLTableCellElement } tdPrecio
 */
const changeTdToInputPrecio = (tdPrecio) => {
    const precio = parseFloat($(tdPrecio).text().trim().replace(/\D/g, ""));
    $(tdPrecio).replaceWith(
        `<input id="input-change-precio" type="number" min="1" step="0.01" class="form-control form-contro-sm" value="${parseFloat(
            precio
        )}" style="widht: auto;" />`
    );
    $("#input-change-precio").focus();
    $("#input-change-precio").blur((e) => {
        const nuevoPrecio = parseFloat(e.target.value);
        const idVideojuego = parseInt(
            $(e.target).parent().first().text().trim()
        );

        $(e.target).replaceWith(
            `<td id="remplazo_precio" class="td-precio" style="cursor: pointer;">$${nuevoPrecio}</td>`
        );
        $("#remplazo_precio").click((e) => changeTdToInputPrecio(e.target));
        $("#remplazo_precio").removeAttr("id");

        if (nuevoPrecio !== precio) {
            updateCampos(idVideojuego, "", nuevoPrecio, "");
        }
    });
};
