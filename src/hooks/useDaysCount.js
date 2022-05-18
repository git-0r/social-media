export const useDaysCount = (dateString) => {
  if (!dateString) {
    return "0 days ago";
  }
  const diff = new Date().getTime() - new Date(dateString).getTime();
  const millisecondsInDay = 24 * 60 * 60 * 1000;
  const count = Math.floor(diff / millisecondsInDay);

  if (count === 0) {
    return "Today";
  }
  if (count === 1) {
    return "1 day ago";
  }
  return count + " days ago";
};
