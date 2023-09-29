const counter = document.querySelector(".visits");
let count = Number(window.localStorage.getItem("views")) || 0;
console.log("it loaded");
if (count !== 0) {
    console.log("count not zero");
    counter.textContent = count;
    // count = Number(count) + 1;
    // localStorage.setItem("views", count);
}
else {
    console.log("count zero");
    counter.textContent = "Your first visit!";
}
count++;
localStorage.setItem("views", count);
console.log(count);
