import React, { useContext } from "react";
import ComplaintContext from "../../contexts/ComplaintContext";

const AdminComplaintInprogress = () => {
  const { complaints, deleteComplaint } = useContext(ComplaintContext);
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
                In-Progress Complaints
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
                      .filter((elem) => elem.complaintStatus == "inProgress")
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
                              {elem.authority == "LECO" ? (
                                <>
                                  <span class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-md font-semibold text-violet-600">
                                    {elem.authority}
                                  </span>
                                </>
                              ) : (
                                <span class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-md font-semibold text-red-600">
                                  {elem.authority}
                                </span>
                              )}
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
                              <span class="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-md font-semibold text-yellow-500">
                                <span class="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
                                {elem.complaintStatus}
                              </span>
                            </div>
                          </td>

                          <td className="px-6 py-4">
                            <div>
                              <button
                                className="bg-red-500 hover:bg-red-600 text-white w-auto py-1 px-2 rounded-lg"
                                onClick={() => deleteComplaint(elem._id)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="h-6 w-6 "
                                  x-tooltip="tooltip"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
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

export default AdminComplaintInprogress;
