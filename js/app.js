const body = document.querySelector("body");
const themeSwapBtn = document.querySelector(".theme-swap-btn");
const sunMoonContainer = document.querySelector(".sun-moon-container");

themeSwapBtn.addEventListener("click", () => {
	body.classList.toggle("dark");
	sunMoonContainer.classList.toggle("rotate");
});
