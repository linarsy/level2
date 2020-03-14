const alignText = (strings, sep) => {
  const space = ' ';
  const maxLengthString = strings.reduce((arr, i) => (arr > i.length ? arr : i.length), 0);

  const func = (str) => {
    const currentString = str.slice(0, -sep.length);
    const spaces = space.repeat(maxLengthString - str.length);

    return [currentString, spaces, sep].join('');
  };

  return strings.map(func);
};

export default alignText;
