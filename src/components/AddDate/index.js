import React from 'react';
import { Link } from 'react-router-dom';

const AddDate = (props) => {
  return (
    <main>
      <Link to="/"><button onClick={props.saveForm}>Guardar</button></Link>
      <Link to="/"><button onClick={props.clearForm}>Cancelar</button></Link>
      <form action="">
        <label>Fecha</label>
        <input
          type="date"
          name="date"
          value={props.form.date}
          onChange={props.updateForm}
        />
        <label>Feliz</label>
        <input
          type="radio"
          name="face"
          value=":)"
          checked={props.form.face === ':)'}
          onChange={props.updateForm}
        />:)
        <label>Triste</label>
        <input
          type="radio"
          name="face"
          value=":("
          checked={props.form.face === ':('}
          onChange={props.updateForm}
        />:(
        <label>Comentarios</label>
        <input
          type="textarea"
          name="message"
          value={props.form.message}
          onChange={props.updateForm}
        />
      </form>
    </main>
  );
}

export default AddDate;