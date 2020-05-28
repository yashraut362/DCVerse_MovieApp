import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Movierequest from './pages/Movierequest';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/Favourites" component={Favourites} />
        <Route path="/Movierequest" component={Movierequest} />
        <Route path="/Signin" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
      </div>
    </BrowserRouter>
  );
}

export default App;
