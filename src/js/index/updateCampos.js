/**
 * @param { number } idVideojuego
 * @param { String } nuevoNombre
 * @param { number } nuevoPrecio
 * @param { String } nuevoFabricante
 */
const updateCampos = (
    idVideojuego,
    nuevoNombre,
    nuevoPrecio,
    nuevoFabricante
) => {
    Swal.fire({
        icon: "info",
        title: "¡Espera!",
        text: "Actualizando...",
        showConfirmButton: false,
        timer: 1800,
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => Swal.showLoading(),
    });

    setTimeout(() => {
        fetch(PATCH_VIDEOJUEGO.replace("{id}", idVideojuego), {
            method: "PATCH",
            body: JSON.stringify({
                nombre: nuevoNombre,
                precio: nuevoPrecio,
                fabricante: nuevoFabricante,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.text())
            .then((response) => {
                Swal.fire({
                    icon: "success",
                    title: "¡Hecho!",
                    text: response,
                    showConfirmButton: false,
                    timer: 1800,
                });
            })
            .catch((error) => console.error(error));
    }, 1900);
};
