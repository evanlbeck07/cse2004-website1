const toggleButton = document.querySelector("#darkmode-toggle");

toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
