import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Favourites from './Favourites';
import Movierequest from './Movierequest';
import Home from './Home'
import MoviePlayer from './MoviePlayer';

class HomeRedirector extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact path="/" component={Home} />
                    <Route path="/Favourites" component={Favourites} />
                    <Route path="/Movierequest" component={Movierequest} />
                    <Route path="/movie/:Play_id" component={MoviePlayer} />
                </BrowserRouter>
            </div>
        );
    }
}

export default HomeRedirector;