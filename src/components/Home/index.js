import React from 'react';
import { Link } from 'react-router-dom';
import Date from '../Date';

const Home = (props) => {
  console.log('home moodregister', props.moodRegister)
  return (
    <React.Fragment>
      <header><Link to="/add-date"><button>Añadir</button></Link></header>
      <main>
        {props.moodRegister
        ?
        <ul>{props.moodRegister.map(dailyRegister => <li><Date dateRegister={dailyRegister}/></li>)}</ul>
        :
        <p>No hay datos</p>
        }
      </main>
    </React.Fragment>
  );
}

export default Home;