import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/database";

const PORT = process.env.PORT;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Servidor corriendo en http://localhost:" + PORT + " :3");
    });
}).catch(err => console.error(err));
