import { Router } from "express";
// import controller from "../controllers";

const router = Router();

router.get("/", (req, res, next) => {
	res.send("Sample API");
	next();
});

// Sample Endpoints
// TODO: Create a new Sample
// TODO: Get all Samples

module.exports = router;
