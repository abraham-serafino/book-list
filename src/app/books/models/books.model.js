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
        return await books.find({}).toArray();
    } catch (error) {
        // @TODO add logging
        console.error('Error fetching books:', error);
        throw error;
    }
}

export async function addBook({ title, authorFirstName, authorLastName }) {
    const books = await Books();

    try {
        const insertResult = await books.insertOne({
            title,
            authorFirstName,
            authorLastName,
        });

        return books.findOne({ _id: insertResult?._id });
    } catch (error) {
        // @TODO add logging
        console.error('Error fetching books:', error);
    }
}
