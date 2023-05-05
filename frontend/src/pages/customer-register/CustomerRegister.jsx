import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import CustomerContext from "../../contexts/CustomerContext";

const CustomerRegister = () => {
  const { CustomerRegister } = useContext(CustomerContext);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nicError, setNicError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  let nameregext = /^[a-z A-Z]+$/;
  let emailregext =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let nicregext = /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/;
  let addressregext = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
  let mobileregext = /^\+?[0-9]\d{9}$/;
  let passwordregext = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/;

  // User Name Validation
  const checkName = () => {
    let name = document.getElementById("name").value;
    if (nameregext.test(name)) {
      setNameError("");
    } else {
      setNameError("Please Enter Valid Name");
    }
  };

  // Email Validation
  const checkEmail = () => {
    let email = document.getElementById("email").value;
    if (emailregext.test(email)) {
      setEmailError("");
    } else {
      setEmailError("Please Enter valid email");
    }
  };

  // NIC Validation
  const checkNic = () => {
    let nic = document.getElementById("nic").value;
    if (nicregext.test(nic)) {
      setNicError("");
    } else {
      setNicError("Please Enter valid NIC number");
    }
  };

  // Address Validation
  const checkAddress = () => {
    let name = document.getElementById("address").value;
    if (addressregext.test(name)) {
      setAddressError("");
    } else {
      setAddressError("Please Enter Valid Address");
    }
  };

  // Mobile Number Validation
  const checkMobile = () => {
    let mobile = document.getElementById("contact").value;
    if (mobileregext.test(mobile)) {
      setMobileError("");
    } else {
      setMobileError("Please Enter valid mobile number");
    }
  };

  // Password Validation
  const checkPassword = () => {
    let password = document.getElementById("password").value;
    if (passwordregext.test(password)) {
      setPasswordError("");
    } else {
      setPasswordError(
        "Minimum five characters, at least one Upper letter and one number"
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCustomer = {
      name: e.target.name.value,
      email: e.target.email.value,
      contact: e.target.contact.value,
      nic: e.target.nic.value,
      address: e.target.address.value,
      password: e.target.password.value,
      imageFront: e.target.imageFront.value,
      imageBack: e.target.imageBack.value,
    };

    CustomerRegister(newCustomer);
  };

  return (
    <>
      <h1 className="mt-5 text-4xl text-center">Customer Register</h1>

      <div className="flex justify-center">
        <div className="border-t w-1/2 px-10 rounded-2xl mt-5 shadow-2xl bg-white">
          <form className="mt-5" onSubmit={handleSubmit}>
            {/* side by side */}
            <div className="flex flex-row space-x-4">
              <div className="mb-4 w-1/2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Please enter your Name"
                  onChange={() => {
                    checkName();
                  }}
                />
                <span className="text-red-500 text-sm">{nameError}</span>
              </div>
              <div className="mb-4 w-1/2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="location"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Please enter your Email"
                  onChange={() => {
                    checkEmail();
                  }}
                />
                <span className="text-red-500 text-sm">{emailError}</span>
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <div className="mb-4 w-1/2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="condition"
                >
                  NIC
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="nic"
                  type="text"
                  placeholder="Please enter your NIC"
                  onChange={() => {
                    checkNic();
                  }}
                />
                <span className="text-red-500 text-sm">{nicError}</span>
              </div>
              <div className="mb-4 w-1/2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="beds"
                >
                  Address
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="address"
                  type="text"
                  placeholder="Please enter your Address"
                  onChange={() => {
                    checkAddress();
                  }}
                />
                <span className="text-red-500 text-sm">{addressError}</span>
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <div className="mb-4 w-1/2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="room_no"
                >
                  Contact Number
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="contact"
                  type="number"
                  placeholder="Please enter your Contact Number"
                  onChange={() => {
                    checkMobile();
                  }}
                />
                <span className="text-red-500 text-sm">{mobileError}</span>
              </div>
              <div className="mb-4 w-1/2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="cost"
                >
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Please enter your Password"
                  onChange={() => {
                    checkPassword();
                  }}
                />
                <span className="text-red-500 text-sm">{passwordError}</span>
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <div className="mb-4 w-1/2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="room_no"
                >
                  NIC Front Image
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="imageFront"
                  type="file"
                />
              </div>
              <div className="mb-4 w-1/2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="cost"
                >
                  NIC Back Image
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="imageBack"
                  type="file"
                />
              </div>
            </div>

            <div className="mb-6 text-center">
              <button
                className="w-1/2 px-4 py-2 font-bold text-white bg-blue-700 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign-Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CustomerRegister;
