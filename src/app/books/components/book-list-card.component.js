'use client';

import Card from '@/components/card.component';
import useBookList from '@/app/books/book-list.hook';
import Column from '@/components/column.component';
import Row from '@/components/row.component';
import ListItem from '@/components/list-item.component';
import List from '@/components/list.component';

export default function BookListCard({ bookData }) {
    const { books } = useBookList({ initialData: bookData });

    return (
        <Card title="Book List">
            <Row justifyContent="start">
                <Column>
                    <List>
                        {books.map(
                            ({ authorFirstName, authorLastName, title }) => (
                                <ListItem
                                    key={`${title}_${authorLastName}`}
                                    title={title}
                                    subTitle={`(Author: ${authorLastName}, ${authorFirstName})`}
                                />
                            ),
                        )}
                    </List>
                </Column>
            </Row>
        </Card>
    );
}
