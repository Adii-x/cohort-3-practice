const Library = [];

let nextId = 1;

function addBook(title, author) {
    const book = {
        id: nextId++,
        title,
        author,
        borrowed: false
    };

    Library.push(book);

    console.log(`Book "${title}" added successfully.`);
}

function borrowBook(id) {
    const book = Library.find(book => book.id === id);

    if (!book) {
        console.log("Book not found.");
        return;
    }

    if (book.borrowed) {
        console.log(`"${book.title}" is already borrowed.`);
        return;
    }

    book.borrowed = true;
    console.log(`You borrowed "${book.title}".`);
}

function returnBook(id) {
    const book = Library.find(book => book.id === id);

    if (!book) {
        console.log("Book not found.");
        return;
    }

    if (!book.borrowed) {
        console.log(`"${book.title}" is already available.`);
        return;
    }

    book.borrowed = false;
    console.log(`You returned "${book.title}".`);
}

function showAvailableBooks() {
    const availableBooks = Library.filter(book => !book.borrowed);

    if (availableBooks.length === 0) {
        console.log("No books available.");
        return;
    }

    console.log("Available Books:");

    availableBooks.forEach(book => {
        console.log(
            `ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`
        );
    });
}


addBook("Atomic Habits", "James Clear");
addBook("The Alchemist", "Paulo Coelho");
addBook("Deep Work", "Cal Newport");

borrowBook(2);

showAvailableBooks();

returnBook(2);

showAvailableBooks();

console.log(Library);