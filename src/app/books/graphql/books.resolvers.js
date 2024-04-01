import { addBook, getBooks } from '@/app/books/models/books.model';

const booksQueries = {
    books() {
        return getBooks();
    },
};

const booksMutations = {
    createBook(_, { input: { title, authorFirstName, authorLastName } }) {
        return addBook({ title, authorFirstName, authorLastName });
    },
};

export { booksQueries, booksMutations };
