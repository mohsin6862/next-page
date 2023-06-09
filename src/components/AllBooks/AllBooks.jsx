import React from 'react';
import { Link } from 'react-router-dom';

const AllBooks = ({book}) => {
   

    return (
       <Link to={`../book/${book.isbn13}`}>
        <div className='overflow-hidden relative transform hover:-translate-y-2'>
           
           <img className='object-cover w-full h-56 md:h-60 lg:h-80 xxl:h-96 ' src={book.image} alt="Book cover" />
       
       <div className=' bg-black text-white opacity-0 hover:opacity-100 bg-opacity-75 absolute inset-0 px-10 py-8 flex flex-col rounded-lg transition-opacity duration-1000 '>
           <h2>{book.title}</h2>
           <br />
           <h2>{book.subtitle}</h2>
           <br />
           <h2 className='mt-auto'> Price: {book.price}</h2>
       </div>
   </div>
       </Link>
    );
};

export default AllBooks;