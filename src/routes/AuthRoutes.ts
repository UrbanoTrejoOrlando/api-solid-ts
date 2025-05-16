import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

const router = Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/users", AuthController.getAllUsers);

export default router; 