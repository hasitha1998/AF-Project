import { Router } from "express";
import controllers from "../controllers";

const router = Router();

//Complaint Endpoints
router.post("/", controllers.insertMaintenanceTeam);
router.get("/", controllers.getAllMaintenanceTeams);
router.get("/:id", controllers.getOneMaintenanceTeam);
router.patch("/status/:id", controllers.changeMaintenanceTeamStatus);
router.patch("/:id", controllers.updateMaintenanceTeam);
router.delete("/:id", controllers.deleteMaintenanceTeam);

module.exports = router;
