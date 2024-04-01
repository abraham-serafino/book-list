import {
    booksDataTypes,
    booksQueryTypes,
    booksMutationTypes,
} from '@/app/books/graphql/books.schema';

const typeDefs = `
    ${booksDataTypes}

    type Query {
        ${booksQueryTypes}
    }

    type Mutation {
        ${booksMutationTypes}
    }
`;

export default typeDefs;
