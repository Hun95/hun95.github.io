import React, { useState, useEffect, useRef, useCallback } from 'react';

const useTextAction = showRef => {
  const [isShow, setIsShow] = useState(false);
  const [isSecond, setIsSecond] = useState(false);

  const handleSwitch = useCallback(() => {
    if (window.pageYOffset >= showRef.current.offsetTop - 400) {
      setIsSecond(true);
      setIsShow(true);
    } else {
      setIsSecond(false);
      setIsShow(false);
    }
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', handleSwitch);
    return () => {
      window.removeEventListener('scroll', handleSwitch);
    };
  });
  return { isShow, isSecond };
};

export default useTextAction;
