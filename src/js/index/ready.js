const GET_VIDEOJUEGOS = "http://localhost:8080/videojuegos";
const PATCH_VIDEOJUEGO = "http://localhost:8080/videojuegos/{id}/actualizar";
const DELETE_VIDEOJUEGO = "http://localhost:8080/videojuegos/{id}/eliminar";

$(document).ready(() => videojuegos());
