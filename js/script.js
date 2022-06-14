const gameDifficulty = 1;
// parseInt(prompt('decidi la difficolta della partita (1-2-3)'))

let bombs = [];
console.log(bombs)

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
        num = getRndInteger(min, max)
        if (bombs.includes(num)) {
            i--;
        } else {
            bombs.push(num)
        }        
    }
}
console.log(bombs)





function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

