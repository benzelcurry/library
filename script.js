// open + close controls for the book entry popup form

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

let form = document.querySelector(".form-container");

function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

// create objects for managing the books

let myLibrary = [];
let justTitles = [];
let justAuthors = [];
let justPages = [];
let justReads = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

const book1 = new Book('Book 1', 'Book Man', 57, 'yes');
const book2 = new Book('Book 2', 'Book Gal', 273, 'no');

// add additional cards to the board
function addCard() {
    for (let i = (myLibrary.length - 1); i < myLibrary.length; i++) {
        let cardContainer = document.querySelector(".cards");
        let cards = document.createElement("div");
        let checkbox = document.createElement("input");

        cards.dataset.indexNumber = i;
        
        // assigning attributes to the input (checkbox) element
        checkbox.type = "checkbox";
        checkbox.name = "read";
        checkbox.id = "read";

        let deleteButton = document.createElement("button");
        let label = document.createElement("label");
        label.htmlFor = "read";
        label.appendChild(document.createTextNode("Read?: "));

        deleteButton.id = "delete-button";
        deleteButton.textContent = "Remove Entry";

        justTitles = myLibrary.map(Book => Book.title);
        justAuthors = myLibrary.map(Book => Book.author);
        justPages = myLibrary.map(Book => Book.pages);
        justReads = myLibrary.map(Book => Book.read);

        cards.innerText = `Title: ${justTitles[i]} \n Author: ${justAuthors[i]} \n Pages: ${justPages[i]}`;
        cardContainer.appendChild(cards);

        cards.appendChild(label);
        label.appendChild(checkbox);
        cards.appendChild(deleteButton);

        //styling for label and checkbox
        label.style.display = "flex";
        label.style.alignContent = "center";
        checkbox.style.display = "flex";
        checkbox.style.alignSelf = "center";

        deleteButton.addEventListener('click', (event) => {
            cardContainer.removeChild(cards);
            myLibrary.splice(i, 1, "removed");
        })
    }
}

// allow user input to create new books in library

function createBook(title, author, pages, read) {
    let bookTitle = document.querySelector("#title");
    let bookAuthor = document.querySelector("#author");
    let bookPages = document.querySelector("#pages");
    let bookRead = document.querySelector("#read");
    let submitButton = document.querySelector(".btn-submit");

    submitButton.addEventListener('click', (event) => {
        console.log("Here");
        const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);
        addBookToLibrary(newBook);
        addCard();
        bookTitle.value = "";
        bookAuthor.value = "";
        bookPages.value = "";
        bookRead.checked = false;
        closeForm();
    })
}

createBook();