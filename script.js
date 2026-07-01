// Get modal elements
const modal = document.getElementById('cardModal');
const closeBtn = document.querySelector('.close');
const cards = document.querySelectorAll('.phone-card');
const categoryButtons = document.querySelectorAll('.category-btn');

function filterCards(category) {
	cards.forEach(card => {
		const matches = category === 'all' || card.dataset.category === category;
		card.style.display = matches ? 'block' : 'none';
	});
}

categoryButtons.forEach(button => {
	button.addEventListener('click', () => {
		categoryButtons.forEach(btn => btn.classList.remove('active'));
		button.classList.add('active');
		filterCards(button.dataset.category);
	});
});

// Open modal when card is clicked
cards.forEach(card => {
	card.addEventListener('click', function() {
		const img = this.querySelector('img');
		const title = this.querySelector('h3');
		const description = this.querySelector('p');

		// Set modal content
		document.getElementById('modalImg').src = img.src;
		document.getElementById('modalImg').alt = img.alt;
		document.getElementById('modalTitle').textContent = title.textContent;
		document.getElementById('modalDescription').textContent = description.textContent;

		// Show modal
		modal.style.display = 'block';
	});
});

// Close modal when X is clicked
closeBtn.addEventListener('click', function() {
	modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', function(event) {
	if (event.target === modal) {
		modal.style.display = 'none';
	}
});

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
	if (event.key === 'Escape') {
		modal.style.display = 'none';
	}
});
