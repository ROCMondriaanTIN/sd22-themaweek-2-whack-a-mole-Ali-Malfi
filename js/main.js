console.log("loaded");
const minimumTime = 500;
const maximumTime = 1250;

let playerPoints =0;

const playerPointsElement = document.querySelector(".player-points");
const allTiles = document.querySelectorAll(".tile");

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
allTiles.forEach(function(tile){
    console.log(tile);
    tile.addEventListener("click", function(){
        tileclick(tile);
    });
});

function tileclick(tile) {
    // console.log(tile);
    if (tile.classList.contains("active")) {
        playerPoints = playerPoints + 1;
    }else {
        playerPoints = playerPoints - 2;
        
    }
    console.log(playerPoints);

    tile.classList.remove("active");
    playerPointsElement.textContent = playerPoints;
}
activateRandomTile();

function activateRandomTile() {
    const currentActiveTille = document.querySelector(".tile.active");
    if (currentActiveTille) {
        currentActiveTille.classList.remove("active");
       
    }
    let randomTileNumber = getRandomNumber(0, allTiles.length-1);
    const selectedTile = allTiles[randomTileNumber];
    selectedTile.classList.add("active");
}

