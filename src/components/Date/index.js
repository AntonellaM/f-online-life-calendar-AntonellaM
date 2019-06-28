import React from 'react';

const Date = (props) => {
  return (
    <div>
      <p>{props.dateRegister.date}</p>
      <p>{props.dateRegister.face}</p>
      <p>{props.dateRegister.message}</p>
    </div>
  );
}
 
export default Date;