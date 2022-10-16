// DOM Elements
const modalRating = document.getElementById("modal_rating");
const modalThankYou = document.getElementById("modal_thank_you");
const form = document.querySelector("form");
const ratingResult = document.querySelector(".card-text");
var input = document.querySelectorAll("input");
var response = "";

document.querySelector("form").addEventListener("input", (e) => {
  response = e.target.value;
});

// display modal card thank you
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (response) {
    ratingResult.innerHTML = `<span class="rating-result"> You selected ${response} out of 5 </span>
    <h1 class="thank-you">Thank you!</h1>
    <p>
      We appreciate you taking the time to give a rating. If you ever need
      more support, don’t hesitate to get in touch!
    </p>`;
    modalThankYou.style.display = "block";
    modalRating.style.display = "none";
  }
});
