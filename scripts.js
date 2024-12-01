// Показывать интересный факт
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("showFactButton");
    const factText = document.getElementById("factText");

    button.addEventListener("click", () => {
        factText.style.display = "block";
        button.style.display = "none"; // Убираем кнопку после нажатия
    });
});
