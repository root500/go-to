import { css } from '@emotion/core';

export default css`
  a,
  a:hover {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    display: inline-block;
    margin: 0;
    border: none;
    cursor: pointer;
    background-color: unset;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:focus {
      outline: 0;
    }
    &:disabled {
      cursor: default;
    }
  }
`;
