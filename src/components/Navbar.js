import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import fire from '../config/fbConfig';

class Navbar extends Component {
    componentDidMount() {
        M.Sidenav.init(this.Sidenav);
    }

    render() {
        return (
            <div>
                <nav class="nav-wrapper grey darken-4">
                    <div class="container">
                        <a class="brand-logo white-text"><i className=" large material-icons amber-text darken-3-text">bubble_chart</i>DCverse</a>
                        <a class="sidenav-trigger" data-target="mobile-links">
                            <i class="material-icons">menu</i>
                        </a>
                        <ul class="right hide-on-med-and-down ">
                            <li><Link to="/" className=" amber-text darken-3-text">Home</Link></li>
                            <li><Link to="/Favourites" className=" amber-text darken-3-text">Favourites</Link></li>
                            <li><Link to="/Movierequest" className=" amber-text darken-3-text">Request Movies</Link></li>
                            <li><div class="container">
                                <a onClick={() => fire.auth().signOut()} class="btn-floating yellow darken-3 pulse "><i class="material-icons">exit_to_app</i></a>
                            </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <ul class="sidenav grey darken-3" id="mobile-links" ref={Sidenav => {
                    this.Sidenav = Sidenav
                }}>
                    <li>
                        <a href="#" class="grey darken-4">
                            <i class="material-icons amber-text darken-3-text">bubble_chart</i>
                            <span class="white-text">DCVerse</span>
                        </a>
                    </li>

                    <li><Link class="sidenav-close" to="/" className=" amber-text darken-3-text"><i class="material-icons amber-text">home</i>Home</Link></li>
                    <li><Link class="sidenav-close" to="/Favourites" className=" amber-text darken-3-text"><i class="material-icons amber-text">favorite_border</i>Favourites</Link></li>
                    <li><Link class="sidenav-close" to="/Movierequest" className=" amber-text darken-3-text"><i class="material-icons amber-text">router</i>Request Movies</Link></li>
                    <li><Link className=" amber-text darken-3-text" onClick={() => fire.auth().signOut()}><i class="material-icons amber-text">exit_to_app</i>Logout</Link></li>
                </ul>
            </div>
        )
    }
}
export default withRouter(Navbar);