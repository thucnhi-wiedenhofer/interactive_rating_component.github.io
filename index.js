// DOM Elements
const modalRating = document.getElementById("modal_rating");
const modalThankYou = document.getElementById("modal_thank_you");

// display modal card thank you
function launchThankYouModal() {
  modalThankYou.style.display = "block";
  modalRating.style.display = "none";
}
