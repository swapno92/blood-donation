"use client";
import UseRequest from "@/components/Hooks/UseRequest";

const DonnerRequest = () => {
  const [request] = UseRequest();

  return (
    <div className="">
      <div className="m-6 ">
        <h1 className="text-2xl font-bold text-center mb-4 mt-4">
          Donner Request{request.length}
        </h1>
        <table className="table max-w-screen-lg mx-auto ">
          <thead className="text-lg bg-primary text-white text-center">
            <tr>
              <th>No</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Blood</th>
              <th>Quantity</th>
              <th>Location </th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {request?.map((request, index) => (
              <tr
                key={request._id}
                className="text-black font-semibold text-center"
              >
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={request?.img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{request?.name}</td>
                <td>{request?.bloodGroup}</td>
                <td>{request?.quantity}</td>
                <td>{request?.location}</td>
                <td>Pending</td>
                <td className="flex gap-3">
                  <button className="btn btn-accent btn-sm">Accept</button>
                  <button className="btn btn-secondary btn-sm">Rejected</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonnerRequest;
