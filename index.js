let homeCounter = document.getElementById("home-counter");
let guestCounter = document.getElementById("guest-counter");
let counterButtons = document.querySelectorAll(".counter-btn");
let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");


let homePts = 0;
let guestPts = 0;

function addPts(pts, team) {
    console.log(pts)
    console.log(team)
    if (team === "home") {
        homePts += pts;
        homeCounter.textContent = homePts;
    } else if (team === "guest") {
        guestPts += pts;
        guestCounter.textContent = guestPts;
    }
}

function gameOver(){
    console.log(counterButtons)
    counterButtons.forEach((btn) => {
        btn.disabled = true;
        btn.classList.add("disabled"); 
    })
    if (homePts > guestPts) {
        homeEl.classList.add("winner");
    } else if (guestPts > homePts) {
        guestEl.classList.add("winner");
    } else {
        homeEl.classList.add("winner");
        guestEl.classList.add("winner");
    }
}

function newGame() {
    homePts = 0;
    homeCounter.textContent = 0;
    guestPts = 0;
    guestCounter.textContent = 0;
    console.log(counterButtons)
    counterButtons.forEach((btn) => {
        btn.disabled = false;
        btn.classList.remove("disabled");
    })
    homeEl.classList.remove("winner");
    guestEl.classList.remove("winner");
}