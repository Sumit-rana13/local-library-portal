import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import formatDate from '../utils/helper.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const usersPath = path.join(__dirname, '../models/users.json');
const booksPath = path.join(__dirname, '../models/books.json');



const getAllBooks = (req, res) => {
    const books = JSON.parse(fs.readFileSync(booksPath, 'utf-8'));
    res.json(books);
}

const getBookById = (req, res) => {
    const books = JSON.parse(fs.readFileSync(booksPath, 'utf-8'));
    const book = books.find(b => b.id === parseInt(req.params.id))
    if (!book) return res.status(404).json({ msg: 'Book not found' });
    res.json(book)
}

const borrowBook = (req, res) => {
    const bookId = parseInt(req.params.id)
    const books = JSON.parse(fs.readFileSync(booksPath, 'utf-8'));
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));

    const book = books.find(b => b.id === bookId);
    const user = users.find(u => u.id === req.user.id);

    if (!book) return res.status(404).json({ msg: 'Book not found' });

    const borrowed = user.borrowed || []
    if (borrowed.length >= 3) {
        return res.status(400).json({ msg: 'Limit: 3 books only' });
    }

    const sameGenre = borrowed.find(b => b.genre === book.genre);
    if (sameGenre) {
        return res.status(400).json({ msg: 'Only 1 book per genre allowed' });
    }

    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 15);

    user.borrowed.push({
        bookId: book.id,
        genre: book.genre,
        borrowedUntil: formatDate(dueDate)
    })

    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
    res.json({ msg: 'Book borrowed successfully' });
}

const getBorrowedBooks = (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
    const user = users.find(u => u.id === req.user.id);
    res.json(user.borrowed || []);
}


export {getAllBooks, getBookById, borrowBook, getBorrowedBooks}