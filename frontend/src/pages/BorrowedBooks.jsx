import { useEffect, useState } from 'react'
import { getBorrowedBooks } from '../utils/api.js'
import { useAuth } from '../context/AuthContext'

const BorrowedBooks = () => {
  const [borrowed, setBorrowed] = useState([])
  const { token } = useAuth()

  useEffect(() => {
    getBorrowedBooks(token).then(setBorrowed)
  }, [token])

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Borrowed Books</h2>
      <ul className="space-y-2">
        {borrowed.map((b, index) => (
          <li key={index} className="p-2 border rounded">
            Book ID: {b.bookId}, Due: {b.borrowedUntil}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BorrowedBooks
