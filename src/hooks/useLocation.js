import { useState } from "react";
import { getLocationFromAPI } from "../services/locationService";

export const useLocation = () => {
  const [location, setLocation] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (success) => {
          const { data } = await getLocationFromAPI(success.coords);
          setLocation(data[0]);
        },
        (failure) =>
          alert(
            `${failure.message}. This feature requires location access permission.`
          )
      );
    } else alert("Location service unavailable!");
  };
  return { getLocation, location };
};
