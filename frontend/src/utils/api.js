// const BASE_URL = "http://localhost:3000/api";
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000' ;


export const fetchBooks = async () =>{
    const response = await fetch(`${BASE_URL}/books`)
    const data = await response.json()
    return data;
}


export const fetchBook = async (id) => {
  const response = await fetch(`${BASE_URL}/books/${id}`);
  const data = await response.json();
  return data;
}

export const registerUser = async (data) => {
    const res = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return res.json()
}

export const loginUser = async (data) => {
    const res = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return res.json()
}

export const borrowBook = async (id, token) => {
    const res = await fetch(`${BASE_URL}/borrow/${id}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
    })
    return res.json()
}

export const getBorrowedBooks = async (token) => {
    const res = await fetch(`${BASE_URL}/borrowed`, {
        headers: { Authorization: `Bearer ${token}` }
    })
    return res.json()
}
