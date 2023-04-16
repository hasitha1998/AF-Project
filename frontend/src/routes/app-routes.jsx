import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import PrivateRoute from "./PrivateRoute";
// import CheckLoginStatus from "./CheckLoginStatus";

// Components
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// Pages
import { Home } from "../pages";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
