const activePage = window.location.pathname;
console.log(activePage);
const links = document.querySelectorAll(".navigation a");
console.log(links);
links.forEach(link => {
    
    if (link.getAttribute("href") === activePage) {
        link.parentElement.classList.add("active");
        console.log(links);
    }
})
console.log("finished loading");