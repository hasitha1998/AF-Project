import { Router } from "express";
import controllers from "../controllers";

const router = Router();

// Admin Endpoints
router.post("/register", controllers.registerAdmin);
router.post("/login", controllers.loginAdmin);
router.get("/", controllers.getAllAdmins);
router.get("/:id", controllers.getOneAdmin);
router.put("/update/:id", controllers.updateAdmin);
router.delete("/delete/:id", controllers.deleteAdmin);

module.exports = router;
