const setVideojuegoSeleccionadoInfo = (videojuego) => {
    $("#div-update-form").show();
    $("#videojuego-id").val(videojuego.id);
    $("#nombre").val(videojuego.text);
    $("#precio").val(videojuego.precio);
    $("#fabricante").val(videojuego.fabricante);
};
