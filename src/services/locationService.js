export const getLocationFromAPI = async ({ longitude, latitude }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/userlocation/?latitude=${latitude}&longitude=${longitude}`
  );
  return await response.json();
};
