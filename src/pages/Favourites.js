import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Favourites extends Component {
    render() {
        return (
            <div className='grey darken-4'>
                <Navbar />
                <div className="container ">
                    <div className="row hide-on-med-and-down" >
                        <div className="col s12 l6">
                            <img src="https://media.giphy.com/media/Yj6d4OMmDV3bnYtOow/giphy.gif" alt="img" />
                        </div>
                        <div className="col s12 l6">
                            <h4 className="amber-text darken-4-text right-align">
                                Work In Progress
                            </h4>
                        </div>
                    </div>
                    <div className="row hide-on-large-only" >
                        <div className="col s12 l6 center">
                            <img src="https://media.giphy.com/media/Yj6d4OMmDV3bnYtOow/giphy.gif" alt="img" height="140px" />
                        </div>
                        <div className="col s12 l6">
                            <h4 className="amber-text darken-4-text center-align">
                                Work In Progress
                            </h4>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        );
    }
}

export default Favourites;