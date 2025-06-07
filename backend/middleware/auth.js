import jwt from 'jsonwebtoken'
const SECRET = 'local-library-portal';

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ msg: 'token not found' });

    try {
        const decoded = jwt.verify(token, SECRET)
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({msg: 'Invalid token'})
    }
}

export default verifyToken;