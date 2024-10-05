class Library {
	#books = [];

	constructor(books) {
		this.#books = books;
	}

	get getBooks() {
		return this.#books;
	}

	allBooks() {
		for (const el of this.#books) {
			console.log(`${this.#books.indexOf(el) + 1}
			Название: ${el.title} 
			Автор: ${el.author} 
			Год выпуска: ${el.year} 
			Описание: ${el.description}`);
		}
	}

	addBook(titleBook, authorBook, yearBook, descriptionBook) {
		const book = {
			title: titleBook,
			author: authorBook,
			year: yearBook,
			description: descriptionBook,
		};
		this.#books.push(book);
	}

	removeBook(titleBook) {
		for (const el of this.#books) {
			if (el.title === titleBook) {
				this.#books.splice(this.#books.indexOf(el), 1);
				return 'Книга удалена';
			}
		}
		return 'Такой книги не существует';
	}

	hasBook(titleBook) {
		for (const el of this.#books) {
			if (el.title === titleBook) {
				return true;
			}
		}
		return false;
	}
}

const arrBooks = [
	{
		title: '451 градус по Фаренгейту',
		author: 'Рэй Брэдбери',
		year: 1953,
		description: 'Роман о будущем, в котором книги уничтожаются, а свободное мышление запрещено.',
	},
	{
		title: '1984',
		author: 'Джордж Оруэлл',
		year: 1949,
		description: 'Антиутопия о тоталитарном государстве и угнетении индивидуальности.',
	},
	{
		title: 'Надаренный',
		author: 'Эрих Мария Ремарк',
		year: 1939,
		description: 'История о судьбе человека, столкнувшегося с ужасами войны.',
	},
];

const library = new Library(arrBooks);

library.addBook(
	'Варвар на ходу',
	'Эрих Мария Ремарк',
	1956,
	'Роман о человеке, который ищет свой путь в мире послевоенной Европы.'
);
library.allBooks();
console.log('-------------------------------------------');
console.log(library.removeBook('1984'));
library.allBooks();
console.log(library.hasBook('1984'));
console.log(library.hasBook('Варвар на ходу'));
