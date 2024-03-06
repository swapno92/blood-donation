import { ImCross } from "react-icons/im";
import React, { useContext, useState } from "react";
import { AuthContext } from "@/components/provider/AuthProvider";
import moment from "moment";
import toast from "react-hot-toast";
import UseAxiosSecure from "../Hooks/useAxiosSecure";
import UseRequest from "../Hooks/UseRequest";

const DonatRequest = () => {
  const { user } = useContext(AuthContext);
  const [request, refetch] = UseRequest();
  const axiosSecure = UseAxiosSecure();
  const currentDate = moment().format("MM-DD-YYYY");
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const status = "pending";

  const submitFrom = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = user.displayName;
    const email = user.email;
    const img = user.photoURL;
    const date = from.date.value;
    const contactNumber = from.contactNumber.value;
    const location = from.location.value;
    const patient = from.patient.value;
    const himoglobing = from.himoglobing.value;
    const bloodGroup = from.bloodGroup.value;
    const quantity = from.quantity.value;
    const gender = from.gender.value;

    const requestBlood = {
      name,
      email,
      img,
      date,
      contactNumber,
      location,
      patient,
      himoglobing,
      bloodGroup,
      quantity,
      gender,
      currentDate,
      status,
    };
    console.log(requestBlood);

    axiosSecure
      .post("/requests", requestBlood)
      .then((data) => {
        // console.log(data);
        if (data.data.insertedId) {
          refetch();
          toast.success("User Request successfully");
          from.reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <dialog
      id="my_modal_5"
      className="modal modal-bottom sm:modal-middle w-full"
    >
      <div className="modal-box w-full">
        <div className="modal-action px-5">
          <form method="dialog">
            <button className="btn bg-white border-none outline-none text-red-500">
              <ImCross />
            </button>
          </form>
        </div>
        <div className="mt-5 px-5  mb-3">
          <h2 className="text-3xl font-bold  text-center  mb-6">
            Blood Request
          </h2>

          <form onSubmit={submitFrom}>
            <div className="form-control w-full pb-3">
              <label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input w-full bg-gray-100 focus:bg-red-100 border-none focus:outline-none  rounded-md py-1 px-2 "
                  defaultValue={user?.displayName}
                  required
                  readOnly
                />
              </label>
            </div>
            <div className="form-control w-full pb-3">
              <label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input w-full bg-gray-100 focus:bg-red-100 border-none focus:outline-none  rounded-md py-1 px-2 "
                  defaultValue={user?.email}
                  required
                />
              </label>
            </div>
            <div className="form-control w-full pb-3">
              <label>
                <input
                  type="date"
                  name="date"
                  placeholder=""
                  className="input w-full bg-gray-100 focus:bg-red-100 border-none focus:outline-none  rounded-md py-1 px-2 "
                  required
                />
              </label>
            </div>
            <div className="form-control w-full pb-3">
              <label>
                <input
                  type="number"
                  name="contactNumber"
                  placeholder="Contact Number"
                  className="input w-full bg-gray-100 focus:bg-red-100 border-none focus:outline-none  rounded-md py-1 px-2"
                  required
                />
              </label>
            </div>
            <div className="form-control w-full pb-3">
              <label>
                <input
                  type="text"
                  name="location"
                  placeholder="Address In Details"
                  className="input w-full bg-gray-100 focus:bg-red-100 border-none focus:outline-none  rounded-md py-1 px-2"
                  required
                />
              </label>
            </div>
            <div className="md:flex justify-center gap-6 mb-2">
              <div className="form-control w-full pb-3">
                <label>
                  <input
                    type="text"
                    name="patient"
                    placeholder="Patient Condition"
                    className="input w-full bg-gray-100 focus:bg-red-100 border-none focus:outline-none  rounded-md py-1 px-2 "
                    required
                  />
                </label>
              </div>
              <div className="form-control w-full pb-3">
                <label>
                  <input
                    type="text"
                    name="himoglobing"
                    placeholder="Hemoglobin"
                    className="input w-full bg-gray-100 focus:bg-red-100 border-none focus:outline-none  rounded-md py-1 px-2 "
                  />
                </label>
              </div>
            </div>
            <div className="md:flex justify-center gap-6 mb-2">
              <div className="form-control w-full pb-3">
                <select
                  id=""
                  name="bloodGroup"
                  required
                  className="input w-full bg-gray-100 focus:bg-red-100 border-none focus:outline-none  rounded-md py-1 px-2"
                >
                  <option value="Blood Group">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB</option>
                </select>
              </div>
              <div className="form-control w-full pb-7">
                <label>
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    className="input w-full bg-gray-100 focus:bg-red-100 border-none focus:outline-none  rounded-md py-1 px-2"
                    required
                  />
                </label>
              </div>
            </div>
            <div className="flex justify-center gap-3 md:gap-6 w-full pb-5">
              <span className="font-semibold"> Gender:</span>
              <input
                type="radio"
                id="male"
                value="male"
                name="gender"
                checked={selectedValue === "male"}
                onChange={handleRadioChange}
              />
              Male
              <input
                type="radio"
                id="female"
                value="female"
                name="gender"
                checked={selectedValue === "female"}
                onChange={handleRadioChange}
              />
              Female
              <input
                type="radio"
                id="others"
                value="others"
                name="gender"
                checked={selectedValue === "others"}
                onChange={handleRadioChange}
              />
              Others
            </div>
            <div className="">
              <button
                method="dialog"
                className="btn py-3 rounded text-white text-xl btn-block mt-3 bg-primary"
              >
                Send Request
              </button>
            </div>
          </form>
        </div>
        
      </div>
    </dialog>
  );
};

export default DonatRequest;
