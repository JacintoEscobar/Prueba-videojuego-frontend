$("#navbar").ready(() => {
    $("#navbar").load(
        "public/templates/navbar.html",
        (response, status, xhr) => {
            if (status === "success") {
                if (window.location.pathname === "/") {
                    $("div#search-form").load(
                        "public/templates/form-search.html"
                    );
                }
            }
        }
    );
});
