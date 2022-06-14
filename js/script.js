const gameDifficulty = parseInt(prompt('decidi la difficolta della partita (1-2-3)'))
let game = true;
let bombs = [];
let userNumber;
let j = 0;

switch(gameDifficulty) {
    case 1:
        prodBombs(1, 100);
        break;
    case 2:
        prodBombs(1, 81);
        break;
    case 3:
        prodBombs(1, 49);
        break;
}

function prodBombs(min, max) {
    for(i=1; i<=16; i++) {
        num = getRndInteger(min, max);
        if (bombs.includes(num)) {
            i--;
        } else {
            bombs.push(num);
        }        
    }
}
console.log('bombs',bombs)

while (game) {
    userNumber = parseInt(prompt('dammi un numero'));
    if (bombs.includes(userNumber)) {
        alert('sei na pippa!')
        game = false;
    } else {
        alert("c'hai preso!")
        j++
    }
    if (j >= bombs.length) {
        game = false
        alert(`hai vinto con ${j}`)
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

