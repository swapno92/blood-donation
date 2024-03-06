"use client";
import UseRequest from "@/components/Hooks/UseRequest";
import All_Request from "./All_Request";

const DonnerRequest = () => {
  const [allRequest, refetch] = UseRequest();
  return (

    <div className="lg:px-4 md:px-2 px-[1px]">
      <h1 className="text-2xl font-bold text-center mb-4 mt-4">
        Donner Request {request.length}
      </h1>
      <div className="lg:w-full md:w-[684px] w-[308px] overflow-auto  mx-auto ">
        <table className="table max-w-screen-lg  ">
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
                      <Image
                        src={request?.img ? request?.img : deafuletUserPhoto}
                        alt="Avatar Tailwind CSS Component"
                        width={1000}
                        height={1000}
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
                  {request?.status === "pending" ? (
                    <button
                      onClick={() => handleAcceptReq(request)}
                      className="btn btn-primary btn-sm"
                    >
                      Accept
                    </button>
                  ) : (
                    <button disabled={true} className="btn btn-primary btn-sm">
                      Accept
                    </button>
                  )}
                  <button className="btn btn-secondary btn-sm">Rejected</button>
                </td>{" "}
                ``
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    <div className="">
      <div className="text-center font-bold text-3xl my-10">Total Request - {allRequest?.length}</div>
      {allRequest?.map((request ,index) => <All_Request key={request?._id} request={request}  index={index} reqRefetch={refetch} />)}

    </div>
  );
};

export default DonnerRequest;
