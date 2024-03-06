/* eslint-disable react/prop-types */

import Swal from "sweetalert2";

const UpdateModal = ({ isOpen, closeModal, yours, }) => {
  const { adminname, email, bithdayDate, _id } = yours;
  if (!isOpen) {
    return null;
  }
  const handleCancelClick = () => {
    closeModal();
  };

  const updateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const adminname = form.adminname.value;
    const bithdayDate = form.bithdayDate.value;
    const email = form.email.value;

    const rqpAsset = {
      adminname: adminname,
      email: email,
      bithdayDate: bithdayDate,
    };
 };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-70 flex items-center justify-center">
      <form onSubmit={updateProfile}>
        <div className="bg-white p-8 max-w-md mx-auto rounded shadow-lg">
          {/* Add your update form or content here */}
          <h2 className="text-2xl font-semibold mb-4">Update Information</h2>
          <h2 className="text-2xl font-semibold mb-4"></h2>
          <div className=" ">
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-gray-600 text-start py-1">
                {" "}
                Name
              </label>
              <input
                defaultValue={adminname}
                type="text"
                id="assetName"
                name="adminname"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-gray-600 text-start py-1">
                Email
              </label>
              <input
                defaultValue={email}
                readOnly
                type="text"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-gray-600 text-start py-1">
                Birthday
              </label>
              <input
                defaultValue={bithdayDate}
                type="text"
                name="bithdayDate"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </div>
          <div>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-5">
              Update
            </button>
            <p
              onClick={handleCancelClick}
              className="cursor-pointer bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 inline"
            >
              Cancel
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateModal;
