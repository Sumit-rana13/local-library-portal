import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BookDetail from './pages/Bookdetail'
import BorrowedBooks from './pages/BorrowedBooks'
import Navbar from './components/Navbar'
import { AuthProvider } from './context/AuthContext'



function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/book/:id" element={<BookDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/borrowed" element={<BorrowedBooks />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
