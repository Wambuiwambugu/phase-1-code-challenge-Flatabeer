const beerName = document.querySelector('#beer-name');
const image = document.querySelector('#beer-image')
const domDescription = document.querySelector('#beer-description');

const reviewList = document.querySelector('#review-list');
const descriptionForm = document.querySelector('#description-form');
console.log(descriptionForm);

id = 1;
const idPath = 'beer:${id}'

fetch('http://localhost:3000/beers/1')
    .then(res => res.json())
    .then(data => renderBeer(data))


//render first beer on main page
function renderBeer(data){
    beerName.innerText = data.name;
        image.src = data.image_url;
        image.alt = data.name;
        domDescription.innerText = data.description;
        reviewList.replaceChildren();
        reviewData = data.reviews
        data.reviews.forEach(review => {
            let reviewItem = document.createElement('li')
            reviewItem.textContent = review
            reviewList.appendChild(reviewItem)
        })
        customerReviewForm();

}

//see beers in nav bar
const beerList = document.querySelector("#beer-list");
beerList.replaceChildren();

function listAllBeers(){
    fetch('http://localhost:3000/beers')
    .then(res => res.json())
    .then(data => {
        data.forEach(beer => {
            let menuItem = document.createElement('li')
            menuItem.innerText = beer.name
            beerList.appendChild(menuItem)
            menuItem.addEventListener('click',(e) => {
                e.preventDefault;
                renderBeer(beer)
            })
            
        })
    })    
}

function customerReviewForm(){
    document.querySelector("#review-form").addEventListener('submit',(e) => {
        e.preventDefault()
        console.log(e.target)
        console.log(e.target.review)

        handleSubmit(e.target.review.value)
        e.target.review.value = ""
    })
}
function handleSubmit(review){
    let newReview = document.createElement('li')
    newReview.textContent = review
    document.querySelector('#review-list').appendChild(newReview)
}
function deleteReview(){
    reviewList.addEventListener('click',(e) => {
            e.preventDefault();
            let li = e.target;
            li.parentElement.removeChild(li)
    })
}

//ge
function changeDescription(){
    descriptionForm.addEventListener('submit',(e) => {
        e.preventDefault();
        let newDescription = e.target.description.value
        replaceDescription(newDescription)
        e.target.description.value = ''
    })
}
changeDescription();

function replaceDescription(newDescription){
 fetch('http://localhost:3000/beers')
 .then(res => res.json())
 .then(data => {
    data.forEach(beer => {
        domDescription.textContent = newDescription
    })
 })


 
}

listAllBeers();
//customerReviewForm();
deleteReview();

