import React, {useEffect, useState} from 'react';
import {css} from '@emotion/core';
import validate from 'url-validator';
import isDomainName from 'is-domain-name';
import {FiArrowRight, FiSearch} from 'react-icons/fi';
import {fontSize} from "./styles/variables";

const container = css`
  display: flex;
  position:absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

const addressBox = css`
  display: flex;
  width: 50%;
`;
const form = css`
  display: flex;
  flex: 1;
  position:relative;
`;
const addressInput = css`
  flex: 1;
  padding: 13px 70px 13px 30px;
  color: #ddd;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: ${fontSize.h2};
  -webkit-appearance: none;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  line-height: 44px;
  transition: border 0.3s;
  
  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
  }
`;
const size = 50;
const offset = (70 - size) / 2;
const go = css`
  position:absolute;
  right: ${offset}px;
  top: ${offset}px;
  padding: ${10 - 2}px;
  margin: 0;
  color: #aaa;
  font-size: 30px;
  transition: opacity 0.3s;
  border: 2px solid #aaa;
  border-radius: 100%;
  
  > svg {
    display: block;
  }
`;

function App() {
  const [address, setAddress] = useState('');
  const [type, setType] = useState('keyword');

  const handleChange = (e) => setAddress(e.target.value);
  const handleSubmit = (e) => {
    window.location.href = (() => {
      if (type === 'address') {
        return address;
      } else if (type === 'domain') {
        return `http://${address}`;
      } else {
        return `https://www.google.com/search?q=${encodeURIComponent(address)}`;
      }
    })();
    e.preventDefault();
  };

  useEffect(() => {
    if (validate(address)) {
      setType('address');
    } else if (address.includes('.') && isDomainName(address)) {
      setType('domain');
    } else {
      setType('keyword');
    }
  }, [address]);

  return <div css={container}>
    <div css={addressBox}>
      <form css={form} onSubmit={handleSubmit}>
        <input type="text" css={addressInput} value={address} onChange={handleChange}/>
        <button css={go}>
          {type === 'keyword' ? <FiSearch /> : <FiArrowRight />}
        </button>
      </form>
    </div>
  </div>;
}

export default App;
