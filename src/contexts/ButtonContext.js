import React, { useState } from 'react';

export const ButtonContext = React.createContext();

export const ButtonProvider = ({ children }) => {
  const [button, setButton] = useState({
    bt1: 'item',
    bt2: 'item',
  });

  return <ButtonContext.Provider value={[button, setButton]}>{children}</ButtonContext.Provider>;
};
