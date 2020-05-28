import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

class Navbar extends Component {
    componentDidMount() {
        M.Sidenav.init(this.Sidenav);
        let instance = M.Sidenav.getInstance(this.Sidenav);
    }
    render() {
        return (
            <div>
                <nav class="nav-wrapper grey darken-4">
                    <div class="container">
                        <a href="#" class="brand-logo white-text"><i className=" large material-icons">bubble_chart</i>DCverse</a>
                        <a href="#" class="sidenav-trigger" data-target="mobile-links">
                            <i class="material-icons">menu</i>
                        </a>
                        <ul class="right hide-on-med-and-down">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Favourites">Favourites</Link></li>
                            <li><Link to="/Movierequest">Request Movies</Link></li>

                            {/* <li><Link to="/Donation">Donation</Link></li> */}
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

                    {/* <li><a class="sidenav-close" href="/Donation">Donation</a></li> */}
                </ul>
            </div>
        )
    }
}
export default withRouter(Navbar);