$("#navbar").ready(() => {
    $("#navbar").load(
        "public/templates/navbar.html",
        (response, status, xhr) => {
            if (status === "success") {
                if (window.location.pathname === "/read.html") {
                    $("div#search-form").load(
                        "public/templates/read/form-search.html"
                    );
                }
            }
        }
    );
});
