import React from 'react';
import './styles.scss';

const Date = (props) => {
  return (
    <div className="daily-register__container">
      <p className="daily-register__date">{props.dateRegister.date}</p>
      <p className="daily-register__face">{props.dateRegister.face}</p>
      <p className="daily-register__message">{props.dateRegister.message}</p>
    </div>
  );
}
 
export default Date;