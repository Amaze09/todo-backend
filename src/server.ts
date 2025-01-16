import express, { Request, Response } from "express";
import router from "./routes/all.routes";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());

// const allowedOrigins = ['http://localhost', 'http://anotherdomain.com'];

// const corsOptions = {
//     origin: (origin: string | undefined, callback: (err: Error | null, allow: boolean) => void) => {
//       // Check if the origin is in the allowed list
//       console.log(origin);
//       if (allowedOrigins.includes(origin!) || !origin) {
//         callback(null, true); // Allow request
//       } else {
//         callback(new Error('Not allowed by CORS'), false); // Deny request
//       }
//     },
//   };
app.use(cors());

// Routes
app.use("/api/", router);

const MONGO_URI = "mongodb+srv://priyanshujain:PjayaApVRjb0UEUk@cluster0.uej8d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(MONGO_URI);

// Base route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to ToAiDo");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
