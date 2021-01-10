import React, { useState } from 'react';
import API from '../utils/API.js';
import Results from '../components/Results';

function Search() {
    const [books, setBooks] = useState([])

    function searchBooks(searchParams) {
        API.searchBook(searchParams)
            .then(res => {
                setBooks(res.data)
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            <h1>Search for a Book Below</h1>
            <h6>You can save a book to be viewed later by pressing the "Save" button</h6>

            <div>
                <div className="input-group mb-3">
                    <input id="searchInput" type="text" className="form-control" placeholder='Search for a book here' />
                    <button className="btn btn-info" onClick={() => {
                        var searchInput = document.getElementById('searchInput');
                        searchBooks(searchInput.value);
                        searchInput.value = '';
                    }}>Search</button>
                </div>
            </div>
            <Results books={books} />
        </div>
    );
};

export default Search;