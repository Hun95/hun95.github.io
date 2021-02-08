import React, { useState, useEffect, useRef, useCallback } from 'react';

const useText = ({ number, disappear, showRef }) => {
  const [isShows, setIsShow] = useState(false);
  const [isDisappear, setIsDisappear] = useState(false);

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
  });
  useEffect(() => {
    window.addEventListener('scroll', handleSwitch);

    return () => {
      window.removeEventListener('scroll', handleSwitch);
    };
  });
  return { isShows, isDisappear };
};

export default useText;
