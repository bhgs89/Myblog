import React, { useContext, useEffect } from 'react';
import Maintext from './Maintext';
import SubContainer from './SubContainer';
import { ButtonContext } from '../../contexts/ButtonContext';

const Mainpage = () => {
  const [button, setButton] = useContext(ButtonContext);

  useEffect(() => {
    const changeButton = () => {
      if (button.bt1 !== 'active item') {
        setButton({
          bt1: 'active item',
          bt2: 'item',
        });
      }
    };
    changeButton();
  }, [button, setButton]);

  return (
    <div>
      <Maintext />
      <SubContainer />
    </div>
  );
};

export default Mainpage;
