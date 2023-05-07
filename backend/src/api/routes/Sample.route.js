import { Router } from "express";
// import controller from "../controllers";

const router = Router();

router.get("/", (req, res) => {
	res.send("Sample API");
});

// Sample Endpoints
// TODO: Create a new Sample
// TODO: Get all Samples

module.exports = router;
