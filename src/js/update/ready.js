const GET_VIDEOJUEGOS = "http://localhost:8080/videojuegos";
const UPDATE_URL = "http://localhost:8080/videojuegos/{id}/actualizar";

$(document).ready(() => {
    $("#update-form-submit").click((e) => {
        e.preventDefault();
        $("#update-form").addClass("was-validated");
        update();
    });

    setVideojuegosSelect();
});
