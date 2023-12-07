const CREATE_URL = "http://localhost:8080/videojuegos/nuevo";

$(document).ready(() => {
    $("#create-form-submit").click((e) => {
        e.preventDefault();
        $("#create-form").addClass("was-validated");
        create();
    });
});
