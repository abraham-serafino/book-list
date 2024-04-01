import {
    booksQueries,
    booksMutations,
} from '@/app/books/graphql/books.resolvers';

const resolvers = {
    Query: {
        ...booksQueries,
    },
    Mutation: {
        ...booksMutations,
    },
};

export default resolvers;
