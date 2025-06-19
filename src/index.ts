import express, { Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./db/db";
import routers from "./routers";
dotenv.config();

// import User from './models/User';
const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use([express.json(), express.urlencoded({ extended: true })]);

// Routes
app.use("/api", routers);

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express + TypeScript + Mongoose!");
});

// app.post('/users', async (req: Request, res: Response) => {
//   try {
//     const { name, email } = req.body;
//     const user = new User({ name, email });
//     await user.save();
//     res.status(201).json(user);
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
