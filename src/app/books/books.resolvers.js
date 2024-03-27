import { addBook, getBooks } from '@/app/books/books.model';

const booksQueries = {
    books() {
        return getBooks();
    },
};

const booksMutations = {
    createBook({ title, authorFirstName, authorLastName }) {
        return addBook({ title, authorFirstName, authorLastName });
    },
};

export { booksQueries, booksMutations };
