// open + close controls for the book entry popup form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// prevent page from refreshing when submit button is hit
let form = document.querySelector(".form-container");

function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

// create library array for holding the user-created books
let myLibrary = [];

// new book class
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

// pushes new books entered by user to library
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

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
        
        cards.innerText = `Title: ${myLibrary[i].title} \n Author: ${myLibrary[i].author} \n Pages: ${myLibrary[i].pages}`;
        cardContainer.appendChild(cards);

        if (myLibrary[i].read === "yes") {
            checkbox.checked = true;
        }

        cards.appendChild(label);
        label.appendChild(checkbox);
        cards.appendChild(deleteButton);

        //styling for label and checkbox
        label.style.display = "flex";
        label.style.alignContent = "center";
        checkbox.style.display = "flex";
        checkbox.style.alignSelf = "center";

        //removes individual card from display when delete button is clicked
        deleteButton.addEventListener('click', (event) => {
            cardContainer.removeChild(cards);
            myLibrary.splice(i, 1, "removed");
        })

        //changes read status of Book object in myLibrary when toggled
        checkbox.addEventListener('click', (event) => {
            for (const obj of myLibrary) {
                if (obj.read == "yes") {
                    myLibrary[i].read = "no";
                } else {
                    myLibrary[i].read = "yes";
                }
            }
        })
    }
}

// allow user input to create new books in library
function createBook() {
    let bookTitle = document.querySelector("#title");
    let bookAuthor = document.querySelector("#author");
    let bookPages = document.querySelector("#pages");
    let bookRead = document.querySelector("#read");
    let readStatus
    let submitButton = document.querySelector(".btn-submit");

    // checks if the user has indicated the book has been read or not
    function hasRead() {
        if (bookRead.checked === true) {
            bookRead.checked = false;
            return readStatus = "yes";
        } else {
            return readStatus = "no";
        }
    }
    
    // checks if user has filled out forms before adding card
    function validateForm() {
        if (bookTitle.value == "" || bookAuthor.value == "" || bookPages.value == "") {
            alert("Please fill out all fields before submitting");
            return false;
        } else {
            return true;
        }
    }

    submitButton.addEventListener('click', (event) => {
        if (validateForm() == true) {
            hasRead();
            const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, readStatus);
            addBookToLibrary(newBook);
            addCard();
            bookTitle.value = "";
            bookAuthor.value = "";
            bookPages.value = "";
            closeForm();
        }
    })
}

createBook();