import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllBooks from '../AllBooks/AllBooks';

const Books = () => {
    const {books }= useLoaderData()

    
    return (
        <div className='my-container grid lg:grid-cols-4 md:grid-cols-2 gap-5'>
            {
                books.map(book =><AllBooks book={book} key={book.isbn13
                }></AllBooks>)
            }
        </div>
    );
};

export default Books;