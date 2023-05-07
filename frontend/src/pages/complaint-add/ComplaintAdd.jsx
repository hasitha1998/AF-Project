/* eslint-disable no-console */
import React, { useContext, useState } from "react";
import axios from "axios";
import ComplaintContext from "../../contexts/ComplaintContext";
import { useNavigate } from "react-router-dom";

const ComplaintAdd = () => {
	const PRESET_NAME = "x3uai9p5";
	const CLOUD_NAME = "dnf7u8aus";
	const { addComplaint } = useContext(ComplaintContext);
	const[province,setProvince]=useState();
	const[district,setDistrict]=useState();
	const[authority,setAuthority]=useState();
	const [image, setImage] = useState("");
	const [url, setUrl] = useState("");

	const name=localStorage.getItem("name");
	const id=localStorage.getItem("uId")
	const nic=localStorage.getItem("nic")


	const onChangeAuthority = (event) => {
		const value = event.target.value;
		setAuthority(value);
	  };

	const onChangeProvince = (event) => {
		const value = event.target.value;
		setProvince(value);
	  };

	  const onChangeDistrict = (event) => {
		const value = event.target.value;
		setDistrict(value);
	  };

	console.log(province);
	console.log(district);

	const submitImage = (e) => {
		const image=e.target.files[0]
		setImage(image)
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
				setUrl(url1);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleSubmit = (e) => {

		e.preventDefault();

		const newComplaint = {
			
			complaintTitle:e.target.complaintTitle.value,
            description:e.target.description.value,
			authority:authority,
            province:province,
            district:district,
            location:e.target.location.value,
            emergencyNo:e.target.emergencyNo.value,
            image:url,
            citizenId:id,
            citizenName:name,
            citizenNIC:nic,
            complaintStatus:"pending",
		};
		addComplaint(newComplaint);

	};


	return (
		<>			
			<br></br>
			<br></br>
			<br></br>
			<center>
				<div>
					<div className="text-3xl">Create  A Complaint</div>
					<div className="block p-8 rounded-3xl border border-gray-300 shadow-lg bg-white max-w-screen-md max-h-full mt-6">
						<form onSubmit={handleSubmit}>
							<div className="grid grid-cols-2 gap-x-10">
								<div className="form-group mb-6">
									<label className="labelClass" htmlFor="fname">
										Complaint Title
									</label>

									<div className="flex ...">
										<input
											type="text"
											className="form-control block w-80 px-3 py-1.5 text-base border-red-800 font-normal text-gray-700 bg-white bg-clip-padding border border-solid  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											id="complaintTitle"
											aria-describedby="emailHelp123"
											placeholder=""
										></input>
									</div>
								</div>
								<div className="form-group mb-6">
									<label htmlFor="fname">Description</label>
									<div className="flex ...">
										<input
											type="text"
											className="form-control block w-80 px-3 py-1.5 text-base border-red-800 font-normal text-gray-700 bg-white bg-clip-padding border border-solid  rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											id="description"
											aria-describedby="emailHelp124"
											placeholder=""
										></input>
									</div>
								</div>
							</div>
							<div className="grid grid-cols-2 gap-x-10">
								<div className="form-group mb-10">
									<label htmlFor="fname">Citizen Name</label>
									<div className="flex ...">
										<input
											type="text"
											className="form-control block w-80 px-3 py-1.5 text-base  border-red-800 font-normal text-gray-700  bg-white bg-clip-padding border border-solid  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											id="citizenName"
											aria-describedby="emailHelp123"
											placeholder=""
											value={name}
											readOnly="true"
										></input>
									</div>
								</div>

								<div className="form-group mb-6">
									<label htmlFor="fname">Emergency No</label>
									<div className="flex ...">
										<input
											type="number"
											className="form-control block w-80 px-3 py-1.5 text-base border-red-800 font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											id="emergencyNo"
											aria-describedby="emailHelp124"
											placeholder=""
										></input>
									</div>
								</div>
							</div>
		<div>
		<label htmlFor="fname">Authority</label>
		<div className="mb-6">
      <select className="border w-80 border-solid py-1.5 rounded border-red-800 text-center" onChange={onChangeAuthority}>
	    <option slected>select the relevant Authority</option>
		{Authority.map((authority,key)=>(		
		<option value={authority}>{authority}</option>
		))}
	  </select>
	  </div>
	  </div>
	<div className="grid grid-cols-2 mb-6 gap-x-10  w-72">
		<div className="-ml-[220px] ">
		<label htmlFor="fname">Province</label>
      <select className="border w-80 border-solid py-1.5 rounded border-red-800 text-center" onChange={onChangeProvince}>
	    <option slected>select the province</option>
		{Province.map((province,key)=>(		
		<option value={province}>{province}</option>
		))}
	  </select>
	  </div>
	  <div>
	  <label htmlFor="fname" className="ml-36">District</label>
      <select className="border w-80 border-solid py-1.5 rounded border-red-800 text-center" onChange={onChangeDistrict}>
	   <option selected>select the district</option>
	   {districts.filter((elem) => elem.province == province).map((district,key)=>(
				<option>{district.name}</option>
	   ))}
      </select>
	  </div>
    </div>

	<div className="mb-6">
	<label className="labelClass" htmlFor="fname">Location </label>
	<textarea id="location" rows="4" 
	          class="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-red-900 focus:ring-gray-500 focus:border-gray-500" 
			  placeholder="Write the direction for the location...">

	</textarea>
	</div>

							<div className="">
								<div className="form-group mb-6">
									<label className="labelClass" htmlFor="fname">
										Image
									</label>

									<div className="form-group mb-6">
										<div className="">
											<input
												type="file"
												className="form-control block w-72 px-3 py-1.5 text-base border-red-800 font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
												id="image"
												aria-describedby="emailHelp123"
												placeholder=""
												onChange={submitImage}
												
											></input>
											
										</div>
									</div>
								</div>
							</div>
							
							<div className="form-group form-check text-center mb-6"></div>
							<button
								type="submit"
								className="w-full px-6 py-2.5  bg-red-700  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-900 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
							>
								ADD
							</button>
						</form>
					</div>
				</div>
			</center>
			<br></br>
			<br></br>
			<br></br>
		</>
	);

	

};

const Province=["Western", "Central", "Eastern", "Northern", "North Western", "North Central", "Sabaragamuwa","Southern", "Uva"]
const Authority=["RDA","LECO"]
const districts = [
	{ name: 'Colombo', province: 'Western' },
	{ name: 'Gampaha', province: 'Western' },
	{ name: 'Kalutara', province: 'Western' },
	{ name: 'Kandy', province: 'Central' },
	{ name: 'Matale', province: 'Central' },
	{ name: 'Nuwara Eliya', province: 'Central' },
	{ name: 'Trincomalee', province: 'Eastern' },
	{ name: 'Batticaloa', province: 'Eastern' },
	{ name: 'Ampara', province: 'Eastern' },
	{ name: 'Jaffna', province: 'Northern' },
	{ name: 'Kilinochchi', province: 'Northern' },
	{ name: 'Mannar', province: 'Northern' },
	{ name: 'Vavuniya', province: 'Northern' },
	{ name: 'Mullaitivu', province: 'Northern' },
	{ name: 'Puttalam', province: 'North Western' },
	{ name: 'Kurunegala', province: 'North Western' },
	{ name: 'Anuradhapura', province: 'North Central' },
	{ name: 'Polonnaruwa', province: 'North Central' },
	{ name: 'Kegalle', province: 'Sabaragamuwa' },
	{ name: 'Ratnapura', province: 'Sabaragamuwa' },
	{ name: 'Galle', province: 'Southern' },
	{ name: 'Matara', province: 'Southern' },
	{ name: 'Hambantota', province: 'Southern' },
	{ name: 'Badulla', province: 'Uva' },
	{ name: 'Moneragala', province: 'Uva' },
  ];

export default ComplaintAdd;
