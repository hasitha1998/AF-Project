import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminAPI from "./api/AdminAPI";
import makeToast from "../components/toast";

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [admins, setAdmins] = useState([]);

  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Admin Login
  const AdminLogin = (values) => {
    AdminAPI.login(values)
      .then((response) => {
        localStorage.setItem("uId", response.data._id);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("permissionLevel", response.data.permissionLevel);

        makeToast({ type: "success", message: "Login Successful" });
        window.location.href = "/admin";
      })
      .catch((err) => {
        makeToast({ type: "error", message: "Invalid Email or Password" });
      });
  };

  return (
    <AdminContext.Provider
      value={{
        admins,
        setAdmins,
        admin,
        setAdmin,
        AdminLogin,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export default AdminContext;
