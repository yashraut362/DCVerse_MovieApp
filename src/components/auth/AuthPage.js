import React, { Component } from 'react';
import fire from '../../config/fbConfig';

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
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            console.log(error);
        })

    }
    handleSignUp = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            console.log(error);
        });
    }
    render() {
        return (
            <div className="container center">
                <form className="transparent">
                    <h5 className="grey-text text-darken-3">Welcome To DCverse~</h5>
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
                                <button onClick={this.handleLogin} className="btn">Login</button>
                            </div>
                        </div>
                        <div className="col s12 l6">
                            <div className="input-field">
                                <button onClick={this.handleSignUp} className="btn">SignUp</button>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}

export default SignIn;