import React, { useContext } from "react";
import { CiSquareRemove } from "react-icons/ci";
import { AuthContext } from "../provider/AuthProvider";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const UserUpdateModal = ({ showModal, closeModal, userInfo }) => {
  const { user } = useContext(AuthContext);
  const { _id } = userInfo;
  const router = useRouter()

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

    fetch(
      `https://blood-donation-server-binary-avanger.vercel.app/users/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast("User Information Update successfully");
        from.reset();
        closeModal();
      });
  };
  return (
    <div className=" flex justify-center items-center fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="md:w-1/2 w-11/12  flex flex-col md:mt-36 mt-24 bg-red-50 md:px-10 px-5 lg:py-10 py-5 rounded-md">
        <form onSubmit={updateUser}>
          <div className="flex items-center ">
            <h2 className="lg:text-4xl md:text-[22px] text-xl   font-semibold lg:text-center  w-[90%] mb-6">
              User Information Update
            </h2>
            <button
              onClick={() => closeModal()}
              className="text-4xl bg-red-100 rounded-md text-primary font-semibold shadow-xl ml-auto mb-auto "
            >
              <CiSquareRemove />
            </button>
          </div>

          <div className="flex gap-3 pb-3 ">
            {/* <label> */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input w-1/2 text-black bg-gray-100 focus:bg-red-100  focus:outline-none  border border-gray-300 rounded-md py-1 px-2 "
              defaultValue={user?.displayName}
            />
            {/* </label> */}
            {/* <label> */}
            <input
              type="number"
              name="mobile"
              defaultValue={userInfo?.mobile ? userInfo?.mobile : ""}
              placeholder="Contact Number"
              className="input w-1/2 bg-gray-100 focus:bg-red-100  focus:outline-none border border-gray-300   rounded-md py-1 px-2 "
            />
            {/* </label> */}
          </div>
          <div className="flex gap-3 pb-3 ">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input w-1/2 bg-gray-100 focus:bg-red-100  focus:outline-none border border-gray-300   rounded-md py-1 px-2 "
              defaultValue={user?.email}
              readOnly="true"
            />
            <select
              id=""
              name="blood"
              required
              className="input w-1/2 bg-gray-100 focus:bg-red-100 border border-gray-300  focus:outline-none  rounded-md py-1 px-2"
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
          <div className="form-control w-full pb-3">
            <label>
              <input
                type="text"
                defaultValue={userInfo?.address ? userInfo?.address : ""}
                name="address"
                placeholder="Your Address"
                className="input w-full bg-gray-100 focus:bg-red-100 border border-gray-300  focus:outline-none  rounded-md py-1 px-2 "
              />
            </label>
          </div>
          <div className="form-control w-full pb-3"></div>
          <div className="">
            <button className="btn py-3 rounded text-white text-xl btn-block lg:mt-3 bg-primary">
              Update User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserUpdateModal;
