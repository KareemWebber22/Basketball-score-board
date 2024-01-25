let homeScoreEl = document.getElementById("homescore")
let homeCount = 0

function homeOne() {
    homeCount += 1
    homeScoreEl.innerText = homeCount
}
function homeTwo() {
    homeCount += 2
    homeScoreEl.innerText = homeCount  
}
function homeThree() {
    homeCount += 3
    homeScoreEl.innerText = homeCount  
}

let guestScoreEl = document.getElementById("guestscore")
let guestCount = 0

function guestOne() {
    guestCount += 1
    guestScoreEl.innerText = guestCount
}
function guestTwo() {
    guestCount += 2
    guestScoreEl.innerText = guestCount  
}
function guestThree() {
    guestCount += 3
    guestScoreEl.innerText = guestCount  
}