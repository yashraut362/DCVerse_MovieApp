import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cards from '../components/cards';
import HomeContextProvider from '../contexts/HomeContext';

class Home extends Component {
    state = {}
    render() {
        return (
            <div className="grey darken-4 ">
                <Navbar />
                <div className="container home">
                    <div className="row">
                        <HomeContextProvider>
                            <Cards />
                        </HomeContextProvider>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;