document.addEventListener("DOMContentLoaded", () => {
	const initialData = [
		{
			product: "Apple iPhone 13",
			reviews: [
				{ id: "1", text: "Отличный телефон! Батарея держится долго." },
				{ id: "2", text: "Камера супер, фото выглядят просто потрясающе." },
			],
		},
		{
			product: "Samsung Galaxy Z Fold 3",
			reviews: [
				{ id: "3", text: "Интересный дизайн, но дорогой." },
			],
		},
		{
			product: "Sony PlayStation 5",
			reviews: [
				{ id: "4", text: "Люблю играть на PS5, графика на высоте." },
			],
		},
	];

	// Функция для отображения продуктов и их отзывов
	function displayProducts() {
		const productsContainer = document.getElementById("productsContainer");
		const productSelect = document.getElementById("productSelect");

		productsContainer.innerHTML = ""; // Очищаем контейнер перед отображением
		productSelect.innerHTML = ""; // Очищаем селектор перед отображением

		initialData.forEach((product, index) => {
			// Добавляем продукт в выпадающий список
			const option = document.createElement("option");
			option.value = index; // Индекс продукта для выбора
			option.textContent = product.product;
			productSelect.appendChild(option);

			// Отображаем продукт и отзывы
			const productElement = document.createElement("div");
			productElement.className = "product";
			productElement.innerHTML = `<strong>Продукт: ${product.product}</strong>`;

			const reviewsContainer = document.createElement("div");
			reviewsContainer.className = "reviews";

			product.reviews.forEach(review => {
				const reviewElement = document.createElement("div");
				reviewElement.textContent = review.text;
				reviewsContainer.appendChild(reviewElement);
			});

			productElement.appendChild(reviewsContainer);
			productsContainer.appendChild(productElement);
		});
	}

	// Инициализация продуктов и отображение
	displayProducts();

	// Функция для добавления нового отзыва
	function addReview() {
		const reviewInput = document.getElementById("reviewInput");
		const reviewText = reviewInput.value.trim();
		const selectedIndex = document.getElementById("productSelect").value;

		if (reviewText.length < 50 || reviewText.length > 500) {
			alert("Длина отзыва должна быть от 50 до 500 символов.");
			return;
		}

		const newReview = { id: Date.now().toString(), text: reviewText };
		initialData[selectedIndex].reviews.push(newReview); // Добавляем отзыв к выбранному продукту
		displayProducts(); // Обновляем отображение всех продуктов и отзывов
		reviewInput.value = ""; // Очищаем поле ввода
	}

	document.getElementById("submitReview").addEventListener("click", addReview);
});

