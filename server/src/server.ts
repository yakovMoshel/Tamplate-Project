import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

import { connectToMongoDB } from './api/utils/ConnectToMongo';
import cryptoRoutes from './routes/cryptoRoutes';
import watchListRoutes from './routes/watchListRoutes';
import cors, { CorsOptions } from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

const whitelist = process.env.NODE_ENV === 'production'
  ? [process.env.FRONTEND_PROD]
  : [process.env.FRONTEND_DEV];


const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`❌ Blocked by CORS: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // access-control-allow-cookies / Authorization
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

// Set security HTTP headers
app.use(helmet());

// Apply rate limiting to all requests
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);



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
  app.listen(PORT, () => console.log("Server is running on port ", PORT));
});
