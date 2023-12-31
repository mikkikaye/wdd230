const p1 = document.querySelector("#password");
const p2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

p2.addEventListener("focusout", checkSame);

function checkSame() {
	if (p1.value !== p2.value) {
		formmessage.textContent = "Passwords do not match, please try again.";
		formmessage.style.visibility = "show";
		p2.style.backgroundColor = "#fff0f3";
		p2.value = "";
		p2.focus();
	} else {
		formmessage.style.display = "none";
		p2.style.backgroundColor = "#fff";
		p2.style.color = "#000";
	}
}

var slider = document.getElementById("myRange");
var output = document.getElementById("value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  console.log(this);
}