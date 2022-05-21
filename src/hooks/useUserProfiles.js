import { useEffect, useState } from "react";
import { token } from "../services/index";

const useUserProfiles = ({ _id }) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    async function fetchUserProfiles() {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/user/profiles/${_id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token(),
          },
        }
      );
      const data = await res.json();
      setUserData(data);
    }
    fetchUserProfiles();
  }, [_id]);
  return { userData };
};

export default useUserProfiles;
