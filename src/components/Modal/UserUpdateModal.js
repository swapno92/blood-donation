import React, { useContext } from "react";
import { CiSquareRemove } from "react-icons/ci";
import { AuthContext } from "../provider/AuthProvider";

const UserUpdateModal = ({ showModal, closeModal, userInfo }) => {
  const { user } = useContext(AuthContext);
  const { _id } = userInfo;
  console.log(_id);

  if (!showModal) return null;

  const updateUser = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = user.displayName;
    const email = user.email;
    const mobile = from.mobile.value;
    const address = from.address.value;
    const blood = from.blood.value;

    const userInfo = {
      name,
      email,
      mobile,
      address,
      blood,
    };
    console.log(userInfo);

    fetch(`http://localhost:5000/users/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className=" flex justify-center items-center  fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="w-1/2 flex flex-col ">
        <button
          onClick={() => closeModal()}
          className="text-4xl place-self-end text-primary font-semibold shadow-xl "
        >
          <CiSquareRemove />
        </button>
        <form onSubmit={updateUser}>
          <h2 className="text-4xl text-black font-semibold text-center  mb-6">
            User Information Update
          </h2>

          <div className="form-control w-full pb-3">
            <label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input w-full text-black bg-gray-100 focus:bg-red-100 border-none focus:outline-none  rounded-md py-1 px-2 "
                defaultValue={user?.displayName}
              />
            </label>
          </div>
          <div className="form-control w-full pb-3">
            <label>
              <input
                type="number"
                name="mobile"
                defaultValue={userInfo?.mobile ? userInfo?.mobile : ""}
                placeholder="Contact Number"
                className="input w-full bg-gray-100 focus:bg-red-100 border-none focus:outline-none  rounded-md py-1 px-2 "
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
                readOnly="true"
              />
            </label>
          </div>
          <div className="form-control w-full pb-3">
            <label>
              <input
                type="text"
                defaultValue={userInfo?.address ? userInfo?.address : ""}
                name="address"
                placeholder="Your Address"
                className="input w-full bg-gray-100 focus:bg-red-100 border-none focus:outline-none  rounded-md py-1 px-2 "
              />
            </label>
          </div>
          <div className="form-control w-full pb-3">
            <select
              id=""
              name="blood"
              required
              className="input w-full bg-gray-100 focus:bg-red-100 border-none focus:outline-none  rounded-md py-1 px-2"
              defaultValue={userInfo?.blood ? userInfo?.blood : ""}
            >
              <option value="blood">Selact Blood Group</option>
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
          <div className="">
            <button  className="btn py-3 rounded text-white text-xl btn-block mt-3 bg-primary">
              Update User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserUpdateModal;
