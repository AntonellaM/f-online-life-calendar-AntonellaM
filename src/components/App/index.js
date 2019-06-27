import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import AddDate from '../AddDate';
import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moodRegister: [],
    }
  }

  saveDate(event) {
    console.log(event)
    // const newRegister = {
    //   date: event.currentTarget.date,
    //   face: event.currentTarget.face,
    //   message: event.currentTarget.message
    // }
    // this.setState(prevState => {
    //   return {...prevState.moodRegister.concat(newRegister)}
    // });
  }
  
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" render={routerprops => (
            <Home moodRegister={this.props.moodRegister}/>
          )}/>
          <Route path="/add-date" component={AddDate}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
