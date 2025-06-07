import express from 'express'
import {getAllBooks, getBookById, borrowBook, getBorrowedBooks} from '../controllers/bookController.js'
import verifyToken from '../middleware/auth.js'

const router = express.Router()


router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);

router.post('/borrow/:id', verifyToken, borrowBook);
router.get('/borrowed', verifyToken, getBorrowedBooks);


export default router;