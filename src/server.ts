import express, { Request, Response } from "express";
import router from "./routes/all.routes";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 8080;

app.use(express.json());

// const allowedOrigins = ['http://localhost', 'http://anotherdomain.com'];

// const corsOptions = {
//     origin: (origin: string | undefined, callback: (err: Error | null, allow: boolean) => void) => {
//       console.log(origin);
//       if (allowedOrigins.includes(origin!) || !origin) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'), false);
//       }
//     },
//   };
app.use(cors());

app.use("/api/", router);

const mongo_uri = process.env.MONGO_URI || '';
mongoose.connect(mongo_uri);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to ToAiDo");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
