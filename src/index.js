const beerName = document.getElementById('beer-name');
beerName.innerHTML = "Oh So Flattening";

const beerImage = document.getElementById("beer-image");
beerImage.alt = "Oh So Flattening";
beerImage.src = "https://i.ibb.co/wQ4G0w1/flatiron-brew.png";

const beerDescription = document.getElementById("beer-description");
beerDescription.innerHTML = "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.";

let reviewList = document.getElementById("review-list");
let firstLi = document.querySelector("main div.beer-details ul li");
firstLi.remove();
let remLi = document.querySelector("main div.beer-details ul li");
remLi.remove();
const review1 = document.createElement("li");
const review2 = document.createElement("li");
const review3 = document.createElement("li");
const review4 = document.createElement("li");

review1.textContent = "It's flat! Just the way I like it!!";
review2.textContent = "Is this the real beer, is this just fantasy?";
review3.textContent = "I've always hated bubbles going up my nose, so this is absolutely delightful.";
review4.textContent = "Flat straight out of the bottle! No more waiting for the fizziness to subside. Thank you FlattaBeer!! I love you!!!";

reviewList.append(review1,review2,review3,review4);

function getBeer(){
    fetch('http://localhost:3000/beers')
    .then(res => res.json())
    .then(beerData => console.log(beerData))
}
getBeer();

let beerList = document.getElementById("beer-list");
let beerListLi = document.querySelector('header nav ul li');
beerListLi.remove();
let beerListLi1 = document.querySelector('header nav ul li');
beerListLi1.remove();
let beerListLi2 = document.querySelector('header nav ul li');
beerListLi2.remove();

const beer1 = document.createElement('li');
const beer2 = document.createElement('li');
const beer3 = document.createElement('li');
const beer4 = document.createElement('li');
const beer5 = document.createElement('li');
const beer6 = document.createElement('li');
const beer7 = document.createElement('li');
const beer8 = document.createElement('li');
const beer9 = document.createElement('li');
const beer10 = document.createElement('li');


beer1.textContent = "Oh So Flattening";
beer2.textContent = "Pilsen Lager";
beer3.textContent = "Avery Brown Dredge";
beer4.textContent = "Electric India";
beer5.textContent = "AB:12";
beer6.textContent = "AB:07";
beer7.textContent = "Bramling X";
beer8.textContent = "Misspent Youth";
beer9.textContent = "Arcade Nation";
beer10.textContent = "Movember";

beerList.append(beer1,beer2,beer3,beer4,beer5,beer6,beer7,beer8,beer9,beer10);

document.addEventListener('DOMContentLoaded',() => {
    document.getElementById("review-form").addEventListener('submit',(e) => {
        e.preventDefault()
        buildSubmit(e.target.review.value)
    })
})

function buildSubmit(review){
    let addedReview = document.createElement('li');
    addedReview.textContent = review
    console.log(addedReview)
    document.querySelector('#"review-form"').appendChild(addedReview)


