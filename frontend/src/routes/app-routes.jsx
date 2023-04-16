import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
