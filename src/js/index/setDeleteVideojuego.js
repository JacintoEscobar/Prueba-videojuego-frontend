const setDeleteVideojuego = () => {
    $(".delete-videojuego").each((index, button) =>
        $(button).click(() =>
            deleteVideojuego(
                parseInt($(button).parent().parent().children("th").text())
            )
        )
    );
};
