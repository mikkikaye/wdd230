const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.34&lon=111.72&appid=6a3a09a3686056983c1636526a04a4ec&units=imperial';

const forecast = document.getElementById("tempDiv");

async function apiFetch() {
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const data = await response.json();
            displayTemps(data.list);
            console.log(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch(err) {
        console.log(err);
    }
}


apiFetch();


const displayTemps = (days) => {
    console.log(days);
    days.slice(1,4).forEach((day) => {
        console.log(day);
        let tempForecast = document.createElement("section");
        let dayResults = document.createElement("p");
        let tempDay = document.createElement("span");
        tempDay.textContent = `${day.main.temp} ° F`;
        let dayOfWeek = document.createElement("p");
        tempForecast.appendChild(tempDay);
        forecast.appendChild(tempForecast);
    });
}