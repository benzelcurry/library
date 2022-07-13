// open + close controls for the book entry popup form

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//

/* let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let read = document.querySelector("#read");
let submitButton = document.querySelector(".btn-submit");
let titleOutput = document.querySelector(".title-card");
let authorOutpout = document.querySelector(".author-card");
let pagesOutput = document.querySelector(".pages-card");
let readOutput = document.querySelector(".read-card");

submitButton.addEventListener('click', (event) => {
    titleOutput.textContent = `Title: ${title.value}`;
    authorOutpout.textContent = `Author: ${author.value}`;
    pagesOutput.textContent =  `Pages: ${pages.value}`;
    readOutput.textContent = `Read?: ${read.value}`;
}) */

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
    let cardContainer = document.querySelector(".cards");

    for (let i = 0; i < myLibrary.length; i++) {
        let cards = document.createElement("div");

        justTitles = myLibrary.map(Book => Book.title);
        justAuthors = myLibrary.map(Book => Book.author);
        justPages = myLibrary.map(Book => Book.pages);
        justReads = myLibrary.map(Book => Book.read);

        cards.innerText = `Title: ${justTitles[i]} \n Author: ${justAuthors[i]} \n Pages: ${justPages[i]} \n Read?: ${justReads[i]}`;
        cardContainer.appendChild(cards);
    }
}