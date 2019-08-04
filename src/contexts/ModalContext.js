import React, { useState } from 'react';

export const ModalContext = React.createContext();

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({
    contact: false,
    email: false,
  });

  return (
    <ModalContext.Provider value={[modal, setModal]}>
      {children}
    </ModalContext.Provider>
  );
};
