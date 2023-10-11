const baseURL = "https://mikkikaye.github.io/wdd230/";
const linksURL = "https://mikkikaye.github.io/wdd230/data/links.json";

async function getLinks() {
    const linksURL = await fetch(linksURL);
    const data = await response.json(); 
    console.log(data);
    displayLinks(data);
}

getLinks();

function displayLinks(weeks) {
    weeks.forEach((week) => {
        for (let i=0; i < links.length; i++) {
            
        }
    });
}