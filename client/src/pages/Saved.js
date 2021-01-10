import React, { useEffect, useState } from 'react';
import API from '../utils/API.js';
import { DeleteBtn, ViewBtn } from '../components/FunctionBtn';

function Saved() {
    const [books, setBooks] = useState([])
    // const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadBooks();
    }, []);

    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    return (
        <div className="container">
            <h2>Google Books I've Saved</h2>
            <div>
                {books.length ? (
                    <div className="card">
                        {
                            books.map(book => {
                                return (
                                    <div className="card mb-3" key={book._id}>
                                        <div className="row">
                                            < div className="col-md-2" >
                                                <img src={book.imgUrl} style={{ margin: 30 }} alt={book.title} />
                                            </div>
                                            <div className="col-md-10">
                                                <div className="card-body">
                                                    <h5 className='card-title'>{book.title}</h5>
                                                    <h6 className='card-subtitle mb-2 text-muted'>by {book.author}</h6>
                                                    <p className="card-text">{book.description}</p>
                                                    <DeleteBtn onClick={() => { deleteBook(book._id) }} />
                                                    <ViewBtn href={book.linkUrl} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                ) : (
                        <h3>No books have been saved yet!</h3>
                    )
                }
            </div>
        </div>
    )
}

export default Saved;