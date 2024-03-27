'use client';

import Card from '@/components/card.component';
import useBookList from '@/app/books/book-list.hook';
import Column from '@/components/column.component';
import Row from '@/components/row.component';

export default function BookListCard() {
    const { books } = useBookList();

    return (
        <Card title="Book List">
            <Row justifyContent="start">
                <Column>
                    <ul>
                        {books.map(
                            ({ authorFirstName, authorLastName, title }) => (
                                <li key={`${title}_${authorLastName}`}>
                                    {title}
                                    <br />
                                    {authorLastName}, {authorFirstName}
                                </li>
                            ),
                        )}
                    </ul>
                </Column>
            </Row>
        </Card>
    );
}
