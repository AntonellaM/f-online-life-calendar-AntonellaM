import React from 'react';
import { Link } from 'react-router-dom';

const AddDate = (props) => {
  return (
    <main>
      <Link to="/"><button>Guardar</button></Link>
      <Link to="/"><button>Cancelar</button></Link>
      <form action="">
        <input type="date"/>
        <input type="radio" value=":)"/>
        <input type="radio" value=":("/>
        <input type="textarea"/>
      </form>
    </main>
  );
}

export default AddDate;