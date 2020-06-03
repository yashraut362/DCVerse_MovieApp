import React, { Component } from 'react';

const Footer = () => {
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: .1,
                borderColor: '#f0a500',
                width: 100

            }}
        />
    );
    return (
        <footer class="page-footer grey darken-4">
            <ColoredLine />
            <div class="container">
                <div class="row">
                    <div class="col s12 l6">
                        <h5 class=" amber-text">About Me</h5>
                        <p>Hello Yash Here , Mobile/Web dev from Mumbai,india</p>
                        <h5 class="amber-text">Technologies/Languages  I'm comfortable with.</h5>
                        <p>Flutter - ReactJs - VueJs - Python - Dart - MaterializeCss -Bootstrap- Git - SQL - Firebase- Mobx - RestApi -</p>
                    </div>
                    <div class="col s12 l4 offset-l2">
                        <h5 class="amber-text">Contact Me</h5>
                        <ul>

                            <li>
                                <a href="https://github.com/yashraut362/" class="grey-text text-lighten-3"><i class="fab fa-github"></i> Github</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/_.yashraut._/" class="grey-text text-lighten-3"><i class="fab fa-instagram"></i> Instagram</a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/yash.raut.1000" class="grey-text text-lighten-3"><i class="fab fa-facebook"></i> Facebook</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/yash-raut-55330715a/" class="grey-text text-lighten-3"><i class="fab fa-linkedin"></i> Linked-In</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="footer-copyright grey darken-3 ">
                <div class="container center-align amber-text">&copy; 2020 Yash Raut</div>
            </div>
        </footer>

    )
}

export default Footer;