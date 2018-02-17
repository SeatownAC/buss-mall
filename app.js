'use strict';
//array to store the objects
var allPics = [];
var totalClicks = 0;

function Pic(name, picsPath) {
    this.name = name;
    this.picsPath = picsPath;
    this.votes = 0;
    this.views = 0;

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

Pic.tally = document.getElementById('count');


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



function loadThreePics() {
    var picNumber = randomIndex();
    var picNumberTwo = randomIndex();
    var picNumberThree = randomIndex();
    imgElThree.src = allPics[picNumber].picsPath;
    imgElThree.name = allPics[picNumber].name;
    imgElTwo.src = allPics[picNumberTwo].picsPath;
    imgElTwo.name = allPics[picNumberTwo].name;
    imgEl.src = allPics[picNumberThree].picsPath;
    imgEl.name = allPics[picNumberThree].name;
    while(imgEl.src === imgElTwo.src || imgElTwo.src === imgElThree.src || imgEl.src === imgElThree.src) {
        imgElThree.src = allPics[randomIndex()].picsPath;
        imgElTwo.src = allPics[randomIndex()].picsPath;
        imgEl.src = allPics[randomIndex()].picsPath;
     }
}


function allRandomPics(event) {
    var name = event.target.name;
    var pic = eval(name.toLowerCase());
    pic.votes = pic.votes + 1;
    console.log(eval(name.toLowerCase()));
    loadThreePics();

    // function showTally() {
    //     console.log(showTally);
    //     for(var i = 0; i < allPics.length; i++) {
    //         var liEl = document.createElement('li');
    //         liEl.textContent = allPics[i].name + ' has ' + allPics[i].votes + ' votes in ' + allPics[i].views + ' views.';
    //         Pic.tally.appendChild(liEl);
    //     }
    // }


     totalClicks = totalClicks + 1
     if(totalClicks > 24) {
        imgEl.removeEventListener('click', allRandomPics);
        imgElTwo.removeEventListener('click', allRandomPics);
        imgElThree.removeEventListener('click', allRandomPics);
        
    }
    generateChart();

}


loadThreePics();


function generateChart() {
    var chartNames = [];
    var chartVotes = [];
    for (var j = 0; j < allPics.length; j++) {
    chartNames[j] = allPics[j].name;
    chartVotes[j] = allPics[j].votes;

    }
    var labelColors = ['yellow', 'green', 'yellow', 'green', 'yellow', 'green', 'yellow', 'green', 'yellow', 'green', 'yellow', 'green','yellow', 'green','yellow', 'green','yellow'];

    var ctx = document.getElementById('chart').getContext('2d');
   
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: chartNames,
        datasets: [{
          label: '# of Votes',
          data: chartVotes,
          backgroundColor: labelColors
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks:  {
              beginAtZero: true,
              stepSize: 1,
              max: 10,
            }
          }]
        }
      }
    });
   }