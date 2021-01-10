import React from 'react';
import { SaveBtn, ViewBtn } from '../FunctionBtn';
import API from '../../utils/API.js'

function RenderBooks(props) {
    let books = props.books;
    if (props.books.length !== 0) {
        books = props.books.items
    }

    return (
        <div>
            <h2>Results</h2>
            <div>
                {books.length ? (
                    <div className="card">
                        {
                            books.flatMap(book => {
                                if (book.volumeInfo.authors !== undefined && book.volumeInfo.imageLinks !== undefined && book.volumeInfo.description !== undefined) {
                                    return (
                                        <div className="card mb-3" key={book.id}>
                                            <div className="row">
                                                <div className="col-md-2" >
                                                    <img src={book.volumeInfo.imageLinks.thumbnail} style={{ margin: 30 }} alt={book.volumeInfo.title} />
                                                </div>
                                                <div className="col-md-10">
                                                    <div className="card-body">
                                                        <h5 className='card-title'>{book.volumeInfo.title}</h5>
                                                        <h6 className='card-subtitle mb-2 text-muted'>by {book.volumeInfo.authors[0]}</h6>
                                                        <p className="card-text">{book.volumeInfo.description}</p>
                                                        <ViewBtn href={book.volumeInfo.canonicalVolumeLink} />
                                                        <SaveBtn onClick={() => {
                                                            API.saveBook({
                                                                title: book.volumeInfo.title,
                                                                author: book.volumeInfo.authors[0],
                                                                description: book.volumeInfo.description,
                                                                imgUrl: book.volumeInfo.imageLinks.thumbnail,
                                                                linkUrl: book.volumeInfo.canonicalVolumeLink
                                                            })
                                                                .catch(err => console.log(err))
                                                        }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                            })
                        }
                    </div>

                ) : (
                        <div></div>
                    )
                }
            </div >
        </div >
    )
}

export default RenderBooks;