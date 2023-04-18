const beerName = document.querySelector('#beer-name');
const image = document.querySelector('#beer-image')
const description = document.querySelector('#beer-description');

const reviewList = document.querySelector('#review-list');

fetch('http://localhost:3000/beers/1')
    .then(res => res.json())
    .then(data => renderBeer(data))


//render first beer on main page
function renderBeer(data){
    beerName.innerText = data.name;
        image.src = data.image_url;
        image.alt = data.name;
        description.innerText = data.description;
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
        handleSubmit(e.target.review.value)
    })
}
function handleSubmit(review){
    let newReview = document.createElement('li')
    newReview.textContent = review
    document.querySelector('#review-list').appendChild(newReview)
}
function deleteReview(){
    reviewList.addEventListener('click',(e) => {
            e.preventDefault;
            let li = e.target;
            li.parentElement.removeChild(li)
    })
}
function changeDescription(description){
    document.querySelector('#description-form').addEventListener('submit',(e) => {
        e.preventDefault;
        console.log('click')
    })
}

listAllBeers();
//customerReviewForm();
deleteReview();

