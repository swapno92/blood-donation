import { ImCross } from "react-icons/im";
import React, { useContext} from "react";
import { AuthContext } from "@/components/provider/AuthProvider";
import axios from "axios";
import moment from "moment";


const DonatRequest = () => {
  const {user}=useContext(AuthContext);
  const currentDate = moment().format('MM-DD-YYYY');

  const submitFrom = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = user.displayName;
    const email = user.email;
    const date = from.date.value;
    const contactNumber = from.contactNumber.value;
    const location = from.location.value;
    const bloodGroup = from.bloodGroup.value;
    const quantity = from.quantity.value;
    const gender = from.gender.value;
    

    const requestBlood = {
      name,
      email,
      date,
      contactNumber,
      location,
      bloodGroup,
      quantity,
      gender,
      currentDate, 
    };
    console.log(requestBlood)

    axios.post( "http://localhost:5000/request",
        requestBlood 
      )
      .then((data) => {
        console.log(data);
        if (data.data.insertedId) {
          toast("User Request successfully");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
    return (
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle w-full">
        <div className="modal-box w-full">
  <div className="mt-5 px-5 mb-3">
     <h2 className="text-3xl font-bold  text-center  mb-3">Blood Request</h2>
     <form onSubmit={submitFrom} >
         <div className="form-control w-full pb-3">
           <label>
             <input
               type="text"
               name="name"
               placeholder="Your name"
               className="input w-full focus:border-0 focus-within:outline-none border-0 border-b-2 border-gray-400 focus:border-b-2   focus:border-gray rounded-none px-1"
               defaultValue={user?.displayName}
             />
           </label>
         </div>
         <div className="form-control w-full pb-3">
           <label>
             <input
               type="email"
               name="email"
               placeholder="Your Email"
               className="input w-full focus:border-0 focus-within:outline-none border-0 border-b-2 border-gray-400 focus:border-b-2  focus:border-gray rounded-none px-1"
               defaultValue={user?.email}
             />
           </label>
         </div>
         <div className="form-control w-full pb-3">
           <label>
             <input
               type="date"
               name="date"
               placeholder=""
               className="input w-full focus:border-0 focus-within:outline-none border-0 border-b-2 border-gray-400 focus:border-b-2  focus:border-gray rounded-none px-1"
             />
           </label>
         </div>
         <div className="form-control w-full pb-3">
           <label>
             <input
               type="number"
               name="contactNumber"
               placeholder="contact Number"
               className="input w-full focus:border-0 focus-within:outline-none border-0 border-b-2 border-gray-400 focus:border-b-2  focus:border-gray rounded-none px-1"
             />
           </label>
         </div>
         <div className="form-control w-full pb-3">
           <label>
             <input
               type="text"
               name="location"
               placeholder="Location"
               className="input w-full focus:border-0 focus-within:outline-none border-0 border-b-2 border-gray-400 focus:border-b-2  focus:border-gray rounded-none px-1"
             />
           </label>
         </div>
        <div className="md:flex justify-center gap-10 mb-2">
       <div className="form-control w-full pb-3">
       <select id="" name="bloodGroup" className=" input w-full focus:border-0 focus-within:outline-none border-0 border-b-2 border-gray-400 focus:border-b-2  focus:border-gray rounded-none px-1">
              <option value="Blood Group">Blood Group</option>
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
         <div className="form-control w-full pb-5">
           <label>
             <input
               type="number"
               name="quantity"
               placeholder="Quantity"
               className="input w-full focus:border-0 focus-within:outline-none border-0 border-b-2 border-gray-400 focus:border-b-2  focus:border-gray rounded-none px-1"
             />
           </label>
         </div>
        </div>
       <div className="flex gap-4 w-full pb-5">
        <span className="font-semibold"> Gender:</span>
             <input type="radio" name="gender"/>Male
             <input type="radio" name="gender"/>Female
             <input type="radio" name="gender"/>Others
         </div>
       <div className="flex justify-center">
         <button className="py-3 rounded text-white text-xl btn-block mt-3 bg-primary">Send Request</button>
         </div>
     </form>
   </div>
   <div className="modal-action px-5">
      <form method="dialog">
          <button className=""><ImCross /></button>
      </form>
    </div>
  </div>
</dialog>
    );
};

export default DonatRequest;