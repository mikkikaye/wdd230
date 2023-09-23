const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const section = document.querySelectorAll("section");
const link = main.querySelectorAll("a");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
        for (let i=0; i < link.length; i++) {
            link[i].style.color = "#fff000";
        }
        for (let i=0; i < section.length; i++) {
            section[i].style.background = "#000";
        }
		modeButton.textContent = "❎";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
        for (let i=0; i < link.length; i++) {
            link[i].style.color = "#7e7ef7";
        }
        for (let i=0; i < section.length; i++) {
            section[i].style.background = "#fff";
        }
		modeButton.textContent = "☑️";
	}
});
