import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";

import MaintenanceTeamContext from "../../contexts/MaintenanceTeamContext";

export default function EditTeamModal() {
  const {
    selectedTeam,
    handleSubmitEditTeamForm,
    editTeam,
    registerEditTeamForm,
    errorsEditTeamForm,
    isEditTeamModalOpen,
    closeEditTeamModal,
  } = useContext(MaintenanceTeamContext);

  return (
    <>
      <Transition appear show={isEditTeamModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeEditTeamModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl font-medium leading-6 text-gray-900"
                  >
                    Edit Team
                  </Dialog.Title>

                  <hr className="my-4" />

                  <form
                    onSubmit={handleSubmitEditTeamForm(editTeam)}
                    className="mt-6"
                  >
                    <div className="flex flex-col">
                      <label
                        htmlFor="teamName"
                        className="text-lg font-medium text-gray-900"
                      >
                        Team Name
                      </label>
                      <input
                        type="text"
                        name="teamName"
                        id="teamName"
                        className="mt-2 p-2 border border-gray-400 rounded-md"
                        {...registerEditTeamForm("teamName", {
                          required: true,
                        })}
                        defaultValue={selectedTeam.teamName}
                      />
                      {errorsEditTeamForm.teamName && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col mt-4">
                      <label
                        htmlFor="teamLeader"
                        className="text-lg font-medium text-gray-900"
                      >
                        Team Leader
                      </label>
                      <input
                        type="text"
                        name="teamLeader"
                        id="teamLeader"
                        className="mt-2 p-2 border border-gray-400 rounded-md"
                        {...registerEditTeamForm("teamLeader", {
                          required: true,
                        })}
                        defaultValue={selectedTeam.teamLeader}
                      />
                      {errorsEditTeamForm.teamLeader && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col mt-4">
                      <label
                        htmlFor="teamMembers"
                        className="text-lg font-medium text-gray-900"
                      >
                        Team Members (separate with comma)
                      </label>
                      <input
                        type="text"
                        name="teamMembers"
                        id="teamMembers"
                        className="mt-2 p-2 border border-gray-400 rounded-md"
                        {...registerEditTeamForm("teamMembers", {
                          required: true,
                        })}
                        defaultValue={selectedTeam.teamMembers?.join(", ")}
                      />
                      {errorsEditTeamForm.teamMembers && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>

                    <div className="flex justify-end mt-6">
                      <button
                        type="button"
                        className="px-4 py-2 bg-gray-200 text-gray-900 rounded-md"
                        onClick={closeEditTeamModal}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4"
                      >
                        Edit
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
