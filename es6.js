class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

class Store {
	//GET THE BOOK DATA FROM LOCAL STORAGE
	static getBooks() {
		let books;
		if (
			localStorage.getItem("books") === null ||
			localStorage.getItem("books") === "[]"
		) {
			books = [];
			//DISPLAY THE BOOK IMAGE WHEN NO BOOKS STORED
			UI.displayBookImage();
		} else {
			books = JSON.parse(localStorage.getItem("books"));
		}
		return books;
	}

	//STORE BOOK DATA TO LOCAL STORAGE
	static storeBooks(book) {
		let books;

		if (localStorage.getItem("books") === null) {
			books = [];
		} else {
			books = JSON.parse(localStorage.getItem("books"));
		}

		books.push(book);
		localStorage.setItem("books", JSON.stringify(books));
		alert("Saved");
	}

	//REMOVE BOOK DATA FROM LOCAL STORAGE
	static removeBookFromStorage(bookItem) {
		let isbn = bookItem.parentElement.previousElementSibling.textContent;
		let books;
		if (localStorage.getItem("books") === null) {
			books = [];
		} else {
			books = JSON.parse(localStorage.getItem("books"));
		}
		books.forEach(function(book, index) {
			if (isbn === book.isbn) {
				books.splice(index, +1);
			}
		});
		localStorage.setItem("books", JSON.stringify(books));
	}

	//CLEAR ALL BOOK DATA FROM LOCAL STORAGEx
	static clearBooksLS() {
		localStorage.clear();
	}
}

class UI {
	//DISPLAY BOOK ELEMENT TO UI
	static displayBooks() {
		//INSTANCIATE THE BOOK CLASS  TO GET THE BOOK VALUES
		const books = Store.getBooks();

		//LOOP ALL THE BOOK VALUES TO BOOK ELEMENTS TO BE DISPLAYED IN UI
		books.forEach(function(book) {
			const list = document.getElementById("book-list");
			//  CREATE TR ELEMENT
			const row = document.createElement("tr");
			//  Insert cols
			row.innerHTML = `
            <td class="center">${book.title}</td>
            <td class="center">${book.author}</td>
            <td class="center">${book.isbn}</td>
            <td class="center"><a href="#" class="edit center fa fa-edit btn-small btn-floating blue"></a> <a href="#" class="delete center fa fa-trash btn-small btn-floating red"></a></td>
            `;
			list.appendChild(row);
		});
	}

	//ADD BOOK ELEMENTS TO UI
	static addBookElements(book) {
		const list = document.getElementById("book-list");
		//  CREATE TR ELEMENT
		const row = document.createElement("tr");
		//  Insert cols
		row.innerHTML = `
         <td class="center">${book.title}</td>
         <td class="center">${book.author}</td>
         <td class="center">${book.isbn}</td>
         <td class="center"><a href="#" class="edit center fa fa-edit btn-small btn-floating blue"></a> <a href="#" class="delete center fa fa-trash btn-small btn-floating red"></a></td>
         `;
		list.appendChild(row);
	}

	//CLEAR THE INPUT FIELDS, INPUT FIELDS SET TO EMPTY
	static clearFields() {
		document.getElementById("title").value = "";
		document.getElementById("author").value = "";
		document.getElementById("isbn").value = "";
	}

	//HIDES THE CANCEL BUTTON
	static hideCancelButton() {
		let cnlbtn = document.getElementById("cancel-btn").className;
		console.log(cnlbtn);

		if (cnlbtn === "u-full-width btn-small hoverable white btn-flat mt-2") {
			document.getElementById("cancel-btn").className =
				"hide u-full-width btn-small hoverable white btn-flat mt-2";
		}
	}

	//REVEAL THE CANCEL BUTTON
	static revealCancelButton() {
		let cnlbtn = document.getElementById("cancel-btn").className;
		console.log(cnlbtn);
		if (
			cnlbtn === "hide u-full-width btn-small hoverable white btn-flat mt-2"
		) {
			document.getElementById("cancel-btn").className =
				"u-full-width btn-small hoverable white btn-flat mt-2";
		}
	}

