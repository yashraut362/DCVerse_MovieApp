import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import fire from '../config/fbConfig';


class Movierequest extends Component {


    state = {
        moviename: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handlesubmit = (e) => {
        e.preventDefault();
        const db = fire.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        const userRef = db.collection("movierequests").add({
            moviename: this.state.moviename
        });
        this.setState({
            moviename: ''
        })
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="row">
                    <div className="col s12 l6">
                        <form className="transparent" onSubmit={this.handlesubmit}>
                            <h5>Submit Request for Movie Here</h5>
                            <div className="input-field">
                                <label htmlFor="moviename">MovieName</label>
                                <input type="text" id="moviename" required onChange={this.handleChange} value={this.state.moviename} />
                            </div>
                            <div className="row">
                                <div className="col s12 l6">
                                    <button className="btn pink">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col s12 l6">
                        <h4>Toast here</h4>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Movierequest;

