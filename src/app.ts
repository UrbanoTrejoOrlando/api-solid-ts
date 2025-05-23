import express from "express";
import cors from "cors";
import authRoutes from "./routes/AuthRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", authRoutes);

export default app;

