import getUsers from "@/libs/getUsers";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";
import { MdDeleteSweep, MdEditNote, MdOutlineAdminPanelSettings } from "react-icons/md";

const AllUser = async () => {
  const users = await getUsers();
  console.log(users);
  return (
    <div className=" mb-12">
      <div className="px-4 w-full">
        <h1 className="text-2xl font-bold text-center mb-4 mt-4">All User</h1>
        <div className="w-full">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="text-center bg-primary text-white">
                <th scope="col" className="p-4">
                  NO
                </th>
                <th scope="col" className="px-6 py-3">
                  Profile
                </th>
                <th scope="col" className="px-6 py-3">
                  ADDRESS
                </th>
                <th scope="col" className="px-6 py-3">
                  BLOOD
                </th>
                <th scope="col" className="px-6 py-3">
                  ROLE
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr
                  key={user._id}
                  className="text-black font-semibold text-center border-b-2 hover:bg-gray-200"
                >
                  <th>{index + 1}</th>
                  <td class=" px-6 py-4 flex ">
                    <div className="flex gap-2 items-center ">
                      <div className="">
                        <div className=" ">
                          <Image
                            className="w-12 h-12 rounded-full"
                            width={1000}
                            height={1000}
                            src={user?.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div className="text-left ">
                        <h2>{user?.name}</h2>
                        <h2 className="text-gray-500">{user?.email}</h2>
                      </div>
                    </div>
                  </td>

                  <td class=" px-6 py-4">{user?.address}</td>
                  <td class=" px-6 py-4">{user?.blood}</td>
                  <td class=" px-6 py-4">
                    {user?.roll === "admin" ? (
                      <MdOutlineAdminPanelSettings className="text-2xl text-emerald-800" />
                    ) : (
                      <FaRegUserCircle className="text-2xl text-purple-900" />
                    )}
                  </td>
                  <td className="flex gap-3">
                    {/* <button className="  btn-sm px-6 py-4">Edit</button> */}
                    <button className="  btn-sm px-6 py-4"><MdEditNote   className="text-green-700 text-3xl"/></button>
                    <button className="  btn-sm px-6 py-4"><MdDeleteSweep  className="text-red-600 text-2xl"/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
