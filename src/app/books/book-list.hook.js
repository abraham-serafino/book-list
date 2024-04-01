'use client';

import { useEffect, useMemo } from 'react';
import { create } from 'zustand';
import { gql, request } from 'graphql-request';

const useBookListStore = create((set) => ({
    alreadyFetched: false,
    books: [],
    addBook({ title, authorFirstName, authorLastName }) {
        return set(({ books }) => ({
            books: [...books, { title, authorFirstName, authorLastName }],
        }));
    },
    setBooks(newBooks) {
        return set((_) => ({ books: newBooks }));
    },
    setAlreadyFetched() {
        return set((_) => ({ alreadyFetched: true }));
    },
}));

export default function useBookList() {
    const { alreadyFetched, setAlreadyFetched, books, addBook, setBooks } =
        useBookListStore(
            ({
                alreadyFetched,
                setAlreadyFetched,
                books,
                addBook,
                setBooks,
            }) => ({
                alreadyFetched,
                setAlreadyFetched,
                books,
                addBook,
                setBooks,
            }),
        );

    useEffect(() => {
        if (!alreadyFetched) {
            setAlreadyFetched();
            getBooks();
        }
    }, []);

    const getBooks = async () => {
        const { books: newBooks } = await request(
            'http://localhost:3000/graphql',
            gql`
                {
                    books {
                        title
                        authorFirstName
                        authorLastName
                    }
                }
            `,
        );

        setBooks(newBooks);
    };

    const createBook = async ({ title, authorFirstName, authorLastName }) => {
        const existingBook = books?.find(
            (item) =>
                item.title === title && item.authorLastName === authorLastName,
        );

        if (!existingBook) {
            addBook({ title, authorFirstName, authorLastName });

            await request(
                'http://localhost:3000/graphql',
                gql`
                    mutation CreateBook($input: NewBookInput!) {
                        createBook(input: $input) {
                            title
                            authorFirstName
                            authorLastName
                        }
                    }
                `,
                { input: { title, authorFirstName, authorLastName } },
            );

            getBooks();
        }
    };

    return useMemo(() => {
        return {
            books,
            getBooks,
            createBook,
        };
    }, [books]);
}
