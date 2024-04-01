import CreateBookCard from '@/app/books/components/create-book-card.component';
import BookListCard from '@/app/books/components/book-list-card.component';
import Row from '@/components/row.component';

export const metadata = {
    title: 'Abraham Serafino.com - Books',
};

export default function BooksPage() {
    return (
        <Row>
            <CreateBookCard />
            <BookListCard />
        </Row>
    );
}
