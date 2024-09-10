const darkModeInput = document.querySelector("#btnDark");

darkModeInput.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
});