import axios from 'axios';

export default {
    // Get all books from DB
    getBooks: function () {
        return axios.get('/api/books');
    },
    // Deletes a book
    deleteBook: function (id) {
        return axios.delete('/api/books/' + id);
    },
    // Saves a book
    saveBook: function (bookData) {
        return axios.post('/api/books', bookData);
    },
    // Searches for a book
    searchBook: function (searchParams) {
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=intitle:' + searchParams);
    }

};