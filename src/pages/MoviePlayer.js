import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'video-react/dist/video-react.css';
import axios from 'axios';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'


class MoviePlayer extends Component {
    state = {
        post: null
    }
    componentDidMount() {
        let id = this.props.match.params.Play_id;
        axios.get("https://firestore.googleapis.com/v1/projects/dcverse-c639f/databases/(default)/documents/movies/" + id)
            .then(res => {
                this.setState({
                    post: res.data
                })
            })
    }
    //  <h4 className="center">{this.state.post.fields.title.stringValue}</h4>
    render() {
        const post = this.state.post ? (
            <div className="post container">
                <div className="row">
                    <div className="col s12 l6">
                        <Player
                            playsInline
                            poster="/assets/poster.png"
                            src={this.state.post.fields.link.stringValue}
                            fluid={false}
                            width={786}
                            height={432}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l6">
                        <div className="col s12 l6">
                            <div class="card">
                                <div class="card-image">
                                    <img src={this.state.post.fields.img.stringValue} alt="poster" />
                                </div>
                                <div class="card-content">
                                    <b><div class="card-title">{this.state.post.fields.title.stringValue}</div></b>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 l3">

                        </div>
                    </div>
                </div>
            </div>
        ) : (null)

        return (
            <div className="grey darken-2">
                <Navbar />
                {post}
                <Footer />
            </div>
        );
    }
}

export default MoviePlayer;