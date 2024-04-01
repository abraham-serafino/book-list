import CreateBookCard from '@/app/books/components/create-book-card.component';
import BookListCard from '@/app/books/components/book-list-card.component';
import Row from '@/components/row.component';
import { getBooks } from '@/app/books/models/books.model';

export const metadata = {
    title: 'Abraham Serafino.com - Books',
};

export default async function BooksPage() {
    const books = await getBooks();

    return (
        <Row>
            <CreateBookCard />
            <BookListCard bookData={books} />
        </Row>
    );
}
