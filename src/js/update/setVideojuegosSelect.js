const setVideojuegosSelect = () => {
    $("#select-videjouego").select2({
        ajax: {
            url: "http://localhost:8080/videojuegos",
            dataType: "json",
            processResults: (data) => {
                const videojuegos = [];
                data.forEach((videojuego) => {
                    videojuegos.push({
                        id: videojuego.id,
                        text: videojuego.nombre,
                    });
                });
                return {
                    results: videojuegos,
                };
            },
        },
    });
};
