console.log("foo");

let match1 = "";
let element1 = null;
let element2 = null;
let highscore = document.getElementById("score1")

const cards = ["bunny.jpg", "cow.jpg", "hedgehog.jpg", "lion.jpg", "monkey.jpg", "rhino.jpg", "sheep.jpg", "zebra.jpg", "bunny.jpg", "cow.jpg", "hedgehog.jpg", "lion.jpg", "monkey.jpg", "rhino.jpg", "sheep.jpg", "zebra.jpg"];




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
            highscore.innerText = parseInt(highscore.innerText) +200;

        } else {
            console.log("ungleich");
            match1 = "";
            element2 = Img;
            highscore.innerText = parseInt(highscore.innerText) -100;
        }
    })
}


// const cards = [];

// let bild = Math.ceil(Math.random() * 6);
// let memory = document.getElementById("Memory");
// memory.innerText = InitCards;
// let counter = 0;
// let IntervallID;

// function ShuffelCards() {
//     IMG();
//     // setTimeout(compare, 3000);
// }

// function IMG() {
//     IntervallID = setInterval(generatRandomNumber, 200);
// }

// function generatRandomPicture() {
//     let zufall = Math.ceil(Math.random() * 8);

//     console.log(cards)
//     document.getElementById("Memory");
//     memory.innerText = zufall;
//     counter++;
//     if (counter > 7) {
//         clearInterval(IntervallID);
//         counter = 0;
//     }
// }



// function shuffle() {
//     cards.forEach(card => {
//       let ramdomPos = Math.floor(Math.random() * 12);
//       cards.setAttribute('src', './MemoryBilder /' + element);
//     })};



