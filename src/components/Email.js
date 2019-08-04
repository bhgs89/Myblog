import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

// Style
const EmailContainer = styled.div`
  z-index: 300;
  width: 500px;
  background-color: grey;
  position: fixed;
  left: 50%;
  top: 50%;
  height: 400px;
  width: 600px;
  transform: translate(-50%, -50%);
  opacity: 0.95;
  border: 2px solid black;
  border-radius: 25px;
`;
const EmailDiv = styled.div`
  position: absolute;
  width: 500px;
  height: 330px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
//const EmailInput = styled.input``;

const Email = () => {
  return ReactDOM.createPortal(
    <EmailContainer>
      <EmailDiv>
        <div className="ui two column centered grid">
          <div className="column">
            <div className="ui input focus">
              <input type="text" placeholder="Name *" />
            </div>
          </div>
          <div className="column">
            <div className="ui input focus">
              <input type="text" placeholder="Email *" />
            </div>
          </div>
          <div className="ui one column centered row">
            <div className="ui input focus">
              <input type="text" placeholder="Subject" />
            </div>
          </div>
        </div>
      </EmailDiv>
    </EmailContainer>,
    document.querySelector('#email'),
  );
};

export default Email;
