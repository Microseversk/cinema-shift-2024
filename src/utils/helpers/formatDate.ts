export const formatDate = (date: string) => {
  const arrDay = date.split('.');
  const day = arrDay[0][0] === '0' ? arrDay[0].slice(1) : arrDay[0];
  const month = arrDay[1];
  const year = arrDay[2];
  return {
    day,
    month,
    year,
  };
};
