import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useCurrentUser = () => {
  const { user } = useContext(AuthContext);
  console.log(currentUser);
  const [userInfo, setuserInfo] = useState([]);
  console.log(userInfo);
  const currentUser = user?.email;

  useEffect(() => {
    fetch(
      `https://blood-donation-server-binary-avanger.vercel.app/users/${currentUser}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.length === 0) {
          // Handle the case when the response is empty
          console.warn("Empty response from the server");
        } else {
          setuserInfo(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currentUser]);
};

export default useCurrentUser;
