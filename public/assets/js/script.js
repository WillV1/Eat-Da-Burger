$(document).ready(function () {

$(".change-status").on("click", function (event) {
    let id = $(this).data("id");
    let newBurger = $(this).data("newburger");

    let newBurgerStatus = {
        devoured: newBurger
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newBurgerStatus
    }).then(
        function () {
            console.log("changed status to", newBurger);
            location.reload();
        }
    );
});

$(".create-form").on("submit", function (event) {
    event.preventDefault();

    let newBurger = {
        burger_name: $("#burger_name").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("added new burger");
            location.reload();
        }
    );
});
});