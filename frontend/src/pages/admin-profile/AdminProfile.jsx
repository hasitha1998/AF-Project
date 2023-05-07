import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AdminContext from "../../contexts/AdminContext";

const AdminProfile = () => {
  const { admin, getOneAdmin, editAdmin, setAdmin } = useContext(AdminContext);

  const id = localStorage.getItem("uId");
  getOneAdmin(id);

  const handleChange = (e) => {
    setAdmin(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAdmin = {
      id: id,
      name: e.target.name.value,
      email: e.target.email.value,
    };
    editAdmin(newAdmin);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center h-full max-w-4xl mx-auto mt-28 bg-white rounded-lg shadow-xl ">
          <div className=" left  rounded-lg">
            <div className="mt-32 ml-16 ">
              <div className="h-28 w-28 rounded-full overflow-hidden bg-gray-200 ">
                <img src="https://img.icons8.com/color/96/000000/user-menu-male--v1.png" />
              </div>
            </div>
          </div>

          <div className="right">
            <div className="ml-20 mr-20 mt-18">
              <h1 className="mb-10 text-2xl text-primary-blue font-bold text-center">
                Admin Profile
              </h1>
              <div>
                <label className="block mb-2 text-sm font-bold text-black">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-80 px-4 py-2 text-sm border rounded-md bg bg-slate-100 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Please Enter Your Name"
                  value={admin.name}
                  onChange={handleChange}
                />
              </div>

              <br></br>
              <div>
                <label className="block mb-2 text-sm font-bold text-black">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-80 px-4 py-2 text-sm border rounded-md bg bg-slate-100 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Please Enter Your Email"
                  value={admin.email}
                  onChange={handleChange}
                  readOnly
                />
              </div>
              <br></br>
              <div>
                <label className="block mb-2 text-sm font-bold text-black">
                  Permission Level
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-80 px-4 py-2 text-sm border rounded-md bg bg-slate-100 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Please Enter Your Email"
                  value={admin.permissionLevel}
                  readOnly
                />
              </div>

              <div className="flex items-center justify-center gap-4 mb-10 mt-2">
                <button className="bg-green-500 hover:bg-green-500 text-white font-bold mt-4  w-60 py-1.5  rounded-xl">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AdminProfile;
