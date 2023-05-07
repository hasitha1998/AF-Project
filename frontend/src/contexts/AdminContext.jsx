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

  // Admin Register
  const AdminRegister = async (values) => {
    AdminAPI.register(values)
      .then((response) => {
        setAdmins([...admins, response.data]);
        makeToast({ type: "success", message: "Registration Successful" });
        window.location.href = "/admin/login";
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.response.data);
        if (err.response.data.details == "Email already exists") {
          alert("Email already exists");
          makeToast({ type: "error", message: "Email already exists" });
          setMailError(err.response.data.details);
        }
      });
  };

  // Get one Admin
  const getOneAdmin = (id) => {
    useEffect(() => {
      AdminAPI.getOneAdmin(id).then((res) => {
        setAdmin(res.data);
      });
    }, []);
  };

  //Get all Admin
  useEffect(() => {
    AdminAPI.getAdmins().then((response) => {
      setAdmins(response.data);
    });
  }, []);

  //Edit Admin
  const editAdmin = (values) => {
    const newAdmin = {
      name: values.name,
      email: values.email,
    };
    AdminAPI.editAdmin(values.id, newAdmin)
      .then((response) => {
        makeToast({ type: "success", message: "Profile Updated Successful" });
        window.location.href = "/admin";
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
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
        AdminRegister,
        getOneAdmin,
        editAdmin,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export default AdminContext;
