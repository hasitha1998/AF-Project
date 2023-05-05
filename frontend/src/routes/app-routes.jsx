import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import { Home, AdminLogin, AdminDashboard, PendingAccount,ManageUsers,ComplaintAdd, CustomerRegister} from "../pages";


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
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/customer/register" element={<CustomerRegister />} />

          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* User Management Routes */}
          <Route path="/user/pending" element={<PendingAccount />} />
          <Route path="/user/userManage" element={<ManageUsers />} />


          {/*Complaint Routes*/}
          <Route path="/complaint/add" element={<ComplaintAdd />} />

          {/*Customer Routes*/}
         


        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
