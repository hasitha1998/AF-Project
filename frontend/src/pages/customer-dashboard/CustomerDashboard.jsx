import { Link } from "react-router-dom";

const CustomerDashboard = () => {



    return ( 
    <>
    <Link to="/complaint/add">
    <div className="bg-blue-400 w-36 h-36">Add Complaint</div>
    </Link>

    </> 
    );
}
 
export default CustomerDashboard;