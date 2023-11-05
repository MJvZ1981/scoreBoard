let homeScore = 0;
let guestsScore = 0;

let intervalId;
let timerEl = document.getElementById('timer-home');

let homeEl = document.getElementById('score-home');
let guestsEl = document.getElementById('score-guests');

function difineBorderColor() {
    homeScore === guestsScore ? (homeEl.style.borderColor = 'darkblue') && (guestsEl.style.borderColor = 'darkblue') : homeScore > guestsScore ? (homeEl.style.borderColor = 'red') && (guestsEl.style.borderColor = 'blue') : (guestsEl.style.borderColor = 'red') && (homeEl.style.borderColor = 'darkblue');
}

function shotClock() {
    timerEl.style.borderColor = 'darkblue'
    if (intervalId) {
        clearInterval(intervalId);
    }

    timer = 24;
    timerEl.textContent = timer;

    intervalId = setInterval(function() {
        timer -= 1;
        timerEl.textContent = timer;

        if (timer === 0) {
            clearInterval(intervalId);
            timerEl.style.borderColor = 'red'
        }
    }, 1000);
}

function handleScore(team, value) {
    shotClock();
    team === 'home' ? (homeScore += value) && (homeEl.textContent = homeScore)
    : (guestsScore += value) && (guestsEl.textContent = guestsScore);
    difineBorderColor();
}


function homeMinusOne() {
    shotClock();
    homeScore -= 1
    homeEl.textContent = homeScore;
    difineBorderColor();
}

function guestsMinusOne() {
    shotClock();
    guestsScore -= 1;
    guestsEl.textContent = guestsScore;
    difineBorderColor();
}

function handleReset() {
    homeScore = 0;
    guestsScore = 0;
    homeEl.textContent = homeScore;
    guestsEl.textContent = guestsScore;
    difineBorderColor();
}
