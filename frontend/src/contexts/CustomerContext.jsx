import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomerAPI from "./api/CustomerAPI";
import makeToast from "../components/toast";

const CustomerContext = createContext();

export function CustomerProvider({ children }) {
  const [customers, setCustomers] = useState([]);
  const [mailError, setMailError] = useState("");
  const [nicError, setNicError] = useState("");

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    nic: "",
    address: "",
    contact: "",
    imageFront: "",
    imageBack: "",
    password: "",
  });

  // Customer Register

  const CustomerRegister = async (values) => {
    CustomerAPI.register(values)
      .then((response) => {
        setCustomers([...customers, response.data]);
        makeToast({ type: "success", message: "Registration Successful" });
        window.location.href = "/customer/login";
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.response.data);
        if (err.response.data.details == "Email already exists") {
          alert("Email already exists");
          makeToast({ type: "error", message: "Email already exists" });
          setMailError(err.response.data.details);
        }
        if (err.response.data.details == "NIC already exists") {
          alert("NIC already exists");
          makeToast({ type: "error", message: "NIC already exists" });
          setNicError(err.response.data.details);
        }
      });
  };

  // Customer Login
  const CustomerLogin = (values) => {
    CustomerAPI.login(values)
      .then((response) => {
        localStorage.setItem("uId", response.data._id);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("nic", response.data.nic);
        localStorage.setItem("accountStatus", response.data.accountStatus);
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("permissionLevel", response.data.permissionLevel);

        makeToast({ type: "success", message: "Login Successful" });
        window.location.href = "/customer/dashboard";
      })
      .catch((err) => {
        makeToast({ type: "error", message: "Invalid Email or Password" });
      });
  };


  // Get all customers
  const getAllCustomers = async () => {
    try {
      const response = await CustomerAPI.getCustomers();
      setCustomers(response.data);
      //makeToast({ type: "success", message: "Customers fetched successfully" });
    } catch (err) {
      //makeToast({ type: "error", message: "Failed to fetch customers" });
      console.log(err);
    }
  };
  

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await CustomerAPI.getCustomers();
        setCustomers(response.data);
        
      } catch (err) {
        
        console.log(err);
      }
    };
    
    fetchCustomers();
  }, []);
  

 /* useEffect(() => {
    try {
      const response = CustomerAPI.getCustomers();
      setCustomers(response.data);
      //makeToast({ type: "success", message: "Customers fetched successfully" });
    } catch (err) {
      //makeToast({ type: "error", message: "Failed to fetch customers" });
      console.log(err);
    }  }, []);*/

    useEffect(() => {
      //setIsLoading(true);
      CustomerAPI.getCustomers().then((response) => {
        setCustomers(response.data);
      //console.log(products.values("productName"));
        //setIsLoading(false);
      });
    }, []);

  

   // Update customer
   const updateCustomer = async (customerId, updatedCustomer) => {
    try {
      const response = await CustomerAPI.editCustomer(customerId, updatedCustomer);
      setCustomers(customers.map((customer) => (customer._id === customerId ? response.data : customer)));
      makeToast({ type: "success", message: "Customer updated successfully" });
    } catch (err) {
      console.log(err);
    }
  };

  // Delete customer
  const deleteCustomer = async (customerId) => {
    try {
      await CustomerAPI.deleteCustomer(customerId);
      setCustomers(customers.filter((customer) => customer._id !== customerId));
      makeToast({ type: "success", message: "Customer deleted successfully" });
    } catch (err) {
      console.log(err);
    }
  };

  const changeAccountStatus = async (customerId , status) => {
		try {
		  const { data } = await CustomerAPI.changeAccountStatus(customerId, status);
		  makeToast({ type: "success", message: "Account status updated successfully" });
		} catch (error) {
		  console.log(error);
		  makeToast({ type: "error", message: "Something went wrong" });
		}
	  };


  return (
    <CustomerContext.Provider
      value={{
        customers,
        setCustomers,
        customer,
        setCustomer,
        CustomerRegister,
        mailError,
        setMailError,
        nicError,
        setNicError,
        CustomerLogin,
        updateCustomer,
        deleteCustomer, 
        getAllCustomers,
        changeAccountStatus      
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}

export default CustomerContext;
