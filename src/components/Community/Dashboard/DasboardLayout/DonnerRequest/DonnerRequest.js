"use client"

import { useEffect, useState } from "react";

const DonnerRequest = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/requests")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <div className="m-6">
      <h1 className="text-2xl font-bold text-center mb-4 mt-4">
        Donner Request
      </h1>
      <table className="table w-fulll border w-full">
        {/* head */}
        <thead className="text-lg bg-primary text-white text-center">
          <tr>
            <th>No</th>
            <th>Profile</th>
            <th>Name</th>
            <th>Blood Group</th>
            <th>Quantity</th>
            <th>Address In Details</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
         {users?.map((user, index)=> 
         <tr key={user._id} className="text-black font-semibold text-center">
            <th>{index + 1}</th>
            <td>
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src={user?.img}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
            </td>
            <td>{user?.name}</td>
            <td>{user?.bloodGroup}</td>
            <td>{user?.quantity}</td>
            <td>{user?.location}</td>
          </tr>
          )} 
        </tbody>
      </table>
    </div>
  );
};

export default DonnerRequest;
