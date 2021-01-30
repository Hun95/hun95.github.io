import React, { useState, useEffect, useRef, useCallback } from 'react';

const useTextAction = () => {
  const [isShow, setIsShow] = useState(false);
  const showRef = useRef();
  const handleSwitch = useCallback(() => {
    if (window.pageYOffset >= showRef.current.offsetTop - 400) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, [showRef]);
  useEffect(() => {
    window.addEventListener('scroll', handleSwitch);
    return () => {
      window.removeEventListener('scroll', handleSwitch);
    };
  });
  return { isShow, showRef };
};

export default useTextAction;
