import express, { NextFunction, Request, Response } from 'express';
import cryptoRoutes from './routes/cryptoRoutes';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.use(cryptoRoutes);

app.use((err : Error, req : Request, res : Response, next : NextFunction) => {
    res.status(500).json({massage : 'Something went wrong!', error: err.message })
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});