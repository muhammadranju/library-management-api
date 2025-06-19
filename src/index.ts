import express, { Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./db/db";
import routers from "./routers";
dotenv.config();

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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
