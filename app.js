var productImages = ['banana', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];


var productArray = [];
var counter = [];
// var displayNames = [];
var results = document.getElementById('showMe');


function Product(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 0;
// this.timesShown = 0;
  productArray.push(this);
  // displayNames.push(this.name);
};
// Product.prototype.increment = function() {
//   return timesShown += 1;
// };

for (var i in productImages) {
  var product = new Product(productImages[i], 'img/' + productImages[i] + '.jpg');
}

function randomPictureIndex() {
  return Math.floor(Math.random() * productImages.length);
}

//Tracks all votes, displays pictures, and events
var tracker = {
  picOneEl: document.getElementById('picOne'),
  picTwoEl: document.getElementById('picTwo'),
  picThreeEl: document.getElementById('picThree'),
  imageHolderEl: document.getElementById('picHolder'),
  pic1: null,
  pic2: null,
  pic3: null,
  chartData: null,
  totalClicks: 0,

//random pics display each time pic is selected
  displayPics: function () {
    this.pic1 = productArray[randomPictureIndex()];
    this.pic2 = productArray[randomPictureIndex()];
    this.pic3 = productArray[randomPictureIndex()];

    while (this.pic1 === this.pic2 || this.pic1 === this.pic3 || this.pic2 === this.pic3) {
      this.displayPics();
    }

    this.picOneEl.src = this.pic1.path;
    this.picTwoEl.src = this.pic2.path;
    this.picThreeEl.src = this.pic3.path;

    this.picOneEl.id = this.pic1.name;
    this.picTwoEl.id = this.pic2.name;
    this.picThreeEl.id = this.pic3.name;

  },

//stops selcections after 15 clicks and allows results to be viewed
  maxClicks: function () {
    if(tracker.totalClicks > 14) {
      tracker.imageHolderEl.removeEventListener('click', tracker.handleClick);
      console.log('max clicks allowed');
      storeData();
      return;
    }
  },

//Event handler for clicks, votes, and displays random pics

  handleClick: function (event) {
    // tracker.maxClicks();
    if (
      event.target.id === tracker.pic1.name || event.target.id === tracker.pic2.name || event.target.id === tracker.pic3.name
    ) {
      console.log('Click picked!');
      tracker.totalClicks++;
      console.log(tracker.totalClicks);
      tracker.countVotes();
      tracker.displayPics();
    }
    tracker.maxClicks();

  },

//counts time pics are selected
  countVotes: function () {
    if(event.target.id === tracker.pic1.name) {
      tracker.pic1.votes++;
    }
    if(event.target.id === tracker.pic2.name) {
      tracker.pic2.votes++;
    }
    if(event.target.id === tracker.pic3.name) {
      tracker.pic3.votes++;
    }
    console.log('pic picked was ' + event.target.id);
    tracker.displayPics();
  }
};
// };

//move data into array
var storeData = function() {
  for(var i in productArray) {
    counter.push(productArray[i].votes);
  }
};

var dynamicColors = function() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}


tracker.imageHolderEl.addEventListener('click', tracker.handleClick);
tracker.displayPics();

var chartResults = function() {
  drawChart();
};

results.addEventListener('click', chartResults);

var data = {
  labels: productImages,
  datasets: [
    {
    label: 'CHARTS',
    backgroundColor: dynamicColors(),
    borderColor: dynamicColors(),
    borderWidth: 1,
    data: counter,
  }
  ]
};


function drawChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  myChartData = new Chart(ctx,{
    type: 'bar',
    data: data,
  });
};
