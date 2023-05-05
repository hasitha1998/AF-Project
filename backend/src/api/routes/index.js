import { Router } from "express";
import SampleRouter from "./Sample.route.js";
import middleware from "../middleware";
import ComplaintRouter from "./Complaint.route.js";
import AdminAuthRouter from "./AdminAuth.route.js";

const router = Router();

// Root API Call
router.get("/", (req, res, next) => {
	res.send("Backend API");
	next();
});

// Sample Router
router.use("/sample", SampleRouter);
// Complaint Router
router.use("/complaint", ComplaintRouter);
// Admin Router
router.use("/admin", AdminAuthRouter);

export default router;
