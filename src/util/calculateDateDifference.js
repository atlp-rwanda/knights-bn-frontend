const difference = (date1, date2) => {
  const newDate1 = new Date(date1);
  const newDate2 = new Date(date2);
  if (newDate2 > newDate1) return null;
  const diffTime = Math.abs(newDate1 - newDate2);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export default difference;
