// Get all recipe cards and attach click event listeners
document.querySelectorAll('.recipe-card').forEach(card => {
    card.addEventListener('click', openPopup);
});

function openPopup(event) {
    const card = event.currentTarget;
    document.querySelector('.popup').style.display = 'flex';

    // Populate popup content based on clicked card's data attributes
    document.getElementById('popup-img').src = card.querySelector('img').src;
    document.getElementById('popup-title').textContent = card.getAttribute('data-title');
    document.getElementById('popup-ingredients').textContent = 'INGREDIENTS - ' + card.getAttribute('data-ingredients');
    document.getElementById('popup-recipe').textContent = 'RECIPE - ' + card.getAttribute('data-recipe');
}

function closePopup() {
    document.querySelector('.popup').style.display = 'none';
}

