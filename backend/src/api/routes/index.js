import { Router } from "express";
import SampleRouter from "./Sample.route.js";
// import middleware from "../middleware";
import ComplaintRouter from "./Complaint.route.js";
import AdminAuthRouter from "./AdminAuth.route.js";
import CustomerAuthRouter from "./CustomerAuth.route.js";
import GovAuthorityRouter from "./GovAuthority.route.js";
import MaintenanceTeamRouter from "./MaintenanceTeam.route.js";

const router = Router();

// Sample Router
router.use("/sample", SampleRouter);
// Complaint Router
router.use("/complaint", ComplaintRouter);
// Admin Router
router.use("/admin", AdminAuthRouter);
// Customer Router
router.use("/customer", CustomerAuthRouter);
// GovAuthority Router
router.use("/gov", GovAuthorityRouter);
// MaintenanceTeam Router
router.use("/team", MaintenanceTeamRouter);

export default router;
