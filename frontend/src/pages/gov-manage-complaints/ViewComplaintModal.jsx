import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

// complaintTitle: {
//   type: String,
//   required: true,
// },
// description: {
//   type: String,
//   required: true,
// },
// authority:{
//   type:mongoose.Schema.Types.ObjectId,
//   ref:"GovAuthority",
// },
// province: {
//   type: String,
//   required: true,
// },
// district: {
//   type: String,
//   required: true,
// },
// location: {
//   type: String,
//   required: true,
// },
// emergencyNo: {
//   type: String,
//   required: true,
// },
// image: {
//       type:String,
//       required:false
// },
//   citizenId: {
//   type:mongoose.Schema.Types.ObjectId,
//   ref:"Customer",
// },

//   complaintStatus: {
//   type: String,
//   required: true,
//   default: "pending",
//   enum: ["pending","approved", "assigned", "inProgress", "resolved", "invalid"],
// },
// isPublish: {
//   type: Boolean,
//   default: false,
// },
// assignedTeam: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: "maintenanceTeam",
//   default: null
// },

export default function ViewComplaintModal({ isOpen, closeModal, complaint }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                    {complaint.complaintTitle}
                  </Dialog.Title>

                  <hr className="my-4" />
                  {/* Image */}
                  <div className="flex flex-row justify-center">
                    <img
                      className="h-32 w-96 object-cover"
                      src={complaint.image}
                      alt="complaint"
                    />
                  </div>

                  {/* Description */}
                  <div className="mt-4">
                    <h4 className="text-lg font-medium leading-6 text-gray-900">
                      Description
                    </h4>
                    <p className="mt-2 text-sm text-gray-500">
                      {complaint.description}
                    </p>
                  </div>

                  {/* Location */}
                  <div className="mt-4">
                    <h4 className="text-lg font-medium leading-6 text-gray-900">
                      Location
                    </h4>
                    <p className="mt-2 text-sm text-gray-500">
                      {complaint.location}
                    </p>
                  </div>

                  {/* Emergency No */}
                  <div className="mt-4">
                    <h4 className="text-lg font-medium leading-6 text-gray-900">
                      Emergency No
                    </h4>
                    <p className="mt-2 text-sm text-gray-500">
                      {complaint.emergencyNo}
                    </p>
                  </div>

                  {/* Province & District */}
                  <div className="mt-4">
                    <h4 className="text-lg font-medium leading-6 text-gray-900">
                      Province & District
                    </h4>
                    <p className="mt-2 text-sm text-gray-500">
                      {complaint.province} - {complaint.district}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