	//CHANGE BUTTON VALUE ADD BOOK TO ADD UPDATE
	static setExecuteButtonToUpdateButton() {
		let btn = document.getElementById("add-book");

		if (btn.value === "ADD BOOK") {
			document.getElementById("add-book").value = "UPDATE BOOK";
		}
	}

	//CHANGE BUTTON VALUE UPDATE BOOK TO ADD BOOK
	static setExecuteButtonToAddBook() {
		let btn = document.getElementById("add-book");

		if (btn.value === "UPDATE BOOK") {
			document.getElementById("add-book").value = "ADD BOOK";
		}
	}

	//DELETE BOOK ELEMENTS FROM UI
	static deleteBooksElements(target) {
		if (
			target.className ===
			"delete center fa fa-trash btn-small btn-floating red"
		) {
			target.parentElement.parentElement.remove();
		}
	}

	//DISPLAY THE BOOK IMAGE WHEN NO ENTRY
	static displayBookImage() {
		const output = `
            <img src='no-books.png'>
            <h5 class=''>No Books</h5>
            `;

		document.getElementById("no-display").innerHTML = output;
	}

	//SHOW ALERT MESSAGE
	static showAlert(message, className) {
		//   Create a div
		const div = document.createElement("div");
		//   Add class
		div.className = `notif alert ${className}`;
		div.appendChild(document.createTextNode(message));
		//  Add text
		//  Get Parent
		const container = document.querySelector(".card-content");
		//  Get form
		const form = document.querySelector("#book-form");
		//  insert alert
		container.insertBefore(div, form);
		//  TIME OUT of the alert
		setTimeout(function() {
			document.querySelector(".alert").remove();
		}, 2000);
	}

	//GETS THE ELEMENT OF TARGET BOOK FOR EDIT
	static editBook(target) {
		UI.clearFields();

		let isbn = target.parentElement.previousElementSibling.textContent,
			author =
				target.parentElement.previousElementSibling.previousElementSibling
					.textContent,
			title =
				target.parentElement.previousElementSibling.previousElementSibling
					.previousElementSibling.textContent;

		if (
			target.className === "edit center fa fa-edit btn-small btn-floating blue"
		) {
			document.getElementById("title").value = title;
			document.getElementById("author").value = author;
			document.getElementById("isbn").value = isbn;

			//CHANGE BUTTON VALUE UPDATE BOOK  TO ADD BOOK
			UI.setExecuteButtonToUpdateButton();
		}
	}
	//REPLACE THE BOOK ELEMENTS FROM UI
	static replaceBooksElements(target) {
		if (
			this.event.className ===
			"edit center fa fa-edit btn-small btn-floating blue"
		) {
			target.parentElement.parentElement.remove();
		}
	}

	//SET THE EVENT FOR EDIT
	static setEvent(e) {
		this.event = e;
	}

	//GET THE EVENT FROM EDIT
	static getEvent() {
		console.log(event);
		return this.event;
	}
}

document.addEventListener("DOMContentLoaded", function(e) {
	const book = new Book(title, author, isbn);
	Store.getBooks(book);
	UI.displayBooks();
});

