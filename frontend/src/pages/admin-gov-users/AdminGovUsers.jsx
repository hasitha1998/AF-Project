import React, { useContext, useEffect, useState } from "react";
import GovAuthAPI from "../../contexts/api/GovAuthAPI";
import makeToast from "../../components/toast";

const AdminGovUsers = () => {
  const [govUsers, setGovUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    GovAuthAPI.getGovAuths().then((response) => {
      setGovUsers(response.data);
    });
  }, []);

  const deleteGovUser = (id) => {
    GovAuthAPI.deleteGovAuth(id).then(() => {
      setGovUsers(govUsers.filter((elem) => elem._id !== id));
      makeToast({
        type: "success",
        message: "Government Authority deleted successful",
      });
    });
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <div className="input-group relative flex flex-wrap items-stretch w-full mt-10">
              <input
                type="search"
                className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Search Here"
                aria-label="Search"
                aria-describedby="button-addon3"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              ></input>
            </div>
          </div>
        </div>
      </div>

      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-6 font-medium text-gray-900">
                Name
              </th>

              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Description
              </th>
              <th scope="col" class="px-6 py-6 font-medium text-gray-900">
                Email
              </th>

              <th scope="col" class="px-6 py-6 font-medium text-gray-900">
                Permission Level
              </th>
              <th scope="col" class="px-4 py-6 font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-100 border-t border-gray-100">
            {govUsers &&
              govUsers
                .filter((val) => {
                  if (searchTerm == "") {
                    return val;
                  } else if (
                    val.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((elem) => (
                  <tr class="hover:bg-gray-50">
                    <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div class="text-sm">
                        <div class="font-medium text-gray-700">{elem.name}</div>
                      </div>
                    </th>
                    <td class="px-6 py-4">
                      <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                        <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                        {elem.description}
                      </span>
                    </td>
                    <td class="px-6 py-4"> {elem.email}</td>
                    <td class="px-6 py-4">{elem.permissionLevel}</td>

                    <td class="px-6 py-4">
                      <div class="flex">
                        <a x-data="{ tooltip: 'Delete' }" href="#">
                          <button onClick={() => deleteGovUser(elem._id)}>
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
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminGovUsers;
