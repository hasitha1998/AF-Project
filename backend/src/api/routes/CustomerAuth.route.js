import { Router } from "express";
import controllers from "../controllers";

const router = Router();

router.get("/customer", (req, res, next) => {
	res.send("Customer Auth API");
	next();
});

// Customer Endpoints
router.post("/register", controllers.registerCustomer);
router.post("/login", controllers.loginCustomer);
router.get("/:id", controllers.getOneCustomer);
router.get("/", controllers.getAllCustomers);
router.put("/update/:id", controllers.updateCustomer);
router.delete("/delete/:id", controllers.deleteCustomer);

module.exports = router;
