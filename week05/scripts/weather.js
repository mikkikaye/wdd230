const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=6a3a09a3686056983c1636526a04a4ec&units=imperial';
// console.log();
// const data = '';

async function apiFetch() {
    try {
        const response = await fetch(url);
        console.log(response);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            console.log(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch(err) {
        console.log(err)
    }
}

apiFetch();


function displayResults(data) {
    console.log(data);
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}