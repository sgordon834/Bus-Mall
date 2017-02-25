var productImages = ['banana', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntuan', 'unicorn', 'water-can', 'wine-glass'];

var productArray = [];
var counter = 0;


function Products(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  productArray.push(this);

}

// Products.prototype.tracker = function  {



for (var i = 0; i < productImages.length; i++) {
  var apple = new Products(productImages[i], 'img/' + productImages[i] + '.jpg');
}
console.log(productArray);
