console.log("foo");

var cards = ["bunny.jpg", "cow.jpg", "hedgehog.jpg", "lion.jpg", "monkey.jpg", "rhino.jpg", "sheep.jpg", "zebra.jpg", "bunny.jpg", "cow.jpg", "hedgehog.jpg", "lion.jpg", "monkey.jpg", "rhino.jpg", "sheep.jpg", "zebra.jpg"];

let match = "";
let move1 = null;
let move2 = null;
let highscore = 0;
let timer = null;
let matchCounter = 0;
let cardsCounter = cards.length / 2;
const winText = document.getElementById("win");

function initalize() {
    let container = document.getElementById("Memory");

    //the shuffle cards function 
    cards = cards.sort(() => 0.5 - Math.random());

    for (let index = 0; index < cards.length; index++) {

        const element = cards[index];
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'card');

        // to connect the divs with the imgs
        const newImg = document.createElement('img');
        newImg.setAttribute('src', './MemoryBilder /' + element);
        newImg.setAttribute('class', 'picture');

        newDiv.appendChild(newImg);
        container.appendChild(newDiv);

        newDiv.addEventListener("click", function (event) {
            // console.log(event);
            var Img = event.target.getElementsByTagName('img')[0];
            Img.style.visibility = 'visible';

            if (move1 != null && move2 != null) {
                clearTimeout(timer);
                hideCards();
            }

            if (match == "") {
                match = Img.getAttribute('src');
                move1 = Img;

            } else if (match == Img.getAttribute('src')) {
                console.log("gleich");
                match = "";
                highscore += 500;
                document.getElementById("score1").innerText = highscore;
                matchCounter +=1;
                if (cardsCounter == matchCounter) {
                    winText.innerText = "Herzlichen Glückwunsch:) dein Highscore ist:  " + highscore;
                }

            } else {
                console.log("ungleich");
                match = "";
                move2 = Img;
                highscore -= 250;
                if (highscore < 0) {
                    highscore = 0;
                };
                document.getElementById("score1").innerText = highscore;
                timer = setTimeout(autoHide, 3000)

            }
        })
    }
}
// this functions hides the Cards
function autoHide() {
    if (move1 != null && move2 != null) {
        hideCards();
    }
}

function hideCards(params) {
    move1.style.visibility = 'hidden';
    move2.style.visibility = 'hidden';
    move1 = null;
    move2 = null;
}

// this function resets the Game and shuffle the cards 

function resetGame() {
    var imgTags = document.getElementsByTagName('img');

    match = "";
    move1 = null;
    move2 = null;
    highscore = 0;
    matchCounter = 0;
    document.getElementById("score1").innerText = highscore;

    cards = cards.sort(() => 0.5 - Math.random());

    for (let index = 0; index < imgTags.length; index++) {
        var currentImg = imgTags[index];
        currentImg.style.visibility = 'hidden';
        currentImg.setAttribute('src', './MemoryBilder /' + cards[index]);
        winText.innerText = "";
    }
}



