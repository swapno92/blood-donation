import React, { useContext } from "react";
import { CiSquareRemove } from "react-icons/ci";
import { AuthContext } from "@/components/provider/AuthProvider";
import UseAxiosSecure from "@/components/Hooks/useAxiosSecure";
import moment from "moment";
import toast from "react-hot-toast";
import UsePosts from "@/components/Hooks/UsePosts";

const PostModal = ({ showModal, closeModal }) => {
    const [post, refetch] = UsePosts();

  const axiosSecure = UseAxiosSecure();
  if (!showModal) return null;
  let likes = 0;
  const { user } = useContext(AuthContext);
  const userName = user?.displayName;
  const userPhoto = user?.photoURL;
  const userEmail = user?.email;

  // ............. post .....................
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const description = form.get("description");
    const images = form.get("image");
        const currentDateTime = moment().format("D MMM YYYY, h:mm:ss a");

    const postInfo = {
      description,
      images,
      likes,
      userName,
      userPhoto,
      userEmail,
      currentDateTime,
    };


    axiosSecure.post("/posts", postInfo).then((res) => {
      toast.success("post added successfully");
      e.target.reset();
      refetch()
      closeModal()
    });
  };
  return (
    <div className="-mb-[80px] z-10 flex justify-center items-center  fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="w-[40%] flex flex-col ">
        <button
          onClick={() => closeModal()}
          className="text-4xl place-self-end text-primary font-semibold shadow-xl "
        >
          <CiSquareRemove />
        </button>
        <form onSubmit={handleSubmit} className="bg-white py-7 ">
          <h2 className="text-4xl text-black font-semibold text-center  mb-6">
            💉
          </h2>

          <div className="form-control w-full pb-3">
            <div class="relative z-0 mx-10">
              <input
                type="text"
                name="image"
                id="floating_standard"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_standard"
                class="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Photo URL
              </label>
            </div>
          </div>
          <div className="form-control w-full pb-3">
            <div class="relative z-0 mx-10">
              <input
                type="checkbox "
                id="floating_standard"
                name="description"
                class="block h-32 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                placeholder=" "
              />
              <label
                for="floating_standard"
                class="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Description
              </label>
            </div>
          </div>

          <div className="mx-auto text-center">
            <button
              
              className="btn xrounded text-white text-xl mt-3 bg-primary"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
