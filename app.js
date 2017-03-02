var productImages = ['banana', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];


var productArray = [];
var counter = 0;

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
// console.log(productArray);


// function randomPictureIndex() {
//   return randomPic = Math.floor(Math.random() * productImages.length);
// }

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

  randomPictureIndex: function() {
    return Math.floor(Math.random() * productImages.length);
  },

  displayPics: function() {
    this.pic1 = productArray[this.randomPictureIndex()];
    this.pic2 = productArray[this.randomPictureIndex()];
    this.pic3 = productArray[this.randomPictureIndex()];

    if (this.pic1 === this.pic2 || this.pic1 === this.pic3 || this.pic2 === this.pic3) {
      this.displayPics();
    }

    this.picOneEl.src = this.pic1.path;
    this.picOneEl.id = this.pic1.name;
    this.picTwoEl.src = this.pic2.path;
    this.picTwoEl.id = this.pic2.name;
    this.picThreeEl.src = this.pic3.path;
    this.picThreeEl.id = this.pic3.name;
  },

  maxClicks: function() {
    console.log(this.clicks);
    if (this.clicks > 14) {
      this.imageHolderEl.removeEventListener('click', this.handleClick);
      this.results.addEventListener('click', function(e) {
        e.preventDefault();
        tracker.viewResults();
      });
    }

  },

  handleClick: function(e) {
    tracker.maxClicks();
    if (
      e.target.id === tracker.pic1.name || e.target.id === tracker.pic2.name || e.target.id === tracker.pic3.name
    ) {
      tracker.clicks++;
      tracker.countVotes(e.target.id);
      tracker.displayPics();
    }
  },

  countVotes: function(elId) {
    for (var i = 0; i < productArray.length; i++) {
      if (elId === productArray[i].name) {
        productArray[i].votes += 1;
        console.log(productArray[i]);
        return;
      }
    }
  },

  viewResults: function() {
    var ulEl = document.createElement('ul');

    for (var i in productArray) {
      var liEl = document.createElement('li');
      liEl.textContent = productArray[i].name + ': ' + productArray[i].votes;
      ulEl.appendChild(liEl);
    }
    this.viewResultsEl.appendChild(ulEl);
  }
};

tracker.imageHolderEl.addEventListener('click', tracker.handleClick);
tracker.displayPics();
