const currentYear = new Date().getFullYear();
const year = document.getElementById("year");
year.textContent = currentYear;

let text = document.lastModified;
const date = new Date(document.lastModified);
const formattedDate = date.toLocaleDateString('en-US');
document.getElementById("lastModified").textContent= "Last Modified: " + formattedDate;
