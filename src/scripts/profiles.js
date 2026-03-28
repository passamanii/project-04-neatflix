const button = document.getElementById("theme_toggle");

function updateButtonText() {

    button.textContent = document.body.classList.contains("light")
    ? "☀️"
    : "🌙";
}

if (localStorage.getItem("theme") == "light") {
    document.body.classList.add("light");
}

updateButtonText();

button.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }

    updateButtonText();
});
