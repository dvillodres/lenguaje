console.log("************** DELIVERABLE 04 *********************");

interface Book {
    title: string;
    isRead: boolean;
}

const books : Book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

const isBookRead = (books : Book[], title : string) : boolean => {
    const book: Book = books.find(book => book.title === title);
    return book ? book.isRead : false;
}

console.table(books);

console.log('Devastación has been read:', isBookRead(books, "Devastación"));
console.log('Canción de hielo y fuego has been read:', isBookRead(books, "Canción de hielo y fuego"));
console.log('Los Pilares de la Tierra has been read:', isBookRead(books, "Los Pilares de la Tierra"));

console.log("************** DELIVERABLE 04 END *********************");
