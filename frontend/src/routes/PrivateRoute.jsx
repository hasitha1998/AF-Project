import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ permissionLevel }) => {
	const isAuthenticated = localStorage.getItem("authToken") !== null;

	if (isAuthenticated) {
		return <Outlet />;
	} else {
		if (permissionLevel === "ADMIN") {
			return <Navigate to="/admin/login" />;
		}
		if (permissionLevel === "CUSTOMER") {
			return <Navigate to="/customer/login" />;
		}
		if (permissionLevel === "GOV_AUTHORITY") {
			return <Navigate to="/gov/login" />;
		} else {
			return <Navigate to="/" />;
		}
	}

	// If authorized, return an outlet that will render child elements
	// If not, return element that will navigate to login page
	// return isAuthenticated ? <Outlet /> : <Navigate to="/userLogin" />;
};

export default PrivateRoute;