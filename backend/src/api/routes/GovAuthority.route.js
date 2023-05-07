import { Router } from "express";
import controllers from "../controllers";

const router = Router();

// GovAuthority Endpoints
router.post("/register", controllers.registerGovAuthority);
router.post("/login", controllers.loginGovAuthority);
router.get("/:id", controllers.getOneGovAuthority);
router.get("/", controllers.getAllGovAuthorities);
router.patch("/:id", controllers.updateGovAuthority);
router.delete("/:id", controllers.deleteGovAuthority);

module.exports = router;
