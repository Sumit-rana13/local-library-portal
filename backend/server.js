import express from 'express'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import bookRoutes from './routes/bookRoutes.js';
import logger from './middleware/logger.js';


const app = express()
const port = 3000


// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

app.use('/api', authRoutes)
app.use('/api', bookRoutes)



app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})