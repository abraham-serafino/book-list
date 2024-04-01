const booksDataTypes = `
    type Book {
        id: ID!
        title: String!
        authorFirstName: String!
        authorLastName: String!
    }

    input NewBookInput {
        title: String!
        authorFirstName: String!
        authorLastName: String!
    }
`;

const booksQueryTypes = `
    books: [Book]
`;

const booksMutationTypes = `
    createBook(input: NewBookInput!): Book
`;

export { booksDataTypes, booksQueryTypes, booksMutationTypes };
