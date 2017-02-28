var productImages = ['banana', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];


var productArray = [];
var counter = 0;

function Product(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  this.timesShown = 0;
  productArray.push(this);
}

Product.prototype.increment = function() {
  return timesShown += 1;
};

for (var i = 0; i < productImages.length; i++) {
  var product = new Product(productImages[i], 'img/' + productImages[i] + '.jpg');
}
// console.log(productArray);


function randomPictureIndex() {
  return randomPic = Math.floor(Math.random() * productImages.length);
}
// console.log(randomPics);

// function for generating pictures into the empty div elements
var display = document.getElementById('picHolder');
var picOne = document.getElementById('picOne');
var picTwo = document.getElementById('picTwo');
var picThree = document.getElementById('picThree');
var click = document.getElementById('clickMe');
//
function getPics() {
  console.log('Get Pics!');
   var picIndex = randomPictureIndex(productArray);
   var picIndexTwo = randomPictureIndex(productArray);
   var picIndexThree = randomPictureIndex(productArray);

   while (picIndexTwo === picIndex) {
       picIndexTwo = randomPictureIndex(productArray);
     }
     while (picIndexThree === picIndexTwo || picIndexThree === picIndex) {
         picIndexThree = randomPictureIndex(productArray);
       }
       return [picIndex, picIndexTwo, picIndexThree];
}
    //  getPics();

     function displayPics() {
       console.log('display my pics');
       var pics = this.getPics(productArray);
       var getPics1 = productArray[pics[0]];
       var getPics2 = productArray[pics[1]];
       var getPics3 = productArray[pics[2]];

       picOne.src = getPics1.path;
       picTwo.src = getPics2.path;
       picThree.src = getPics3.path;

       picOne.id = getPics1.name;
       picTwo.id = getPics2.name;
       picThree.id = getPics3.name;

     }



// picOne.textContent = '';
// picTwo.textContent = '';
// picThree.textContent = '';



// function displayPics() {
//   console.log('displayPics');
// //Had too many variables declared that were unneeded
// //if calling the src and id no need to appendChild
//
//   // var imgOne = document.createElement('img'); **Not needed declared above by getElementById**
//   // var img1 = document.createElement('img');
//   var picIndex = randomPictureIndex();
//   picOne.src = productArray[picIndex].path;
//   picOne.id = productArray[picIndex].name;
//   productArray[picIndex].timesShown++;
//   // console.log(votes);
//   // picOne.appendChild(img1);
//   // **Not needed .src and .id are appending to HTML.
//
//   // var img2 = document.createElement('img');
//   var picIndexTwo = randomPictureIndex();
//   while (picIndexTwo === picIndex) {
//     picIndexTwo = randomPictureIndex();
//   }
//   picTwo.src = productArray[picIndexTwo].path;
//   picTwo.id = productArray[picIndexTwo].name;
//   productArray[picIndexTwo].timesShown++;
//   // picTwo.appendChild(img2);
//
//   // var imgThree = document.createElement('img');
//   var picIndexThree = randomPictureIndex();
//   while (picIndexThree === picIndexTwo || picIndexThree === picIndex) {
//     picIndexThree = randomPictureIndex();
//   }
//   var img3 = document.createElement('img')
//   picThree.src = productArray[picIndexThree].path;
//   picThree.id = productArray[picIndexThree].name;
//   productArray[picIndexThree].timesShown++;
//   // picThree.appendChild(img3);
// console.log(productArray[picIndex].timesShown);
//  }
// displayPics();

var counter = 0;

//Handle Click event

function handleClick (eventClick) {
  eventClick.preventDefault();
  console.log('handleClick', eventClick);
  console.log(eventClick.target.id);
  counter++;
  //the object of bubblegum
// for (var i = 0; i < productArray.length; i++){
// if (productArray[i].name === eventClick.target.id) {
if(event.target.id !== 'picholder'){
  displayPics();
  productArray[i].votes++;
  console.log(productArray[i].votes);
}
}
// if (counter < 5) {
//    getPics();



//Add number of votes
// function addClicks() {
// console.log('addClickEvents');
// for (var i = 0; i < productArray.length; i++) {
//   // if (productArray[i] ===)
// }
//   // console.log('display');
// }
// addClicks();
// var pic = document.getElementById('picHolder', handleClick);
// pic.addEventListener('click', handleClick);
// displayPics();



// var el = document.getElementsByClassName('picholder');
// el.addEventListener('click', handleClick);
// var elTwo = document.getElementById('picholder');
// elTwo.addEventListener('click', handleClick);
// var elThree = document.getElementById('picholder');
// elThree.addEventListener('click', handleClick);

displayPics();
// getPics();
var elPic = document.getElementById('clickMe');
elPic.addEventListener('click', handleClick);
// console.log();
