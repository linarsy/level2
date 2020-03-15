const getValue = (str, obj) => {
  const keys = str.split('.');
  return keys.reduce((acc, i) => acc[i], obj);
};

export default getValue;
