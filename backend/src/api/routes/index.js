import { Router } from "express";
import SampleRouter from "./Sample.route.js";

const router = Router();

// Root API Call
router.get("/", (req, res, next) => {
	res.send("Backend API");
	next();
});

// Sample Router
router.use("/sample", SampleRouter);

export default router;
