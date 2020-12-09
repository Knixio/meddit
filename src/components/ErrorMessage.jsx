import React from 'react';

const ErrorMessage = (props) => {
  return (
    <div>
      <p>{props.errorMessage}</p>
      <img
        className="error-img"
        src={
          'https://upload.wikimedia.org/wikipedia/commons/5/56/Bsodwindows10.png'
        }
        alt="error-img"
      />
    </div>
  );
};

export default ErrorMessage;
