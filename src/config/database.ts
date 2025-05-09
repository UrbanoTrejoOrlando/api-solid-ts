import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const testConnection = async () => {
  try {
    await mongoose.connect(process.env.URL_MONGODB || "");
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1);
  }
};

testConnection();
