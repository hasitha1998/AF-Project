import { Link } from "react-router-dom";

const GovAuthDashboard = () => {
  return (
    <div>
      <h1>Goverment Authority Dashboard</h1>

      <div className="flex flex-col space-y-2 w-1/2">
        {/* Link to manage maintenance teams */}
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          to="/gov/maintenanceTeam"
        >
          Manage Maintenance Teams
        </Link>

        {/* Link to manage complaints */}
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          to="/gov/complaints"
        >
          Manage Complaints
        </Link>

        {/* Link to Assign Complaints */}
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          to="/gov/assignComplaints"
        >
          Assign Complaints
        </Link>
      </div>
    </div>
  );
};

export default GovAuthDashboard;
