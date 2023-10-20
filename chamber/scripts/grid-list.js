var grid = document.getElementById("grid-view");
var list = document.getElementById("list-view");

function startPage() {
	list.style.display = "none";
}

startPage();

// List View
function listView() {
    grid.style.display = "none";
	  list.style.display = "grid";
  }

// Grid View
function gridView() {
    list.style.display = "none";
	  grid.style.display = "grid";
  }

var listBtn = document.querySelector(".btn");
listBtn.addEventListener("click", listView);

var gridBtn = document.querySelector(".grid-btn");
gridBtn.addEventListener("click", gridView);