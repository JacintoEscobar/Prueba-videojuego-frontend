const update = async () => {
    const body = {
        nombre: $("#nombre").val(),
        precio: parseInt($("#precio").val()),
        fabricante: $("#fabricante").val(),
    };

    console.log("id: " + $("#videojuego-id").val());
    console.log("body: " + JSON.stringify(body));
    console.log(UPDATE_URL.replace("{id}", $("#videojuego-id").val()));

    const response = await fetch(
        UPDATE_URL.replace("{id}", $("#videojuego-id").val()),
        {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    if (!response.ok) {
        return console.error(await response.text());
    }

    return Swal.fire({
        icon: "success",
        title: "Hecho!",
        text: "Videojuego actualizado exitosamente",
        showConfirmButton: false,
        timer: 1800,
    }).then(() => (window.location.href = "/index.html"));
};
