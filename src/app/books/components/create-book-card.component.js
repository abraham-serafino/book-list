'use client';

import Card from '@/components/card.component';
import Input from '@/components/input.component';
import { useState } from 'react';
import Row from '@/components/row.component';
import Button from '@/components/button.component';
import Column from '@/components/column.component';
import useBookList from '@/app/books/book-list.hook';
import KeyDownHandler from '@/components/key-down-handler.component';

export default function CreateBookCard() {
    const [title, setTitle] = useState('');
    const [authorLastName, setAuthorLastName] = useState('');
    const [authorFirstName, setAuthorFirstName] = useState('');
    const { createBook } = useBookList();

    const handleKeyDown = ({ keyCode }) => {
        if (keyCode === 13 /* enter */) {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        createBook({ title, authorFirstName, authorLastName });
        clearForm();
    };

    const clearForm = () => {
        setTitle('');
        setAuthorLastName('');
        setAuthorFirstName('');
    };

    return (
        <KeyDownHandler onKeyDown={handleKeyDown}>
            <Card title="Create Book">
                <Row>
                    <Column my={false}>
                        <Input
                            label="Title"
                            name="book-title"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                        />
                    </Column>
                    <Column my={false}>
                        <Input
                            label="Author (Last Name)"
                            name="book-author-last"
                            value={authorLastName}
                            onChange={(e) => setAuthorLastName(e.target.value)}
                        />
                        <Input
                            label="Author (First, MI, etc.)"
                            name="book-author-first"
                            value={authorFirstName}
                            onChange={(e) => setAuthorFirstName(e.target.value)}
                        />
                    </Column>
                </Row>

                <Row justifyContent="end" additionalClasses="mb-0.5">
                    <Button onClick={clearForm} color="secondary">
                        Clear
                    </Button>
                    <Button
                        onClick={() => {
                            console.log('onclick');
                            handleSubmit();
                        }}
                    >
                        Create
                    </Button>
                </Row>
            </Card>
        </KeyDownHandler>
    );
}
