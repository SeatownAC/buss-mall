'use strict';
//array to store the objects
Pic.allPics = [];

function Pic(name, picsPath) {
    this.name = name;
    this.picsPath = picsPath;
    this.vote = 0;
    this.totalVotes = 0;
    Pic.allPics.push(this);
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

imgEl.addEventListener('click', randomPic);


function randomPic() {
    var randomIndex = Math.floor(Math.random() * Pic.allPics.length);
    imgEl.src = Pic.allPics[randomIndex].picsPath;
}
randomPic();

var imgEl = document.getElementById('rando-pic2');

imgEl.addEventListener('click', randomPicTwo);

function randomPicTwo() {
    var randomIndex = Math.floor(Math.random() * Pic.allPics.length);
    imgEl.src = Pic.allPics[randomIndex].picsPath;

}
randomPicTwo();

var imgEl = document.getElementById('rando-pic3');

imgEl.addEventListener('click', randomPicThree);

function randomPicThree() {
    var randomIndex = Math.floor(Math.random() * Pic.allPics.length);
    imgEl.src = Pic.allPics[randomIndex].picsPath;

}
randomPicThree();