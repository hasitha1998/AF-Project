import React from 'react';

const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="ml-5 grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white shadow-lg w-3/4 rounded-lg overflow-hidden">
          <img className="w-full" src="../public/manage.png" alt="User Icon" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Manage Users</h2>
            <p className="text-gray-700 text-base">View and manage user accounts.</p>
            <a href="/user/userManage" className="mt-4 block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded">Go to Users</a>
          </div>
        </div>
        <div className="bg-white shadow-lg w-3/4 rounded-lg overflow-hidden">
          <img className="w-[22rem]" src="../public/pending.png" alt="Pending Icon" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Pending Accounts</h2>
            <p className="text-gray-700 text-base">Review and approve pending accounts.</p>
            <a href="/user/pending" className="mt-4 block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded">Go to Pending Accounts</a>
          </div>
        </div>
        <div className="bg-white shadow-lg w-3/4 rounded-lg overflow-hidden">
          <img className="w-[330px]" src="../public/edit.png" alt="Edit Icon" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Edit Profile</h2>
            <p className="text-gray-700 text-base">Update your profile information.</p>
            <a href="#" className="mt-4 block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go to Profile</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
