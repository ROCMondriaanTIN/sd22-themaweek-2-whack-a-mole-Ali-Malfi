console.log("loaded");
const minimumTime = 500;
const maximumTime = 1250;

let playerPoints =3;
let gameStarted = false;
let timerId;

const playerPointsElement = document.querySelector(".player-points");
const allTiles = document.querySelectorAll(".tile");
const startGameButton = document.querySelector(".start-game-button");
startGameButton.addEventListener("click", function(){
    startGameButton.disabled = true;
    gameStarted = true;
    playerPoints = 3;
    playerPointsElement.textContent = playerPoints;
    startGame();
})

//deze random kies een nummer tussen (1,50)
getRandomNumber(1, 50);
function getRandomNumber(min, max){
    // let random= Math.random();
    // console.log(random);
    // console.log(min);
    // console.log(max);
    // console.log(Math.floor(random));
    // console.log(max - min +1);
    // console.log(Math.floor(random * (max - min + 1)));
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//deze foreach loop voegt de eventlistener toe aan elke tegel zo dat de tile klikt function wordt uitgevoert 
allTiles.forEach(function(tile){
    console.log(tile);
    tile.addEventListener("click", function(){
        if(gameStarted){
            tileclick(tile);
        }
       
    });
});

//this function als je op de active geklikt dan heb je een point maar als je niet op active geklikt
//verlies 2 points

function tileclick(tile) {
    // console.log(tile);
    if (tile.classList.contains("active")) {
        playerPoints = playerPoints + 1;
    }else {
        playerPoints = playerPoints - 1;
        
    }
    if (playerPoints <=0 ) {
        endGame();
    }
    console.log(playerPoints);

    tile.classList.remove("active");
    playerPointsElement.textContent = playerPoints;
}

//
function activateRandomTile() {
    const currentActiveTille = document.querySelector(".tile.active");
    if (currentActiveTille) {
        currentActiveTille.classList.remove("active");
       
    }
    let randomTileNumber = getRandomNumber(0, allTiles.length-1);
    const selectedTile = allTiles[randomTileNumber];
    selectedTile.classList.add("active");
    startGame();
}

// hier werkt de random en de tijd tussen 500, 1250 
function startGame() {
    const randomTime = getRandomNumber(minimumTime, maximumTime);
   timerId = setTimeout(activateRandomTile, randomTime);
}

function endGame() {
    gameStarted = false;
    clearInterval(timerId);
    clearTiles();
    
}
function clearTiles() {
    for (let i = 0; i < allTiles.length; i++) {
        const tileElement = allTiles[i];
        tileElement.classList.remove("active");
    }
}




