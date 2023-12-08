/**
 * @param { number } idVideojuego
 */
const deleteVideojuego = async (idVideojuego) => {
    const response = await fetch(
        DELETE_VIDEOJUEGO.replace("{id}", idVideojuego),
        {
            method: "DELETE",
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
        text: "Videojuego eliminado exitosamente",
        showConfirmButton: false,
        timer: 1800,
    }).then(() => (window.location.href = "/index.html"));
};
