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
      form: {
        date: '',
        face: '',
        message: ''
      }
    }
    this.updateForm = this.updateForm.bind(this);
    this.saveForm = this.saveForm.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  updateForm(event) {
    const data =  event.currentTarget.value;
    const name =  event.currentTarget.name;
    this.setState(prevState => ({ form: {...prevState.form, [name]: data }}));
  }

  saveForm() {
    const newRegister = this.state.form;
    const newMoodRegister = this.state.moodRegister;
    newMoodRegister.push(newRegister);
    this.setState(prevState => ({ moodRegister: newMoodRegister}), () => this.clearForm());
  }
  
  clearForm() {
    this.setState({ form: {
      date: '',
      face: '',
      message: ''
    }})
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" render={routerprops => (
            <Home moodRegister={this.props.moodRegister}/>
          )}/>
          <Route path="/add-date" render={routerprops => (
            <AddDate 
              form={this.state.form}
              updateForm={this.updateForm}
              saveForm={this.saveForm}
              clearForm={this.clearForm}
            />
          )}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
