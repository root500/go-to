const fonts = [
  {
    family: 'Spoqa Han Sans',
    weight: 400,
    name: 'SpoqaHanSans-Regular',
  },
  {
    family: 'Spoqa Han Sans',
    weight: 700,
    name: 'SpoqaHanSans-Bold',
  },
];

export default fonts.map(
  ({ family, weight, name }) => `
    @font-face {
      font-family: '${family}';
      font-style: normal;
      font-weight: ${weight};
      src: local(${name}), url(/static/fonts/${name}.woff2) format('woff2');
    }
  `,
).join('');
