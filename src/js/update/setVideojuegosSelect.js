const setVideojuegosSelect = () => {
    $("#select-videojuego").select2({
        ajax: {
            url: GET_VIDEOJUEGOS,
            dataType: "json",
            processResults: (data) => {
                const videojuegos = [];
                data.forEach((videojuego) => {
                    videojuegos.push({
                        id: videojuego.id,
                        text: videojuego.nombre,
                        precio: videojuego.precio,
                        fabricante: videojuego.fabricante,
                    });
                });
                return {
                    results: videojuegos,
                };
            },
            language: "es",
        },
    });

    $("#select-videojuego").on("select2:select", (e) =>
        setVideojuegoSeleccionadoInfo(e.params.data)
    );
};
