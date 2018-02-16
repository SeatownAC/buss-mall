'use strict';
//array to store the objects
var allPics = [];

function Pic(name, picsPath) {
    this.name = name;
    this.picsPath = picsPath;
    this.views = 0;
    this.vote = 0;
    this.totalVotes = 0;
    this.currentView = [];
    this.lastView = [];
    allPics.push(this);
}




var bag = new Pic('Bag','img/bag.jpg', 0, 0);
var banana = new Pic('Banana', 'img/banana.jpg', 0, 0);
var bathroom = new Pic('Bathroom', 'img/bathroom.jpg', 0, 0);
var boots = new Pic('Boots', 'img/boots.jpg', 0, 0);
var bubblegum = new Pic('Bubblegum', 'img/bubblegum.jpg', 0, 0);
var chair = new Pic('Chair','img/chair.jpg', 0, 0);
var cthulhu = new Pic('Cthulhu', 'img/cthulhu.jpg', 0, 0);
var dogduck= new Pic('Dogduck', 'img/dog-duck.jpg', 0, 0);
var dragon = new Pic('Dragon', 'img/dragon.jpg', 0, 0);
var pen = new Pic('Pen', 'img/pen.jpg', 0, 0);
var petsweep = new Pic('Petsweep','img/pet-sweep.jpg', 0, 0);
var tauntaun = new Pic('Tauntaun', 'img/tauntaun.jpg', 0, 0);
var unicorn = new Pic('Unicorn', 'img/unicorn.jpg', 0, 0);
var usb = new Pic('Usb', 'img/usb.gif', 0, 0);
var watercan = new Pic('Watercan', 'img/water-can.jpg', 0, 0);
var wineglass = new Pic('Wineglass', 'img/wine-glass.jpg', 0, 0);


var imgEl = document.getElementById('rando-pic');

imgEl.addEventListener('click', allRandomPics);


var imgElTwo = document.getElementById('rando-pic2');

imgElTwo.addEventListener('click', allRandomPics);


var imgElThree = document.getElementById('rando-pic3');

imgElThree.addEventListener('click', allRandomPics);

function randomIndex() {
    var randomListPic = Math.floor(Math.random() * allPics.length);
    return randomListPic
    
}


function allRandomPics() {
    imgElThree.src = allPics[randomIndex()].picsPath;
    imgElTwo.src = allPics[randomIndex()].picsPath;
    imgEl.src = allPics[randomIndex()].picsPath;
    while(imgEl.src === imgElTwo.src || imgElTwo.src === imgElThree.src || imgEl.src === imgElThree.src) {
        imgElThree.src = allPics[randomIndex()].picsPath;
        imgElTwo.src = allPics[randomIndex()].picsPath;
        imgEl.src = allPics[randomIndex()].picsPath;
    }
}


allRandomPics();

// function handleClick(event) {
//     console.log(Pics.totalVotes, 'total clicks');
//     if(Pics.totalVotes > 24) {
//         Pics.container.removeEventListener('click', handleClick);
//         showTally();
//     }
//     if (event.target.id === 'image_container') {
//         return alert('Nope, you need to click on an image.');
//     }
//     Product.totalClicks += 1;
//     for( var i = 0; i < Product.names.length; i++) {
//         if(event.target.id === Product.all[i].name) {
//             Product.all[i].votes += 1;
//             console.log(event.target.id + ' has ' + Product.all[i].votes + ' votes in ' + Product.all[i].views + ' views.');
//         }
//     }

//     function showTally() {
//         for(var i = 0; i < Product.all.length; i++) {
//             var liEl = document.createElement('li');
//             liEl.textContent = Product.all[i].name + ' has ' + Product.all[i].votes + ' votes in ' + Product.all[i].views + ' views.';
//             Product.tally.appendChild(liEl);
//         }
//     }
    displayPics();






//do i need another picpath for the other two pictures?
//put everything into a bigger function
//look into wrapping in a set function?