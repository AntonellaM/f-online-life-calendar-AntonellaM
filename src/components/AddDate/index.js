import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const AddDate = (props) => {
  return (
    <main className="add-date__container">
      <form className="add-date__form" action="">
        <div className="add-date__form--date">
          <label htmlFor="date" className="add-date__label">Fecha:</label>
          <input
            className="add-date__input"
            type="date"
            name="date"
            id="date"
            value={props.form.date}
            onChange={props.updateForm}
          />
        </div>
        <div className="add-date__form--mood">
          <p className="add-date__label">Estado:</p>
          <label htmlFor="happy-face" className="visually-hidden">Feliz</label>
          <input
            className="add-date__input add-date__input--radio"
            type="radio"
            name="face"
            id="happy-face"
            value=":)"
            checked={props.form.face === ':)'}
            onChange={props.updateForm}
          />:)
          <label htmlFor="sad-face" className="visually-hidden">Triste</label>
          <input
            className="add-date__input add-date__input--radio"
            type="radio"
            name="face"
            id="sad-face"
            value=":("
            checked={props.form.face === ':('}
            onChange={props.updateForm}
          />:(
        </div>
        {props.form.face === ':)'
        ? 
        <div className="add-date__form--message">
          <label htmlFor="message" className="add-date__label">Mensaje:</label>
          <input
            className="add-date__input"
            type="textarea"
            name="message"
            id="message"
            value={props.form.message}
            onChange={props.updateForm}
          />
        </div>
        : ''
        }
      </form>
      <div className="add-date__buttons">
        <Link to="/"><button className="add-date__button add-date__button--save" onClick={props.saveForm}>Guardar</button></Link>
      <Link to="/"><button className="add-date__button add-date__button--cancel" onClick={props.clearForm}>Cancelar</button></Link>
      </div>
    </main>
  );
}

export default AddDate;