const ageConverter = (birthday) => {
  const age = Math.floor((Date.now() - new Date(birthday)) / 1000 / (60 * 60 * 24 * 365));
  return age <= 1 ? '1 Jahr' : `${age} Jahre`;
};
export default ageConverter;