document.addEventListener("DOMContentLoaded", function () {
    console.log("List Tour Page Loaded!");

    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Booking successful!");
        });
    });
});
