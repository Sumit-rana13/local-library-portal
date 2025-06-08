import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { token, logout } = useAuth()

  return (
    <nav className="bg-green-400 text-white p-2 flex justify-between">
      <Link to="/" className="text-xl font-bold text-red-500">Library Portal</Link>
      <div className="space-x-5 font-bold text-xl mx-10 p-1">
        {!token ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <Link to="/borrowed">My Books</Link>
            <button onClick={logout} className="text-red-600">Logout</button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
