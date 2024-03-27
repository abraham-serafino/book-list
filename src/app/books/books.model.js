import Collection from '@/app/lib/collection';

let collection = null;

async function Books() {
    if (collection === null) {
        collection = await Collection('books');
    }

    return collection;
}

export async function getBooks() {
    const books = await Books();

    try {
        const result = await books.find({}).toArray();

        console.log('find result: ', result);
        return result;
    } catch (error) {
        // @TODO add logging
        console.error('Error fetching books:', error);
        throw error;
    }
}

export async function addBook({ title, authorFirstName, authorLastName }) {
    const books = await Books();

    try {
        const insertResult = await books.insert({
            title,
            authorFirstName,
            authorLastName,
        });
        console.log('insertResult: ', insertResult);

        const findResult = await books.find({ _id: insertResult?._id });
        console.log('findResult: ', findResult);
    } catch (error) {
        // @TODO add logging
        console.error('Error fetching books:', error);
    }
}
