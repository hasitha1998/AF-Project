import { Router } from "express";
import SampleRouter from "./Sample.route.js";
import controllers from "../controllers";
import middleware from "../middleware";

const router = Router();

// Root API Call
router.get("/", (req, res, next) => {
	res.send("Backend API");
	next();
});

// Sample Router
router.use("/sample", SampleRouter);

// Admin Endpoints
router.post("/admin/register", controllers.registerAdmin);
router.post("/admin/login", controllers.loginAdmin);
router.get("/admin/", controllers.getAllAdmins);
router.get("/admin/:id", controllers.getOneAdmin);
router.put("/admin/update/:id", controllers.updateAdmin);
router.delete("/admin/delete/:id", controllers.deleteAdmin);

export default router;
