import UseLikes from "@/components/Hooks/useLIkes";
import { AuthContext } from "@/components/provider/AuthProvider";
import React, { useContext } from "react";
import { FaDroplet } from "react-icons/fa6";
import axios from "axios";
import { BsDroplet } from "react-icons/bs";

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
      {/* blood/like icon */}
      {allLikes
        .filter((likes) => likes.postsID === postId)
        .find((l) => l.likerEmail === user?.email) ? (
        <FaDroplet
          onClick={() => handleLikedClick(postId)}
          className="text-primary text-2xl font-extrabold "
        />
      ) : (
        <BsDroplet
          onClick={() => handleLikedClick(postId)}
          className="text-primary font-extrabold  text-2xl "
        />
      )}
      {/* blood/like count */}
      <h2 className="font-bold">{allLikes.filter((likes) => likes.postsID === postId).length}</h2>
    </>
  );
};

export default Likes;
