import React, { useRef, useState, useContext, useEffect } from 'react';

const MainPageContext = React.createContext();

const MainPageProvider = ({ children }) => {
  const firstRef = useRef();
  const messageA = useRef();
  const messageB = useRef();
  const messageC = useRef();
  const messageD = useRef();
  // hooks

  return (
    <MainPageContext.Provider
      value={{
        firstRef,
        messageA,
        messageB,
        messageC,
        messageD,
      }}
    >
      {children}
    </MainPageContext.Provider>
  );
};

export default MainPageContext;

export { MainPageProvider };
export const useGlobalContext = () => {
  return useContext(MainPageContext);
};
