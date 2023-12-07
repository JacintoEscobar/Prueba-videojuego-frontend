const videojuegos = async () => {
    const response = await fetch(GET_VIDEOJUEGOS, { method: "GET" });

    if (!response.ok) {
        console.error(await response.text());
    }

    const videojuegos = await response.json();
    videojuegos.forEach((videojuego, index) =>
        $("#videojuegos-table > tbody").append(
            `<tr>
                <th scope="row">${++index}</th>
                <td>${videojuego.nombre}</td>
                <td>$${videojuego.precio}</td>
                <td>${videojuego.fabricante}</td>
            </tr>`
        )
    );
};
