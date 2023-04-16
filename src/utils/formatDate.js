export const formatDate = (date) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const year = new Date(date).getFullYear();
  const month = months[new Date(date).getMonth()];
  const day = new Date(date).getDay();

  return `${month} ${day}, ${year}`;
};
