const checkbox = document.getElementById("burger__menu");
const body = document.body;
const navMenu = document.querySelector(".nav__menu");
checkbox.addEventListener("change", function () {
    if (this.checked) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "";
    }
});
document.addEventListener("click", function (event) {
    if (!navMenu.contains(event.target) && !checkbox.contains(event.target)) {
        checkbox.checked = false;
        body.style.overflow = "";
    }
});
