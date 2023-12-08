const setUpdateCampos = () => {
    $(".td-nombre").each((index, tdNombre) =>
        $(tdNombre).click((e) => changeTdToInputNombre(e.target))
    );

    $(".td-precio").each((index, tdPrecio) =>
        $(tdPrecio).click((e) => changeTdToInputPrecio(e.target))
    );

    $(".td-fabricante").each((index, tdFabricante) =>
        $(tdFabricante).click((e) => changeTdToInputFabricante(e.target))
    );
};
