const color = {
  white: '#ffffff',
  black: '#000000',

  text: '#eee',
};

const fontSize = {
  h1: 54,
  h2: 32,
  h3: 24,
  h4: 18,
  text: 16,
  small: 12,
};

Object.keys(fontSize).forEach((key) => {
  fontSize[key] = (fontSize[key] / 10) + 'rem'
});

export {
  color,
  fontSize,
};
