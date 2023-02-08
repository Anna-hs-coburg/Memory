console.log("foo");

let match1 = "";
let element1 = null;
let element2 = null;

const cards = ["bunny.jpg", "cow.jpg", "hedgehog.jpg", "lion.jpg", "monkey.jpg", "rhino.jpg", "sheep.jpg", "zebra.jpg", "bunny.jpg", "cow.jpg", "hedgehog.jpg", "lion.jpg", "monkey.jpg", "rhino.jpg", "sheep.jpg", "zebra.jpg"];

function Highscore() {

        const element1 = document.getElementById("score1");
        const element2 = document.getElementById("score1");
    
        const z1 = parseInt(element1.innerText);
        const z2 = parseInt(element2.innerText);
    
        console.log(z1);
    
        if (z1 == z2) {
            element1.innerText = parseInt(element1.innerText) + 100;
        } else if (z1 != z2) {
            element1.innerText = parseInt(element1.innerText) - 100;
        }
    }

let container = document.getElementById("Memory");

for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'card');

    const newDiv2 = document.createElement('div');
    newDiv2.setAttribute('class', 'newDiv2');

    const newImg = document.createElement('img');
    newImg.setAttribute('src', './MemoryBilder /' + element);
    newImg.setAttribute('class', 'picture');

    newDiv.appendChild(newImg);
    // newDiv.appendChild(newDiv2);
    container.appendChild(newDiv);
    // console.log(newDiv);

    newDiv.addEventListener("click", function (event) {
        // console.log(event);
        var Img = event.target.getElementsByTagName('img')[0];
        Img.style.visibility = 'visible';

        if (element1 != null && element2 != null) {
            element1.style.visibility = 'hidden';
            element2.style.visibility = 'hidden';
            element1 = null;
            element2 = null;
        }

        if (match1 == "") {
            match1 = Img.getAttribute('src');
            element1 = Img;

        } else if (match1 == Img.getAttribute('src')) {
            console.log("gleich");
            match1 = "";

        } else {
            console.log("ungleich");
            match1 = "";
            element2 = Img;
        }
    })
}



