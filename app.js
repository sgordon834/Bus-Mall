var productImages = ['banana', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];


var productArray = [];

function Products(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  this.timesShown = 0;
  productArray.push(this);

}

for (var i = 0; i < productImages.length; i++) {
  var apple = new Products(productImages[i], 'img/' + productImages[i] + '.jpg');
}
console.log(productArray);
// console.log(productArray);
// var image = [];
// var choicesShown = [];
// var randomOne = document.getElementById('picOne');
// var randomTwo = document.getElementById('picTwo');
// var randomThree = document.getElementById('picThree');

// function createRandom() {
//   var randomPic = Math.floor(Math.random() * productImages.length);
//   if (productArray.indexOf(randomPic) > 0) {
//     randomPic = Math.floor(Math.random() * productImages.length);
//   } else {
//     productArray.push(randomPic);
//   }
//   return randomPic;
// }

var counter = 0;
// var image = [];
// var choice = [];

function randomPictureIndex() {
  var randomPic = Math.floor(Math.random() * productImages.length);
  return randomPic;
}
// console.log(randomPics);

// function for generating pictures into the empty div elements
function displayPics() {
  console.log('displayPics');
  var picOne = document.getElementById('picOne');
  var picTwo = document.getElementById('picTwo');
  var picThree = document.getElementById('picThree');

//Appending to document
  picOne.textContent = '';
  picTwo.textContent = '';
  picThree.textContent = '';

//Had too many variables declared that were unneeded
//if calling the src and id no need to appendChild

  // var imgOne = document.createElement('img'); **Not needed declared above by getElementById**
  var picIndex = randomPictureIndex();
  picOne.src = productArray[picIndex].path;
  picOne.id = productArray[picIndex].name;
  productArray[picIndex].counter++;
  // picOne.appendChild(imgOne); **Not needed .src and .id are appending to HTML.

  // var imgTwo = document.createElement('img');
  var picIndexTwo = randomPictureIndex();
  while (picIndexTwo === picIndex) {
    picIndexTwo = randomPictureIndex();
  }
  picTwo.src = productArray[picIndexTwo].path;
  picTwo.id = productArray[picIndexTwo].name;
  productArray[picIndexTwo].counter++;
  // picTwo.appendChild(imgTwo);
  //
  // var imgThree = document.createElement('img');
  var picIndexThree = randomPictureIndex();
  while (picIndexThree === picIndexTwo || picIndexThree === picIndex) {
    picIndexThree = randomPictureIndex();
  }
  picThree.src = productArray[picIndexThree].path;
  picThree.id = productArray[picIndexThree].name;
  productArray[picIndexThree].counter++;
//   picThree.appendChild(imgThree);
}
displayPics();
// Products.prototype.tracker = function  {
