// script.js
const openButtons = document.querySelectorAll('.openForm');
const modal = document.getElementById('popupForm');
const closeButton = document.getElementsByClassName('close')[0];

openButtons.forEach(button => {
    button.onclick = function() {
        modal.style.display = 'block';
    }
});

closeButton.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// document.getElementById('clearForm').onclick = function() {
//     document.getElementById('contactForm').reset();
// }
