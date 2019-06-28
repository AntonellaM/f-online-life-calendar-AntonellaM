import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Date from '../Date';
import './styles.scss';

const Home = (props) => {
  return (
    <React.Fragment>
      <header className="home__header"><Link to="/add-date"><button className="home__header-button--add"><FontAwesomeIcon icon={faPlus} /></button></Link></header>
      <main className="home__main">
        {props.moodRegister
        ?
        <ul className="mood-list">{props.moodRegister.map(dailyRegister => <li className="mood-item"><Date dateRegister={dailyRegister}/></li>)}</ul>
        :
        <p>No hay datos</p>
        }
      </main>
    </React.Fragment>
  );
}

export default Home;