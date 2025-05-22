import express, { NextFunction, Request, Response } from 'express';

import { connectToMongoDB } from './api/utils/ConnectToMongo';
import cryptoRoutes from './routes/cryptoRoutes';
import watchListRoutes from './routes/watchListRoutes';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());


app.use(cryptoRoutes);
app.use('/api', watchListRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('❌ Express error:', err);
  res.status(500).json({ error: 'Something went wrong on the server' });
  next()
}
)

connectToMongoDB().then(() => {
  app.listen(5000, () => console.log("Server is running on port 5000"));
});
