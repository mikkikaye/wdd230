const baseURL = "https://mikkikaye.github.io/wdd230/";
const linksURL = "https://mikkikaye.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const weeksArr = await response.json(); 
        displayLinks(weeksArr);
    } catch (err) {
        console.error("Error", err);
    }
}



function displayLinks(weeksArr) {

    const ulList = document.getElementById("ulList");
    const arrWeeks = Array.from(weeksArr.weeks);

    ulList.innerHTML = "";

    arrWeeks.forEach((week) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${week.week}: `;


        week.links.forEach((li, index) => {
            const aLink = document.createElement('a');
            aLink.setAttribute("href", li.url); 
            aLink.textContent = `${li.title}`;
            
            listItem.appendChild(aLink);

            if (index < week.links.length - 1) {
                listItem.appendChild(document.createTextNode(" | "));
            }
        });
        ulList.appendChild(listItem);
        
    });
}

getLinks();