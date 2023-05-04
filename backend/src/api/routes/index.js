import { Router } from "express";
import SampleRouter from "./Sample.route.js";
import ComplaintRouter from "./Complaint.route.js"
import controllers from "../controllers/index.js";

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






export default router;
