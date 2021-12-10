const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");
const reviews = document.querySelector(".review");
const markers = document.querySelector("#markers");

const arrayReviews = [reviews, reviews.nextElementSibling, reviews.nextElementSibling.nextElementSibling];
const arrayChildren = [1, 3, 5, 7, 9];
let i = 0, j = 1, k = arrayChildren.length - 1;

rightArrow.onclick = function() {
    k = i;
    arrayReviews.map( e => e.childNodes[arrayChildren[i]].style.display = "none");
    arrayReviews.map( e => e.childNodes[arrayChildren[j]].style.display = "grid");
    markers.childNodes[arrayChildren[i]].style.backgroundImage = "url(./images/marker-1-1.svg)";
    markers.childNodes[arrayChildren[j]].style.backgroundImage = "url(./images/marker-1-2.svg)";
    i = j;
    (j < arrayChildren.length - 1) ? j++ : j = 0;
}
leftArrow.onclick = function() {
    j = i;
    arrayReviews.map( e => e.childNodes[arrayChildren[i]].style.display = "none");
    arrayReviews.map( e => e.childNodes[arrayChildren[k]].style.display = "grid");
    markers.childNodes[arrayChildren[i]].style.backgroundImage = "url(./images/marker-1-1.svg)";
    markers.childNodes[arrayChildren[k]].style.backgroundImage = "url(./images/marker-1-2.svg)";
    i = k;
    ( k > 0 ) ? k-- : k = 4;
}
