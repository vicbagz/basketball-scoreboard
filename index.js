let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let countHomeScore = 0;
let countGuestScore = 0;

function homePlusOne() {
  countHomeScore += 1;
  homeScore.textContent = countHomeScore;
}

function homePlusTwo() {
  countHomeScore += 2;
  homeScore.textContent = countHomeScore;
}

function homePlusThree() {
  countHomeScore += 3;
  homeScore.textContent = countHomeScore;
}

function guestPlusOne() {
  countGuestScore += 1;
  guestScore.textContent = countGuestScore;
}

function guestPlusTwo() {
  countGuestScore += 2;
  guestScore.textContent = countGuestScore;
}

function guestPlusThree() {
  countGuestScore += 3;
  guestScore.textContent = countGuestScore;
}

function newGame() {
  countHomeScore = 0;
  countGuestScore = 0;

  guestScore.textContent = countGuestScore;
  homeScore.textContent = countHomeScore;
}
