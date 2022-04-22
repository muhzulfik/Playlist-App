const convertDuration = (duration: any) => {
  const minutes = Number((duration / 60000).toFixed(0));
  let seconds = Number(((duration % 60000) / 1000).toFixed(0));
  if (seconds < 10) seconds = seconds;
  return `0${minutes}:${seconds}`;
};

export default convertDuration;
