import React, { useContext, useEffect } from 'react';
import { ButtonContext } from '../../contexts/ButtonContext';

const Aboutpage = () => {
  const [button, setButton] = useContext(ButtonContext);

  useEffect(() => {
    const changeButton = () => {
      if (button.bt2 !== 'active item') {
        setButton({
          bt1: 'item',
          bt2: 'active item',
          bt3: 'item',
        });
      }
    };
    changeButton();
  }, [button, setButton]);

  return <div>Coming Soon</div>;
};

export default Aboutpage;
