import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import CheckLoginStatus from "./CheckLoginStatus";

// Pages
import {
  Home,
  AdminLogin,
  AdminDashboard,
  PendingAccount,
  ManageUsers,
  ComplaintAdd,
  CustomerRegister,
  GovAuthLogin,
  GovAuthRegister,
  GovAuthDashboard,
  ManageMaintenanceTeam,
  ManageComplaints,
  CustomerLogin,
  AdminProfile,
  CustomerDashboard,
  AdminComplaintView,
  AdminViewAllComplaints,
} from "../pages";

// Components
import Header from "../components/Header";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/customer/register" element={<CustomerRegister />} />
          <Route path="/customer/login" element={<CustomerLogin />} />

          {/* Government Authority Routes */}
          <Route path="/gov/login" element={<GovAuthLogin />} />
          <Route path="/gov/register" element={<GovAuthRegister />} />
          <Route path="/gov/dashboard" element={<GovAuthDashboard />} />
          <Route
            path="/gov/maintenanceTeam"
            element={<ManageMaintenanceTeam />}
          />
          <Route path="/gov/complaints" element={<ManageComplaints />} />

          {/* Check Login Status Admin */}
          <Route exact path="/admin/login" element={<CheckLoginStatus />}>
            <Route exact path="/admin/login" element={<AdminLogin />} />
          </Route>

          {/* Admin Private Routes */}
          <Route exact path="/admin" element={<PrivateRoute permissionLevel="ADMIN" />}>
            <Route exact path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/:id" element={<AdminProfile />} />
            <Route path="/admin/complaint" element={<AdminComplaintView />} />
            <Route path="/admin/viewAllComplaints" element={<AdminViewAllComplaints />} />
          </Route>

          {/* User Management Routes */}
          <Route path="/user/pending" element={<PendingAccount />} />
          <Route path="/user/userManage" element={<ManageUsers />} />

          {/*Complaint Routes*/}
          <Route path="/complaint/add" element={<ComplaintAdd />} />

          {/*Customer Routes*/}
          <Route path="/customer/dashboard" element={<CustomerDashboard />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
