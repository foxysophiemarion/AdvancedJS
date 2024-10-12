document.addEventListener('DOMContentLoaded', loadReviews);

function addReview() {
	const productName = document.getElementById('productName').value;
	const reviewText = document.getElementById('reviewText').value;

	if (!productName || !reviewText) return alert('Пожалуйста, заполните все поля.');

	const reviews = JSON.parse(localStorage.getItem('reviews')) || {};

	if (!reviews[productName]) {
		reviews[productName] = [];
	}

	reviews[productName].push(reviewText);
	localStorage.setItem('reviews', JSON.stringify(reviews));

	document.getElementById('productName').value = '';
	document.getElementById('reviewText').value = '';
	loadReviews();
}

function loadReviews() {
	const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
	const reviewsList = document.getElementById('reviewsList');
	reviewsList.innerHTML = '';

	for (let product in reviews) {
		const productDiv = document.createElement('button');
		productDiv.classList.add('product');

		const productTitle = document.createElement('h3');
		productTitle.textContent = product;
		productTitle.onclick = () => toggleReviews(product);
		productDiv.appendChild(productTitle);

		const reviewContainer = document.createElement('div');
		reviewContainer.classList.add('reviewContainer');
		reviewContainer.style.display = 'none';

		reviews[product].forEach((review, index) => {
			const reviewDiv = document.createElement('div');
			reviewDiv.classList.add('review');
			reviewDiv.textContent = review;

			const deleteButton = document.createElement('button');
			deleteButton.textContent = 'Удалить';
			deleteButton.onclick = () => deleteReview(product, index);
			reviewDiv.appendChild(deleteButton);

			reviewContainer.appendChild(reviewDiv);
		});

		productDiv.appendChild(reviewContainer);
		reviewsList.appendChild(productDiv);
	}
}

function toggleReviews(product) {
	const reviewContainers = document.querySelectorAll('.reviewContainer');

	reviewContainers.forEach(container => {
		const productTitle = container.previousElementSibling;
		if (productTitle.textContent === product) {
			container.style.display = container.style.display === 'none' ? 'flex' : 'none';
		} else {
			container.style.display = 'none';
		}
	});
}

function deleteReview(product, index) {
	const reviews = JSON.parse(localStorage.getItem('reviews'));
	reviews[product].splice(index, 1);

	if (reviews[product].length === 0) {
		delete reviews[product];
	}

	localStorage.setItem('reviews', JSON.stringify(reviews));
	loadReviews();
}

