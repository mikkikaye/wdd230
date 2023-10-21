const url = "https://mikkikaye.github.io/wdd230/chamber/data/members.json";
const memberDataGrid = document.getElementById("grid-view");
const memberDataList = document.getElementById("list-view");



async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    displayMembers(data.members);
    displayMembersList(data.members);
}

getMemberData();

const displayMembers = (members) => {
    let column = 0;
    const cols = ["col1", "col2", "col3", "col4", "col5", "col6", "col7"];
    members.forEach((member) => {
        let memberArt = document.createElement("article");
        let memberCard = document.createElement("section");
        let logo = document.createElement("img");
        let description = document.createElement("p");
        let phoneNumber = document.createElement("p");
        let address = document.createElement("p");
        let membership = document.createElement("p");
        let website = document.createElement("a");
        phoneNumber.textContent = `${member.number}`;
        address.textContent = `${member.address}`;
        membership.textContent = `${member.membership}`;
        description.textContent = `${member.miscellaneous}`;
        website.textContent = `${member.url}`;

        logo.setAttribute("src", `${member.icon}`);
        logo.setAttribute("alt", `${member.membership}`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "250");

        website.setAttribute("href", `${member.url}`);
        memberArt.setAttribute("class", cols[column % 7]);

        memberCard.appendChild(logo);
        memberCard.appendChild(description);
        memberCard.appendChild(phoneNumber);
        memberCard.appendChild(address);
        memberCard.appendChild(membership);
        memberCard.appendChild(website);

        memberArt.appendChild(memberCard)
        memberDataGrid.appendChild(memberArt);

        column++;
    });
}

    const displayMembersList = (datasets) => {
        let column = 0;
        const headings = ["headings1", "headings2", "headings3", "headings4", "headings5", "headings6", "headings7"];
        const information = ["info1", "info2", "info3", "info4", "info5", "info6", "info7"];
        datasets.forEach((dataset) => {

            let business = document.createElement("h2");
            let info = document.createElement("p");
            let websiteURL = document.createElement("a");
            websiteURL.textContent = `${dataset.url}`;
            business.textContent = `${dataset.name}`;
            info.textContent = `${dataset.miscellaneous} · ${dataset.number} · ${dataset.address} · ${dataset.url}`;
    
            websiteURL.setAttribute("href", `${dataset.url}`);
    
            business.setAttribute("class", headings[column % 7]);
            info.setAttribute("class", information[column % 7]);
    
            memberDataList.appendChild(business);
            memberDataList.appendChild(info);
            // memberDataList.appendChild(websiteURL);
            column++;
        });
    };



