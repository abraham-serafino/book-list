import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import typeDefs from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({
    resolvers,
    typeDefs,
});

const handle = startServerAndCreateNextHandler(server, {
    async context(req, res) {
        return { req, res, dataSources: {} };
    },
});

export async function GET(request) {
    return handle(request);
}

export async function POST(request) {
    return handle(request);
}
