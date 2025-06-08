#  Local Library Portal

This is a simple full-stack project where users can browse, borrow,books from a small library. It uses:

- **React** for the frontend
- **Node.js + Express** for the backend (server side)
- **JSON files** to store book and user data (instead of a database)
- **JWT** to log users in and keep them secure


## ✅ What You Can Do with This Project

### As a Visitor (not logged in)
- See a list of books
- Click to view book details like book genre, author, or rating
- Register for a new account or log in

### As a Logged-in User
- Borrow up to 3 books
- You cannot borrow 2 books from the same genre
- See which books you borrowed and when to return them


## 🚀 How to Run This Project on Your Computer

### 🧾 Step 1: Requirements
- Nodejs 
- Code editor [vscode]

### 🛠 Step 2: Setup the Backend (Server)

1. Open a terminal and go to the backend folder:

   cd backend

2. install required package:   
- run npm init to create nodejs folder
- run npm install 

3. create json file for users and books and create folder like models , controller, router, server.js etc


### 🛠 Step 3: Setup the frontend

cd frontend

run command create vite@latest project_name

#### install required package:   
- npm install
- run npm install 
 
## How login work

- When a user logs in, the server gives a token.

- The frontend saves this token and sends it with requests to protected routes like:

- Borrowing a book
- Viewing borrowed books
- All user and book data is saved in simple .json files

## features 
- JWT Authentication (login/register)
- Custom middleware to log actions
- Custom date format (like: 06-Jun-2025)
- A limit of 3 books per user
- No borrowing more than one book from the same genre
