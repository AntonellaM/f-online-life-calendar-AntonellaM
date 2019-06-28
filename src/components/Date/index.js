import React from 'react';

const Date = (props) => {
  console.log('date dailyregister', props.dateRegister)
  return (
    <div>
      <p>{props.dateRegister.date}</p>
      <p>{props.dateRegister.face}</p>
      <p>{props.dateRegister.message}</p>
    </div>
  );
}
 
export default Date;