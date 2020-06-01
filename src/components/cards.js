import React, { useContext } from 'react';
import { HomeContext } from '../contexts/HomeContext';
import { Link } from 'react-router-dom';


const Cards = () => {
    const { movies } = useContext(HomeContext);
    return (
        <div>  {movies.map(movie => {
            return (
                <div className="col s12 l3">
                    <div class="card" key={movie.id}>
                        <div class="card-image">
                            <img src={movie.img} alt="" />
                            <a href="#" class="halfway-fab btn-floating pink pulse">
                                <i class="material-icons">favorite</i>
                            </a>
                        </div>
                        <div class="card-content">
                            <div class="card-title">{movie.title}</div>
                        </div>
                        <div class="card-action">
                            <Link to={'/movie/' + movie.id}><span>Watch</span></Link>
                            <a href={movie.link}>Download</a>
                        </div>
                    </div>
                </div>

            )
        })
        }</div>
    )
}

export default Cards;