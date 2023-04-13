const beerName = document.querySelector('#beer-name');
const image = document.querySelector('#beer-image')
const description = document.querySelector('#beer-description');

const reviewList = document.querySelector('#review-list');
let firstLi = document.querySelector('#review-list li');
firstLi.remove()
let remLi = document.querySelector('#review-list li');
remLi.remove();



//render first beer on main page
function renderFirstBeer(){
    fetch('http://localhost:3000/beers/1')
    .then(res => res.json())
    .then(data => {
        beerName.innerText = data.name;
        image.src = data.image_url;
        image.alt = data.name;
        description.innerText = data.description;
        reviewList.innerHTML = `
        <li>${data.reviews[0]}</li>
        <li>${data.reviews[1]}</li>
        <li>${data.reviews[2]}</li>
        <li>${data.reviews[3]}</li>
        `
        
    })
}
renderFirstBeer();
//see beers in nav bar
const beerList = document.querySelector("#beer-list");
let liOne = document.querySelector('#beer-list li');
liOne.remove();
let liTwo = document.querySelector('#beer-list li');
liTwo.remove();
let liThree = document.querySelector('#beer-list li');
liThree.remove();


function getAllBeers(){
    fetch('http://localhost:3000/beers')
    .then(res => res.json())
    .then(beerData => {
        beerData.forEach(beer => {
            let menuItem = document.createElement('li')
            menuItem.innerText = beer.name
            beerList.appendChild(menuItem)
        })
    })    
}
function customerReviewForm(){
    document.querySelector("#review-form").addEventListener('submit',(e) => {
        e.preventDefault()
        handleSubmit(e.target.review.value)
    })
} 
function handleSubmit(review){
    let newReview = document.createElement('li')
    newReview.textContent = review
    document.querySelector('#review-list').appendChild(newReview)
}

function navBarList(){
    getAllBeers()
}
navBarList();
customerReviewForm();
