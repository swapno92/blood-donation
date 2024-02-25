import getUsers from "@/libs/getUsers";

const AllUser = async () => {
  //   const [users, setUsers] = useState();
  //   const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:5000/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsers(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setLoading(false);
  //     });
  // }, []);
  // console.log(users);

  // if (loading) {
  //   return (
  //     <div className="flex text-center items-center justify-center text-3xl text-primary">
  //       Users Is loading...
  //     </div>
  //   );
  // }

  const users = await getUsers();
  console.log(users);

  return (
    <div className="px-4 ">
      <h1 className="text-2xl font-bold text-center mb-4 mt-4">All User</h1>
      <div className="w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="text-lg bg-primary text-white text-center">
            <tr>
              <th>No</th>
              <th>Profile</th>
              <th>Address</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((user, index) => (
              <tr
                key={user._id}
                className="text-black font-semibold text-center"
              >
                <th>{index + 1}</th>
                <td>
                  <div className="flex gap-2 items-center ">
                    <div className="avatar">
                      <div className="mask mask-squircle  w-12 h-12">
                        <div className=" ">
                          <img
                            className=""
                            src={user?.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-left ">
                      <h2>{user?.name}</h2>
                      <h2 className="text-gray-500">{user?.email}</h2>
                    </div>
                  </div>
                </td>

                <td>{user?.address}</td>
                <td>{user?.roll}</td>
                <td className="flex gap-3">
                  <button className="btn btn-accent btn-sm">Edit</button>
                  <button className="btn btn-secondary btn-sm">Delte</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
