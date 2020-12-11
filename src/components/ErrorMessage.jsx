import React from 'react';

const ErrorMessage = (props) => {
  return (
    <div>
      <p>{props.errorMessage}</p>
      <img
        className="error-img"
        src={'https://i.imgur.com/GpY6bTJ.png'}
        alt="error-img"
      />
    </div>
  );
};

export default ErrorMessage;
