import { Link } from "react-router-dom";
import undraw_Add_user_re_5oib from "../../assets/undraw_Add_user_re_5oib.png";

const GovAuthDashboard = () => {
  return (
    <div className="flex flex-col mx-10 my-10">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="flex flex-row justify-between mt-10">
        <Link
          to="/gov/maintenanceTeam"
          className="flex flex-col items-center justify-center w-1/4 h-32 p-4 mx-2 text-center text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
        >
          <h1 className="text-2xl font-bold">Maintenance Team</h1>
        </Link>

        <Link
          to="/gov/complaints"
          className="flex flex-col items-center justify-center w-1/4 h-32 p-4 mx-2 text-center text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
        >
          <h1 className="text-2xl font-bold">Complaints</h1>
        </Link>

        <Link
          to="/gov/assignComplaints"
          className="flex flex-col items-center justify-center w-1/4 h-32 p-4 mx-2 text-center text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
        >
          <h1 className="text-2xl font-bold">Assign Complaints</h1>
        </Link>
      </div>

      {/* Image */}
      <div className="flex flex-col items-center justify-center mt-10">
        <img
          src={undraw_Add_user_re_5oib}
          alt="undraw_Add_user_re_5oib"
          className="w-1/2"
        />
      </div>
    </div>
  );
};

export default GovAuthDashboard;
