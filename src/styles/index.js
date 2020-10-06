import { css } from '@emotion/core';
import normalize from 'emotion-normalize';
import base from './base';
import fonts from './fonts';
import { color } from './variables';

export default css`
  ${fonts}
  ${normalize}
  ${base}
  
  html {
    height: 100%;
    font-size: 62.5%;
  }
  body {
    min-width: 320px;
    min-height: 100%;
    color: ${color.text};
    font-size: 1.6rem;
    font-family: 'Spoqa Han Sans', sans-serif;
    background: ${color.black};
  }
  
  #app {
    min-height: 100vh;
  }
`;
