import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import CustomerContext from "../../contexts/CustomerContext";

const CustomerRegister = () => {
  const PRESET_NAME = "x3uai9p5";
	const CLOUD_NAME = "dnf7u8aus";
  const { CustomerRegister } = useContext(CustomerContext);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nicError, setNicError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nic, setNic] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const[front,setFront]=useState("");
  const[rear,setRear]=useState("");
  const[urlf,setUrlf]=useState("");
  const[urlr,setUrlr]=useState("");
  const [position,setPosition]=useState(1)
  const[saved,setSaved]=useState(true)
  const[personalInfo,setPersonalInfo]=useState([])



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
      setName(name)
    } else {
      setNameError("Please Enter Valid Name");
    }
  };

  // Email Validation
  const checkEmail = () => {
    let email = document.getElementById("email").value;
    if (emailregext.test(email)) {
      setEmailError("");
      setEmail(email);

    } else {
      setEmailError("Please Enter valid email");
    }
  };

  // NIC Validation
  const checkNic = () => {
    let nic = document.getElementById("nic").value;
    if (nicregext.test(nic)) {
      setNicError("");
      setNic(nic);

    } else {
      setNicError("Please Enter valid NIC number");
    }
    
  };

  // Address Validation
  const checkAddress = () => {
    let address = document.getElementById("address").value;
    if (addressregext.test(address)) {
      setAddressError("");
      setAddress(address);

    } else {
      setAddressError("Please Enter Valid Address");
    }
  };

  // Mobile Number Validation
  const checkMobile = () => {
    let mobile = document.getElementById("contact").value;
    if (mobileregext.test(mobile)) {
      setMobileError("");
      setMobile(mobile);

    } else {
      setMobileError("Please Enter valid mobile number");
    }
  };

  // Password Validation
  const checkPassword = () => {
    let password = document.getElementById("password").value;
    if (passwordregext.test(password)) {
      setPasswordError("");
      setPassword(password);

    } else {
      setPasswordError(
        "Minimum five characters, at least one Upper letter and one number"
      );
    }
  };
  const submitFront = (e) => {
		const image=e.target.files[0]
		setFront(image)
		console.log(CLOUD_NAME);
		console.log(PRESET_NAME);
		const data1 = new FormData();
		data1.append("file", image);
		data1.append("upload_preset", PRESET_NAME);
		data1.append("cloud_name", CLOUD_NAME);

		axios
			.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, data1)
			.then((res) => {
				const url1 = res.data.secure_url;
				console.log(url1);
				setUrlf(url1);
			})
			.catch((err) => {
				console.log(err);
			});
	};
  const submitRear = (e) => {
		const image=e.target.files[0]
		setRear(image)
		console.log(CLOUD_NAME);
		console.log(PRESET_NAME);
		const data1 = new FormData();
		data1.append("file", image);
		data1.append("upload_preset", PRESET_NAME);
		data1.append("cloud_name", CLOUD_NAME);

		axios
			.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, data1)
			.then((res) => {
				const url1 = res.data.secure_url;
				console.log(url1);
				setUrlr(url1);
			})
			.catch((err) => {
				console.log(err);
			});
	};

  console.log(name,email,password,nic,mobile,address);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCustomer = {
      name: name,
      email: email,
      contact: mobile,
      nic: nic,
      address: address,
      password: password,
      imageFront: urlf,
      imageBack: urlr,
    };
   CustomerRegister(newCustomer);
  };

  const saveInfo=(e)=>{
    setPosition(2)
    setSaved(true)
  }

  return (
    <>
      <h1 className="mt-5 text-4xl text-center">Customer Sign Up</h1>
      <div>
      <div className="flex justify-center">
        <div className="border-t w-1/2 px-10 rounded-2xl mt-5 shadow-2xl bg-white">
        <div className="justify-center flex w-48 bg-gray-300 rounded-lg h-10 lg:ml-[250px] mt-2">
       <button className={`${position===1? "bg-red-700 text-white font-semibold":"bg-gray-400 text-white font-semibold "} w-20 h-8 mt-1 rounded-lg `} onClick={()=>setPosition(1)}>1</button>  
       <button className={`${position===2? "bg-red-700":"bg-gray-400 text-white font-semibold "} w-20 h-8 mt-1 rounded-lg ml-2`} onClick={()=>setPosition(2)} disabled={saved}>2</button>   
      </div>
          {position===1 ? (
          <div className="mt-5">
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
            <div className="mb-6 text-center">
              <button
                className="w-1/2 px-4 py-2 font-bold text-white bg-red-700 rounded-lg hover:bg-red-900 focus:outline-none focus:shadow-outline"
                onClick={saveInfo}
              >
                Save and continue
              </button>
            </div>
          </div>):(
            <div>
             <div className="flex flex-row space-x-4 mt-8">
             <div class="flex justify-center mt-8">
    <div class="max-w-2xl rounded-lg shadow-xl bg-gray-50">
        <div class="m-4">
            <label class="inline-block mb-2 text-gray-500">NIC Front Image</label>
            <div class="flex items-center justify-center w-full">
                <label
                    class="flex flex-col w-full h-32 border-4 border-gray-400 border-dashed hover:bg-gray-100 hover:border-red-700">
                    {urlf==="" ? (<div class="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Attach a file</p>
                    </div>):(<div className="ml-20 mt-1">
                      {urlf==="" ?(<h3>uploading...</h3>):
                      (  <img className="w-28 h-28" src={urlf}/>)}
                    </div>)}
                    <input type="file" class="opacity-0" onChange={submitFront} />
                </label>
            </div>
        </div>
        
    </div>
</div> 
<div class="flex justify-center mt-8">
    <div class="max-w-2xl rounded-lg shadow-xl bg-gray-50">
        <div class="m-4">
            <label class="inline-block mb-2 text-gray-500">NIC Rear Image</label>
            <div class="flex items-center justify-center w-full">
                <label
                    class="flex flex-col w-full h-32 border-4 border-gray-400 border-dashed hover:bg-gray-100 hover:border-red-700">
                    {urlr==="" ? (<div class="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Attach a file</p>
                    </div>):
                    (<div className="ml-20 mt-1">
                      <img className="w-28 h-28" src={urlr}/>
                    </div>)}
                    <input type="file" class="opacity-0" onChange={submitRear} />
                </label>
            </div>
        </div>
    </div>
</div> 
           </div>
           <div className="mt-8 mb-6 text-center">
              <button
                className="w-1/2 px-4 py-2 font-bold text-white bg-red-700 rounded-lg hover:bg-red-900 focus:outline-none focus:shadow-outline"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </div>
           </div>
          )}
        </div>
      </div>
      </div>
    </>
  );
};

export default CustomerRegister;
