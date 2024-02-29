import UseLikes from "@/components/Hooks/useLIkes";
import { AuthContext } from "@/components/provider/AuthProvider";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaDroplet } from "react-icons/fa6";
import axios from "axios";

const Likes = ({ postId }) => {
  // get likes
  const [allLikes, refetch] = UseLikes();
  const { user } = useContext(AuthContext);

  const handleLikedClick = (id) => {
    const postsID = id;
    const likerEmail = user?.email;
    const likesInfo = {
      postsID,
      likerEmail,
    };

    fetch(`http://localhost:5000/likes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          axios
            .post("http://localhost:5000/likes", likesInfo)
            .then((data) => {
              if (data.data.insertedId) {
              }
              refetch();
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          const em = data.filter((uEm) => uEm.likerEmail == user?.email);
          if (em[0]?.likerEmail == user?.email) {

            fetch(`http://localhost:5000/likes/${user?.email}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                }
                refetch();
              });
            return;
          } else {
            axios
              .post("http://localhost:5000/likes", likesInfo)
              .then((data) => {
                if (data.data.insertedId) {
                }
                refetch();
              });
          }
        }
      });
  };

  return (
    <>
      {allLikes.filter((likes) => likes.postsID === postId).length}
      {/* {emailData.filter((final) => final.postsID === data?._id)
                   .length === 0 ? (  */}
      {/* <BsDroplet */}
      {/* // onClick={() => handleLikedClick(data?._id)} */}
      {/* className="text-primary font-extrabold  text-2xl "
                  />  */}
      {/* ) : (  */}
      <FaDroplet
        onClick={() => handleLikedClick(postId)}
        className="text-primary text-2xl font-extrabold "
      />
      {/* )}  */}
    </>
  );
};

export default Likes;
