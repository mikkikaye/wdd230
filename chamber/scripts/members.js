const url = "https://mikkikaye.github.io/wdd230/chamber/data/members.json";
const memberDataGrid = document.getElementById("grid-view");
const memberDataList = document.getElementById("list-view");



async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    displayMembers(data.members);
    displayMembersList(data.datasets);
}

getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let memberCard = document.createElement("section");
        let businessName = document.createElement("h2");
        let logo = document.createElement("img");
        let description = document.createElement("p");
        let phoneNumber = document.createElement("p");
        let address = document.createElement("p");
        let membership = document.createElement("p");
        let website = document.createElement("a");
        businessName.textContent = `${member.name}`;
        phoneNumber.textContent = `${member.number}`;
        address.textContent = `${member.address}`;
        membership.textContent = `${member.membership}`;
        description.textContent = `${member.miscellaneous}`;
        website.textContent = `${member.website}`;

        logo.setAttribute("src", `${member.icon}`);
        logo.setAttribute("alt", `${member.membership}`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "250");

        memberCard.appendChild(businessName);
        memberCard.appendChild(logo);
        memberCard.appendChild(description);
        memberCard.appendChild(phoneNumber);
        memberCard.appendChild(address);
        memberCard.appendChild(membership);
        memberCard.appendChild(website);

        memberDataGrid.appendChild(memberCard);
        memberDataList.appendChild(memberCard);


    });

    const displayMembersList = (datasets) => {
        datasets.forEach((dataset) => {

            let business = document.createElement("h2");
            let info = document.createElement("p");
            let websiteURL = document.createElement("a");
            business.textContent = `${dataset.name}`;
            info.textContent = `${dataset.miscellaneous} · ${dataset.number} · ${dataset.address} · ${dataset.website}`;
    
            websiteURL.setAttribute("href", `${dataset.url}`);
    
            business.setAttribute("class", headings[column % 7]);
            info.setAttribute("class", infoList[column % 7]);
    
            memberDataList.appendChild(business);
            memberDataList.appendChild(info);
            memberDataList.appendChild(websiteURL);
        });
    };

}



