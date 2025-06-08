import { useState } from 'react'
import { registerUser } from '../utils/api.js'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Register = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await registerUser(form)
      console.log(res);
      if (res?.token) {
        login(res.token)
        navigate('/')
      } else {
        alert(res.msg || "Registered failed !!")
      }
    } catch (error) {
      console.error("Registration Error:", error);
    }



  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto mt-8">
      <h2 className="text-xl font-bold">Register</h2>
      <input className="border p-2 w-full" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input className="border p-2 w-full" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button className="bg-blue-600 text-white px-4 py-2">Register</button>
    </form>
  )
}

export default Register