//  EVENT LISTNERS
document.getElementById("book-form").addEventListener("submit", function(e) {
	//   GET form values
	//GET THE VALUE OF SUBMIT BUTTON
	let btn = document.getElementById("book-form").elements[3].value;

	if (btn === "ADD BOOK") {
		const title = document.getElementById("title").value,
			author = document.getElementById("author").value,
			isbn = document.getElementById("isbn").value;
		const book = new Book(title, author, isbn);
		//Instantiate UI if no input

		if (title === "" || author === "" || isbn === "") {
			// Error alert
			UI.showAlert("✖ Please fill all fields needed.", "error");
		} else {
			//  Add book
			UI.addBookElements(book);
			//CLEAR THE INPUT FIELDS IN UI
			UI.clearFields();
			//STORE BOOK DATA IN LOCAL STORAGE
			Store.storeBooks(book);

			//SHOW ALERT MESSAGE
			UI.showAlert("✔ Book added successfully", "success");
			setTimeout(() => {
				location.reload();
			}, 200);
		}
	} else if (btn === "UPDATE BOOK") {
		//REPLACES THE EDITED BOOK ELEMENTS TO NEW BOOK ELEMENTS
		UI.replaceBooksElements(UI.getEvent());
		//REMOVE BOOK DATA FROM LOCAL STORAGE
		Store.removeBookFromStorage(UI.getEvent());

		const title = document.getElementById("title").value,
			author = document.getElementById("author").value,
			isbn = document.getElementById("isbn").value;

		const book = new Book(title, author, isbn);

		//Instantiate UI if no input
		if (title === "" || author === "" || isbn === "") {
			// Error alert
			UI.showAlert("✖ Please fill all fields needed.", "error");
		} else {
			//  Add book
			//STORE THE BOOK DATA TO UI
			UI.addBookElements(book);
			//CLEAR THE INPUT FIELDS IN UI
			UI.clearFields();
			//STORE BOOK DATA TO LOCAL STORAGE
			Store.storeBooks(book);
			//HIDE THE CANCEL BUTTON
			UI.hideCancelButton();
			//SHOW ALERT MESSAGE IF UPDATED
			UI.showAlert("✔ Book updated successfully", "success");
			//CHANGE UPDATE BUTTON TO ADD BUTTON
			UI.setExecuteButtonToAddBook();
		}
	}

	e.preventDefault();
});

//  remove book event listener
document.querySelector("#book-list").addEventListener("click", function(e) {
	//  Delete Book

	if (
		e.target.className ===
		"delete center fa fa-trash btn-small btn-floating red"
	) {
		// //HIDES THE CANCEL BUTTON
		// UI.hideCancelButton();
		//DELETE THE BOOK ELEMENTS FROM UI
		UI.deleteBooksElements(e.target);
		//REMOVE THE BOOK DATA FROM LOCAL STORAGE
		Store.removeBookFromStorage(e.target);
		//SHOW ALERT MESSAGE
		UI.showAlert("✔ Book removed successfully", "success");

		setTimeout(() => {
			location.reload();
		}, 200);
	} else if (
		e.target.className === "edit center fa fa-edit btn-small btn-floating blue"
	) {
		//REVEAL THE CANCEL BUTTON
		UI.revealCancelButton();
		//SET THE EVENT FOR e
		UI.setEvent(e.target);
		//GETS THE ELEMENT OF THE TARGET BOOK FOR EDIT
		UI.editBook(e.target);
		//CHANGE ADD BUTTON TO UPDATE BUTTON
		// UI.setExecuteButtonToUpdateButton();
	}

	e.preventDefault();
});

document.querySelector(".clear-books").addEventListener("click", function(e) {
	const list = document.getElementById("book-list");
	if (confirm("Are you sure do you want to clear all task?")) {
		while (list.firstChild) {
			list.removeChild(list.firstChild);
			//CLEAR THE INPUT FIELDS IN UI
			UI.clearFields();
			//CLEAR THE LOCAL STORAGE
			Store.clearBooksLS();
			//DISPLAY THE BOOK IMAGE
			UI.displayBookImage();
		}
	}
});

document.getElementById("cancel-btn").addEventListener("click", function() {
	//GET THE CANCEL BUTTON ID
	let cnlbtn = document.getElementById("cancel-btn").id;

	if (cnlbtn === "cancel-btn") {
		//CLEAR THE INPUT FIELDS IN UI
		UI.clearFields();

		//HIDES THE CANCEL BUTTON
		UI.hideCancelButton();
		//CHANGE THE VALUE OF UPDATE BUTTON TO ADD BUTTON
		UI.setExecuteButtonToAddBook();
	}
});
