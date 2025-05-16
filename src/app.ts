import express from "express";
import authRoutes from "./routes/AuthRoutes";

const app = express();
app.use(express.json());

app.use("/api/users", authRoutes);

export default app;

