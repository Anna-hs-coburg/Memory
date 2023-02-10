console.log("foo");

var cards = ["bunny.jpg", "cow.jpg", "hedgehog.jpg", "lion.jpg", "monkey.jpg", "rhino.jpg", "sheep.jpg", "zebra.jpg", "bunny.jpg", "cow.jpg", "hedgehog.jpg", "lion.jpg", "monkey.jpg", "rhino.jpg", "sheep.jpg", "zebra.jpg"];

let match = "";
let move1 = null;
let move2 = null;
let highscore = 0;

function initalize() {
    let container = document.getElementById("Memory");

    cards = cards.sort((a, b) => 0.5 - Math.random());

    for (let index = 0; index < cards.length; index++) {
        const element = cards[index];
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'card');

        const newImg = document.createElement('img');
        newImg.setAttribute('src', './MemoryBilder /' + element);
        newImg.setAttribute('class', 'picture');

        newDiv.appendChild(newImg);
        container.appendChild(newDiv);

        newDiv.addEventListener("click", function (event) {
            // console.log(event);
            var Img = event.target.getElementsByTagName('img')[0];
            Img.style.visibility = 'visible';

            if (move1 != null && element2 != null) {
                move1.style.visibility = 'hidden';
                move2.style.visibility = 'hidden';
                move1 = null;
                move2 = null;
            }

            if (match == "") {
                match = Img.getAttribute('src');
                move1 = Img;

            } else if (match == Img.getAttribute('src')) {
                console.log("gleich");
                match = "";
                highscore += 200;
                document.getElementById("score1").innerText = highscore;

            } else {
                console.log("ungleich");
                match = "";
                move2 = Img;
                highscore -= 100;
                document.getElementById("score1").innerText = highscore;

            }
        })
    }

}




