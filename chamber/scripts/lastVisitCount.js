const msToDays = 84600000;

// // || Returns the current date 

const visitMessage = document.querySelector("#visit-message");

const theDateToday = Date.now();
// || Returns current milliseconds since January 1, 1970
console.log(theDateToday);

let previousDateVisit = Number(window.localStorage.getItem("today"));
console.log(previousDateVisit);

let timeInBetween = theDateToday - previousDateVisit;
console.log(timeInBetween);

if (timeInBetween < msToDays && timeInBetween > 0) {
    visitMessage.textContent = "Back so soon! Awesome!";
} else if (timeInBetween > msToDays) {
    let days = timeInBetween / msToDays;
    let numberDays = Math.floor(days);

        if (numberDays == 1) {
            visitMessage.textContent = `You last visited ${numberDays} day ago.`;
        } else {
            visitMessage.textContent = `You last visited ${numberDays} days ago.`;
        }

    }  
else {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
}

localStorage.setItem("today", theDateToday);

