const memberUrl = "https://mikkikaye.github.io/wdd230/chamber/data/members.json";
const memberSpotlights = document.getElementById("home-grid");

async function getMemberData() {
    const response = await fetch(memberUrl);
    const data = await response.json();
    console.table(data);
    displayMembers(data.members);
}

getMemberData();

function getSilverGold(members) {
    const upperArray = [];
    members.forEach((member) => {
        if (member.membership == "Silver" || member.membership == "Gold") {
            upperArray.push(member);
        }
    });
    while (upperArray.length > 3) {
        const random = Math.floor(Math.random() * upperArray.length);
        const deleteNum = upperArray.splice(random, 1)[0];
        console.log(deleteNum);
    }
    return upperArray;
}

// const randomElement = array[Math.floor(Math.random() * array.length)];

const displayMembers = (members) => {
    getSilverGold(members).forEach((member) => {
        let memberSection = document.createElement("section");
        let sectionImage = document.createElement("img");
        let sectionH2 = document.createElement("h2");
        let sectionP = document.createElement("p");
        let sectionWebsite = document.createElement("a");
        let sectionH3 = document.createElement("h3");
        console.log(member);


        sectionH2.textContent = `${member.name}`;
        sectionH3.textContent = `${member.miscellaneous}`;
        sectionP.textContent = `${member.spotlight}`;
        sectionWebsite.textContent = `${member.url}`;

        sectionImage.setAttribute("src", `${member.icon}`);
        sectionImage.setAttribute("alt", `${member.miscellaneous}`);
        sectionImage.setAttribute("loading", "lazy");
        sectionImage.setAttribute("width", "250");

        memberSection.appendChild(sectionH2);
        memberSection.appendChild(sectionH3);
        memberSection.appendChild(sectionImage);
        memberSection.appendChild(sectionP);
        memberSection.appendChild(sectionWebsite);
        console.log(memberSection);
        memberSpotlights.appendChild(memberSection);

    });
}
