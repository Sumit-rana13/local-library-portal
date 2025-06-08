import { useEffect, useState } from 'react'
import { fetchBooks } from '../utils/api.js'
import { Link } from 'react-router-dom'

const Home = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetchBooks().then(data => setBooks(data))
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Available Books</h1>
      <ul className="space-y-2">
        {books.map(book => (
          <li key={book.id} className="p-2 border rounded">
            <Link to={`/book/${book.id}`} className="text-blue-600">{book.title}</Link> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
