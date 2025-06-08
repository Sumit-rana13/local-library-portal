import { useState } from 'react'
import { loginUser } from '../utils/Api'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await loginUser(form)
      if (res.token) {
        login(res.token)
        navigate('/')
      } else {
        alert(res.msg)
      }
    } catch (error) {
      console.error("Login Error:", error);
    }

  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto mt-8">
      <h2 className="text-xl font-bold">Login</h2>
      <input className="border p-2 w-full" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input className="border p-2 w-full" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button className="bg-blue-600 text-white px-4 py-2">Login</button>
    </form>
  )
}

export default Login
