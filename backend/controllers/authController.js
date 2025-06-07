import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const usersPath = path.join(__dirname, '../models/users.json');
const SECRET = 'local-library-portal';

const register = (req, res) => {
    const {name, email, password} = req.body;
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'))

    if(users.find(user => user.email === email)){
        return res.status(400).json({ msg: 'User already exists' });
    }

    const hashedPassword  = bcrypt.hashSync(password, 10);
    const newUser = {
        id: Date.now(),
        name,
        email,
        password: hashedPassword,
        borrowed: []
    }

    users.push(newUser);
    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2))
    const token =  jwt.sign({id:newUser.id}, SECRET)

    res.json({token})
}

const login = (req, res) => {
    const {email, password} = req.body;
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
    const user = users.find( user => user.email === email)

    if(!user || !bcrypt.compareSync(password, user.password)){
        return res.status(401).json({ msg: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, SECRET);
    res.json({ token });

}


export {register, login}