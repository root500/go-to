import { useState, useEffect, useCallback, useRef } from 'react';

const useAddressLength = (charWidth, dotsWidth, correction = 0) => {
  const address = useRef(null);
  const [addressWidth, setAddressWidth] = useState(0);
  const [addressLength, setAddressLength] = useState(10);

  const updateWidth = useCallback(() => {
    if (!address.current) return;

    const el = address.current;
    const width = parseInt(window.getComputedStyle(el).width, 10);

    if (addressWidth !== width) setAddressWidth(width);
  }, [addressWidth]);

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();

    return () => window.removeEventListener('resize', updateWidth);
  }, [updateWidth]);

  useEffect(() => {
    if (!addressWidth) return;

    const textWidth = addressWidth + correction;
    const length = Math.floor((textWidth - dotsWidth) / 2 / charWidth);

    setAddressLength(length);
  }, [correction, charWidth, dotsWidth, addressWidth]);

  return [address, addressLength, updateWidth];
};

export { useAddressLength };
