import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VideoPlayer from '../components/videoplayer';


class MoviePlayer extends Component {
    state = {}
    render() {
        return (
            <div className="grey darken-2">
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <VideoPlayer />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l6 s12">
                            <div className="col l3 s6">Poster Here</div>
                            <div className="col l3 s6">Info Here</div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default MoviePlayer;