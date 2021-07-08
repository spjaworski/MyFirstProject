let cells = document.querySelectorAll('.row > div');

let turnCount = 0;

let gameOver = false;

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}


function cellClicked () {
    if (gameOver == false) {
    if (event.target.textContent != 'X' && event.target.textContent != 'O') {
        if (turnCount % 2 == 0) {
    event.target.textContent = 'X';
    turnCount += 1;
    console.log(event);
} else {
    event.target.textContent = 'O';
    turnCount += 1;
    console.log(event);
    }
}
     {
        winCheck();
}
    } else if (gameOver == true) {
        turnCount = 0;
    cells.forEach( (cells) => {
        cells.innerText = ' ';
    })
    gameOver = false;
    }
}

function winCheck(){
if (cells[0].textContent === 'X' && cells[1].textContent === 'X' && cells[2].textContent === 'X') {
    window.alert("X Wins!");
    gameOver = true;
    
}
else if (cells[3].textContent === 'X' && cells[4].textContent === 'X' && cells[5].textContent === 'X') {
    window.alert("X Wins!");
    gameOver = true;
}
else if (cells[6].textContent === 'X' && cells[7].textContent === 'X' && cells[8].textContent === 'X') {
    window.alert("X Wins!");
    gameOver = true;
}
else if (cells[0].textContent === 'X' && cells[3].textContent === 'X' && cells[6].textContent === 'X') {
    window.alert("X Wins!");
    gameOver = true;
}
else if (cells[1].textContent === 'X' && cells[4].textContent === 'X' && cells[7].textContent === 'X') {
    window.alert("X Wins!");
    gameOver = true;
}
else if (cells[2].textContent === 'X' && cells[5].textContent === 'X' && cells[8].textContent === 'X') {
    window.alert("X Wins!");
    gameOver = true;
}
else if (cells[0].textContent === 'X' && cells[4].textContent === 'X' && cells[8].textContent === 'X') {
    window.alert("X Wins!");
    gameOver = true;
}
else if (cells[2].textContent === 'X' && cells[4].textContent === 'X' && cells[6].textContent === 'X') {
    window.alert("X Wins!");
    gameOver = true;
}
else if (cells[0].textContent === 'O' && cells[1].textContent === 'O' && cells[2].textContent === 'O') {
    window.alert("O Wins!");
    gameOver = true;
}
else if (cells[3].textContent === 'O' && cells[4].textContent === 'O' && cells[5].textContent === 'O') {
    window.alert("O Wins!");
    gameOver = true;
}
else if (cells[6].textContent === 'O' && cells[7].textContent === 'O' && cells[8].textContent === 'O') {
    window.alert("O Wins!");
    gameOver = true;
}
else if (cells[0].textContent === 'O' && cells[3].textContent === 'O' && cells[6].textContent === 'O') {
    window.alert("O Wins!");
    gameOver = true;
}
else if (cells[1].textContent === 'O' && cells[4].textContent === 'O' && cells[7].textContent === 'O') {
    window.alert("O Wins!");
    gameOver = true;
}
else if (cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent === 'O') {
    window.alert("O Wins!");
    gameOver = true;
}
else if (cells[0].textContent === 'O' && cells[4].textContent === 'O' && cells[8].textContent === 'O') {
    window.alert("O Wins!");
    gameOver = true;
}
else if (cells[2].textContent === 'O' && cells[4].textContent === 'O' && cells[6].textContent === 'O') {
    window.alert("O Wins!");
    gameOver = true;
}
else if (turnCount == 9) {
    window.alert("It's a Draw!");
    gameOver = true;
}
}