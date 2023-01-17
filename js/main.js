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
    console.log(tile);
}