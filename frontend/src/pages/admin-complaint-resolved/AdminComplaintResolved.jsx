import React, { useContext } from "react";
import ComplaintContext from "../../contexts/ComplaintContext";
import makeToast from "../../components/toast";
import ComplaintAPI from "../../contexts/api/ComplaintAPI";

const status = "approved";

const AdminComplaintResolved = () => {
  const { complaints } = useContext(ComplaintContext);

  const changeStatus = async (id, status) => {
    try {
      await ComplaintAPI.changeComplaintStatus(id, status);
      makeToast({
        type: "success",
        message: "Complaint status updated successfully",
      });
    } catch (error) {
      console.log(error);
      makeToast({ type: "error", message: "Something went wrong" });
    }
    window.location.reload(true);
  };

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col">
            <div class="h-1 bg-gray-200 rounded overflow-hidden">
              <div class="w-24 h-full bg-indigo-500"></div>
            </div>
            <div class="flex flex-wrap sm:flex-row flex-col py-6">
              <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Resolved Complaints
              </h1>
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
              <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text   gray-900 "
                    ></th>

                    <th scope="col" className="px-6 py-4 font-bold text-black">
                      Authority
                    </th>
                    <th scope="col" className="px-6 py-4 font-bold text-black">
                      Province
                    </th>
                    <th scope="col" className="px-6 py-4 font-bold text-black">
                      District
                    </th>
                    <th scope="col" className="px-6 py-4 font-bold text-black">
                      Location
                    </th>
                    <th scope="col" className="px-6 py-4 font-bold text-black">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-4 font-bold text-black">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100 border-t border-gray-100 h-48">
                  {complaints &&
                    complaints
                      .filter((elem) => elem.complaintStatus == "resolved")
                      .map((elem) => (
                        <tr className="hover:bg-gray-50">
                          <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                            <div className="relative">
                              <img
                                className="h-36 w-36 rounded-lg object-cover object-center"
                                src={elem.image}
                              />
                            </div>
                            <div className="text-s mt-[50px]">
                              <div className="text-gray-700 font-semibold">
                                {elem.complaintTitle}
                              </div>
                              <div className="text-gray-400">
                                {elem.citizenName}
                              </div>
                            </div>
                          </th>

                          <td className="px-6 py-4">
                            <div className="inline-flex items-center rounded-full px- py-1 text-xl ">
                              <span class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-md font-semibold text-red-600">
                                {elem.authority.name}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="inline-flex items-center rounded-full text-black text-xl ">
                              {elem.province}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="inline-flex items-center rounded-full px- py-1 text-xl text-black ">
                              {elem.district}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="inline-flex items-center rounded-full px- py-1 text-xl text-black ">
                              {elem.location}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="inline-flex items-center rounded-full px- py-1 text-xl ">
                              <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-md font-semibold text-green-500">
                                <span class="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                {elem.complaintStatus}
                              </span>
                            </div>
                          </td>

                          <td className="px-6 py-4">
                            <div>
                              <button
                                className=" bg-green-500 text-white py-2 px-2 rounded-md text-lg font-bold hover:bg-green-600 transition-colors"
                                onClick={() => changeStatus(elem._id, status)}
                              >
                                Approve Complaint
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminComplaintResolved;
