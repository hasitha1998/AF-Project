import { PuffLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-25 z-50 flex justify-center items-center">
      <PuffLoader color="#458500" size={150} />
    </div>
  );
};

export default Spinner;
