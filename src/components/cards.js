import React, { useContext } from 'react';
import { HomeContext } from '../contexts/HomeContext';
import { Link } from 'react-router-dom';

const Cards = () => {
    const { movies } = useContext(HomeContext);
    return (
        <div>  {movies.map(movie => {
            return (
                <div>
                    <div className="col s12 l3 offset-s5 hide-on-med-and-down">
                        <div class="card" key={movie.id}>
                            <div class="card-image">
                                <img src={movie.img} alt="poster" />
                                <a href="#" class="halfway-fab btn-floating amber darken-3 pulse">
                                    <i class="material-icons">favorite</i>
                                </a>
                            </div>
                            <div class="card-content">
                                <div class="card-title">
                                    <div className=" black-text">
                                        <p>{movie.title}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-action">
                                <Link to={'/movie/' + movie.id}><span>Watch</span></Link>
                                <a href={movie.link}>Download</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 hide-on-large-only">
                        <div class="card" key={movie.id}>
                            <div class="card-image">
                                <img src={movie.img} alt="poster" />
                                <a href="#" class="halfway-fab btn-floating  amber darken-3 pulse">
                                    <i class="material-icons">favorite</i>
                                </a>
                            </div>
                            <div class="card-content">
                                <div class="card-title">
                                    <div className=" black-text">
                                        <p>{movie.title}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-action">
                                <Link to={'/movie/' + movie.id}><span>Watch</span></Link>
                                <a href={movie.link}>Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        }</div>
    )
}

export default Cards;