console.log("foo");

var cards = ["bunny.jpg", "cow.jpg", "hedgehog.jpg", "lion.jpg", "monkey.jpg", "rhino.jpg", "sheep.jpg", "zebra.jpg", "bunny.jpg", "cow.jpg", "hedgehog.jpg", "lion.jpg", "monkey.jpg", "rhino.jpg", "sheep.jpg", "zebra.jpg"];
// cards.random()
let container = document.getElementById("Memory");
for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    var newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'card');
    var newDiv2 = document.createElement('div');
    newDiv2.setAttribute('class', 'newDiv2');
    var newImg = document.createElement('img');
    newImg.setAttribute('src', './MemoryBilder /' + element);
    newImg.setAttribute('class', 'picture');
    newDiv.appendChild(newImg);
    // newDiv.appendChild(newDiv2);
    container.appendChild(newDiv);
    console.log(newDiv);
    newDiv.addEventListener("click", function (event) {
        console.log(event);
        event.target.getElementsByTagName('img')[0].style.visibility = 'visible';
    })
}


