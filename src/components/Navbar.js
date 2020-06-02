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
                        <a  class="brand-logo white-text"><i className=" large material-icons">bubble_chart</i>DCverse</a>
                        <a class="sidenav-trigger" data-target="mobile-links">
                            <i class="material-icons">menu</i>
                        </a>
                        <ul class="right hide-on-med-and-down">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Favourites">Favourites</Link></li>
                            <li><Link to="/Movierequest">Request Movies</Link></li>
                            <li><button onClick={() => fire.auth().signOut()} class="btn-floating red darken-3 pulse"></button></li>

                        </ul>
                    </div>
                </nav>
                <ul class="sidenav" id="mobile-links" ref={Sidenav => {
                    this.Sidenav = Sidenav
                }}>
                    <li>
                        <a href="#" class="grey darken-4">
                            <i class="material-icons white-text">bubble_chart</i>
                            <span class="white-text">DCVerse</span>
                        </a>
                    </li>
                    <li><Link class="sidenav-close" to="/">Home</Link></li>
                    <li><Link class="sidenav-close" to="/Favourites">Favourites</Link></li>
                    <li><Link class="sidenav-close" to="/Movierequest">Request Movies</Link></li>
                </ul>
            </div>
        )
    }
}
export default withRouter(Navbar);