export const getLocationFromAPI = async ({ longitude, latitude }) => {
  const response = await fetch(
    `http://api.positionstack.com/v1/reverse?access_key=${process.env.REACT_APP_GEOLOCATION_KEY}&query=${latitude},${longitude}&limit=1`
  );
  return await response.json();
};
