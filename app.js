var productImages = ['banana', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];


var productArray = [];
var counter = 0;

//constructor
function Product(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  // this.timesShown = 0;
  productArray.push(this);
}


// Product.prototype.increment = function() {
//   return timesShown += 1;
// };

for (var i = 0; i < productImages.length; i++) {
  var product = new Product(productImages[i], 'img/' + productImages[i] + '.jpg');
}

function randomPictureIndex() {
  return Math.floor(Math.random() * productImages.length);
}

//Object literal
var tracker = {
  picOneEl: document.getElementById('picOne'),
  picTwoEl: document.getElementById('picTwo'),
  picThreeEl: document.getElementById('picThree'),
  viewResultsEl: document.getElementById('aftermath'),
  results: document.getElementById('showMe'),
  imageHolderEl: document.getElementById('picHolder'),
  pic1: null,
  pic2: null,
  pic3: null,
  clicks: 1,

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
    console.log(this.clicks);
    event.preventDefault();
    if (this.clicks > 14) {
      this.imageHolderEl.removeEventListener('click', this.handleClick);
      this.results.addEventListener('click', function (event) {

        tracker.viewResults();
      });
    }

  },

  //Event handler for clicks, votes, and displays random pics
  handleClick: function (event) {
    tracker.maxClicks();
    if (
      event.target.id === tracker.pic1.name || event.target.id === tracker.pic2.name || event.target.id === tracker.pic3.name
    ) {
      tracker.clicks++;
      tracker.countVotes(event.target.id);
      tracker.displayPics();
    }
  },

  //counts time pics are selected
  countVotes: function (id) {
    for (var i = 0; i < productArray.length; i++) {
      if (id === productArray[i].name) {
        productArray[i].votes += 1;
        console.log(productArray[i]);
        return;
      }
    }
  },

  //renders results
  viewResults: function () {
    var ulEl = document.createElement('ul');

    for (var i = 0; i < productArray.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = productArray[i].name + ': ' + productArray[i].votes;
      ulEl.appendChild(liEl);
    }

    this.viewResultsEl.appendChild(ulEl);
  },

};

//event listener for tracker and call display pics function
tracker.imageHolderEl.addEventListener('click', tracker.handleClick);
tracker.displayPics();
