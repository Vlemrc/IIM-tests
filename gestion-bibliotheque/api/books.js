const express = require('express');
const router = express.Router();

let books = [
 { id: 1, title: 'Book A', author: 'Author A' },
 { id: 2, title: 'Book B', author: 'Author B' }
];

// GET /books
router.get('/', (req, res) => {
 res.json(books);
});

// POST /books
router.post('/', (req, res) => {
 const newBook = req.body;
 books.push(newBook);
 res.status(201).json(newBook);
});

// PUT /books/:id
router.put('/:id', (req, res) => {
 const id = parseInt(req.params.id);
 const updatedBook = req.body;
 books = books.map(book => book.id === id ?
{ ...book, ...updatedBook } : book);
 res.json(books.find(book => book.id === id));
});

// DELETE /books/:id
router.delete('/:id', (req, res) => {
 const id = parseInt(req.params.id);
 books = books.filter(book => book.id !== id);
 res.status(204).end();
});

module.exports = router;