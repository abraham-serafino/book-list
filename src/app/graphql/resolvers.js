import { booksQueries, booksMutations } from '@/app/books/books.resolvers';

const resolvers = {
    Query: {
        ...booksQueries,
    },
    Mutation: {
        ...booksMutations,
    },
};

export default resolvers;
