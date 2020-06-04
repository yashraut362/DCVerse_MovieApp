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
                    <div className="col s12 l6 hide-on-med-and-down">
                        <Player
                            playsInline
                            poster="/assets/poster.png"
                            src={this.state.post.fields.link.stringValue}
                            fluid={false}
                            width={786}
                            height={432}
                        />
                    </div>
                    <div className="col s12 l6 hide-on-large-only">
                        <Player
                            playsInline
                            poster="/assets/poster.png"
                            src={this.state.post.fields.link.stringValue}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l11">
                        <div class="card horizontal">
                            <div class="card-image">
                                <img src={this.state.post.fields.img.stringValue} alt="poster" />
                            </div>
                            <div class="card-stacked">
                                <div class="card-content">
                                    <h4>{this.state.post.fields.title.stringValue}</h4>
                                    <p>{this.state.post.fields.desc.stringValue}</p>
                                </div>
                                <div class="card-action">
                                    <a href={this.state.post.fields.link.stringValue}>Download</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        ) : (null)

        return (
            <div className="grey darken-4">
                <Navbar />
                {post}
                <Footer />
            </div>
        );
    }
}

export default MoviePlayer;
