const videojuegos = async () => {
    const response = await fetch(GET_VIDEOJUEGOS, { method: "GET" });

    if (!response.ok) {
        console.error(await response.text());
    }

    const videojuegos = await response.json();
    videojuegos.forEach((videojuego, index) =>
        $("#videojuegos-table > tbody").append(
            `<tr>
                <th scope="row">${videojuego.id}</th>
                <td class="td-nombre" style="cursor: pointer;">${videojuego.nombre}</td>
                <td class="td-precio" style="cursor: pointer;">$${videojuego.precio}</td>
                <td class="td-fabricante" style="cursor: pointer;">${videojuego.fabricante}</td>
                <td>
                    <button class="btn btn-danger delete-videojuego">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>`
        )
    );

    setUpdateCampos();

    setDeleteVideojuego();
};
