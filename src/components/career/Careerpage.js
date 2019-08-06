import React, { useContext, useEffect } from 'react';
import { ButtonContext } from '../../contexts/ButtonContext';

const Careerpage = () => {
  const [button, setButton] = useContext(ButtonContext);

  useEffect(() => {
    const changeButton = () => {
      if (button.bt3 !== 'active item') {
        setButton({
          bt1: 'item',
          bt2: 'item',
          bt3: 'active item',
        });
      }
    };
    changeButton();
  }, [button, setButton]);

  return <div>Coming Soon</div>;
};

export default Careerpage;
