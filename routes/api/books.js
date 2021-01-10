const router = require('express').Router();
const booksController = require('../../controllers/booksController');

// Books saved in DB Functionality
router.route('/')
    // Display saved books in DB
    .get(booksController.showAll)
    // Save Book to DB
    .post(booksController.create)

// Search Functionality
router.route('/:id')
    // Delete book from DB
    .delete(booksController.remove);

module.exports = router;