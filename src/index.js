const beerName = document.getElementById('beer-name');
beerName.innerHTML = "Oh So Flattening";

const beerImage = document.getElementById("beer-image");
beerImage.alt = "Oh So Flattening";
beerImage.src = "https://i.ibb.co/wQ4G0w1/flatiron-brew.png";

const beerDescription = document.getElementById("beer-description");
beerDescription.innerHTML = "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.";

let reviews = document.getElementById("review-list");
reviews.removeChild(reviews.firstChild,reviews.lastChild);


