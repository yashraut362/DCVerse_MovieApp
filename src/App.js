import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeRedirector from './pages/HomeRedirector';
import SignIn from './components/auth/AuthPage';
import fire from './config/fbConfig';



class App extends Component {
  state = {
    user: {},
  }
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {this.state.user ? (<HomeRedirector />) : (<SignIn />)}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;