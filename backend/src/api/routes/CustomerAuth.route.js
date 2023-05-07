import { Router } from "express";
import controllers from "../controllers";

const router = Router();

// Customer Endpoints
router.post("/register", controllers.registerCustomer);
router.post("/login", controllers.loginCustomer);
router.get("/:id", controllers.getOneCustomer);
router.get("/", controllers.getAllCustomers);
router.put("/update/:id", controllers.updateCustomer);
router.delete("/delete/:id", controllers.deleteCustomer);
router.patch("/status/:id", controllers.changeAccountStatus); // change account status

module.exports = router;
