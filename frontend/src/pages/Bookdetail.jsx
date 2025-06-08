import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchBook, borrowBook } from '../utils/api.js'
import { useAuth } from '../context/AuthContext'

const BookDetail = () => {
  const {id} = useParams()
  const [book, setBook] = useState(null)
  const { token } = useAuth()

  useEffect(() => {
    fetchBook(id).then(setBook)
  }, [id])

  const handleBorrow = async () => {
    const res = await borrowBook(id, token)
    alert(res.msg)
  }

  if (!book) return <p>Loading...</p>

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Rating: {book.rating}</p>
      {token && <button className="mt-4 bg-green-600 text-white px-4 py-2" onClick={handleBorrow}>Borrow</button>}
    </div>
  )
}

export default BookDetail
