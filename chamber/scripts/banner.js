
const banner = document.querySelector('.banner')
const xbtn = document.querySelector('.xbtn');
const wd = new Date().getDay();


xbtn.addEventListener('click', (e) => {
	e.preventDefault();
	banner.style.display = "none";
});

function displayBanner() {

    if (wd < 1 || wd > 3){
        banner.style.display = "none";
    }
};

displayBanner();

