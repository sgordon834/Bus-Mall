var productImages = ['banana', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];


var productArray = [];
var counter = 0;

function Product(name, path, votes, timesShown) {
  this.name = name;
  this.path = path;
  this.votes = votes;
  this.timesShown = timesShown;
  productArray.push(this);
}

for (var i = 0; i < productImages.length; i++) {
  var product = new Product(productImages[i], 'img/' + productImages[i] + '.jpg');
}
// console.log(productArray);

function randomPictureIndex() {
  return randomPic = Math.floor(Math.random() * productImages.length);
}
// console.log(randomPics);

// function for generating pictures into the empty div elements
function displayPics() {
  // console.log('displayPics');
  var picOne = document.getElementById('picOne');
  var picTwo = document.getElementById('picTwo');
  var picThree = document.getElementById('picThree');

//Appends to document
  picOne.textContent = '';
  picTwo.textContent = '';
  picThree.textContent = '';

//Had too many variables declared that were unneeded
//if calling the src and id no need to appendChild

  // var imgOne = document.createElement('img'); **Not needed declared above by getElementById**
  var picIndex = randomPictureIndex();
  picOne.src = productArray[picIndex].path;
  picOne.id = productArray[picIndex].name;

  // productArray[picIndex].votes++;
  // console.log(votes);
  // picOne.appendChild(imgOne); **Not needed .src and .id are appending to HTML.

  // var imgTwo = document.createElement('img');
  var picIndexTwo = randomPictureIndex();
  while (picIndexTwo === picIndex) {
    picIndexTwo = randomPictureIndex();
  }
  picTwo.src = productArray[picIndexTwo].path;
  picTwo.id = productArray[picIndexTwo].name;
  // productArray[picIndexTwo].votes++;
  // picTwo.appendChild(imgTwo);
  // var imgThree = document.createElement('img');
  var picIndexThree = randomPictureIndex();
  while (picIndexThree === picIndexTwo || picIndexThree === picIndex) {
    picIndexThree = randomPictureIndex();
  }
  picThree.src = productArray[picIndexThree].path;
  picThree.id = productArray[picIndexThree].name;
  // productArray[picIndexThree].votes++;
//   picThree.appendChild(imgThree);
}
displayPics();
// var counter = 0;

//Handle Click event
function handleClick (eventClick) {
  console.log('handleClick', 'eventClick');
  // console.log(eventClick);
  //the object of bubblegum
for (var i = 0; i < productArray.length; i++) {

}
}
handleClick();

//Add number of votes
function addClicks() {
console.log('addClickEvents');
// var picHolder = document.getElementById('picHolder');
// for (var i = 0; i < productArray.length; i++) {
  // imageClicked = picHolder[i];
  // imageClicked.addEventListener('click', handleClick);
}
console.log();
addClicks();
//Counts number of times images clicked
var picHolder = document.getElementById('picHolder');
picHolder.addEventListener('click', handleClick);
