import React, { useState, useEffect, useRef, useCallback } from 'react';

const useText = ({ number, disappear }) => {
  const [isShow, setIsShow] = useState(false);
  const [isDisappear, setIsDisappear] = useState(false);
  const showRef = useRef();
  const handleSwitch = useCallback(() => {
    if (window.pageYOffset >= number) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
    if (window.pageYOffset >= disappear) {
      setIsDisappear(true);
    } else {
      setIsDisappear(false);
    }
  }, [showRef]);
  useEffect(() => {
    console.log(`isShow:${isShow}`);
    console.log(`isDis:${isDisappear}`);
    console.log(window.pageYOffset);
    window.addEventListener('scroll', handleSwitch);
    return () => {
      window.removeEventListener('scroll', handleSwitch);
    };
  });
  return { isShow, showRef, isDisappear };
};

export default useText;
