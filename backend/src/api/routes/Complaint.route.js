import { Router } from "express";
import controllers from "../controllers";

const router = Router();

router.get("/test", (req, res) => {
	res.send("Complaint API");
});

//Complaint Endpoints
router.get("/authority/:authorityId", controllers.getAllComplaintsByAuthority); // get all complaint by authority
router.patch("/assign/:id", controllers.assignComplaintToMaintenanceTeam); // assign complaint to maintenance team
router.post("/", controllers.insertComplaint); // insert one complaint
router.get("/", controllers.getAllComplaints); // get all complaint
router.get("/:id", controllers.getOneComplaint); // get one Campingl complaint
router.put("/:id", controllers.updateComplaint); // update one Camping complaint
router.delete("/:id", controllers.deleteComplaint); // delete one Camping complaint
router.get("/search/:search", controllers.searchComplaints); // search Camping complaint
router.patch("/status/:id", controllers.changeComplaintStatus); // change order complaint

module.exports = router;
