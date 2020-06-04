import React, { Component } from 'react';
import firebase from '../../config/fbConfig';

class SignIn extends Component {
    state = {
        email: '',
        password: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleLogin = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            console.log(error);
        })

    }
    handleSignUp = (e) => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            console.log(error);
        });
    }
    render() {
        return (
            <div>
                <nav>
                    <div class="nav-wrapper grey darken-4">
                        <a href="#" class="brand-logo center white-text"><i className=" large material-icons amber-text darken-3-text">bubble_chart</i>DCverse</a>

                    </div>
                </nav>
                <div className="container center">
                    <form className="">
                        <b> <h4 className="grey-text text-darken-4 center-align ">Welcome to DCverse</h4></b>
                        <h6 className="grey-text text-darken-4 left-align">Please sign in to continue</h6>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange} />
                        </div>
                        <div className="row">
                            <div className="col s12 l6">
                                <div className="input-field">
                                    <button onClick={this.handleLogin} className="btn grey darken-4 amber-text">Login</button>
                                </div>
                            </div>
                            <div className="col s12 l6">
                                <div className="input-field">
                                    <button onClick={this.handleSignUp} className="btn grey darken-4 amber-text">SignUp</button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default SignIn;