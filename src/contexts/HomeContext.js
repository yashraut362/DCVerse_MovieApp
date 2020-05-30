import React, { createContext, useState } from 'react';

export const HomeContext = createContext();
const HomeContextProvider = (props) => {
    const [movies, setmovies] = useState([
        { id: 1, title: 'Suicide Squad', img: 'https://movieposters2.com/images/1394504-b.jpg', link: 'https://firebasestorage.googleapis.com/v0/b/quantum-toolbox-276008.appspot.com/o/DC%2F1%2FSuicide.Squad%2FSuicide.Squad.2016.720p.English.Hindi.Subs.MoviesFlixPro.in.mkv?alt=media&token=76e5ae50-48e6-4dcc-9bba-5a4bd325ed89' },
        { id: 2, title: 'Suicide Squad', img: 'https://movieposters2.com/images/1394504-b.jpg', link: 'https://firebasestorage.googleapis.com/v0/b/quantum-toolbox-276008.appspot.com/o/DC%2F1%2FSuicide.Squad%2FSuicide.Squad.2016.720p.English.Hindi.Subs.MoviesFlixPro.in.mkv?alt=media&token=76e5ae50-48e6-4dcc-9bba-5a4bd325ed89' },
        { id: 3, title: 'Suicide Squad', img: 'https://movieposters2.com/images/1394504-b.jpg', link: 'https://firebasestorage.googleapis.com/v0/b/quantum-toolbox-276008.appspot.com/o/DC%2F1%2FSuicide.Squad%2FSuicide.Squad.2016.720p.English.Hindi.Subs.MoviesFlixPro.in.mkv?alt=media&token=76e5ae50-48e6-4dcc-9bba-5a4bd325ed89' },
        { id: 4, title: 'Suicide Squad', img: 'https://movieposters2.com/images/1394504-b.jpg', link: 'https://firebasestorage.googleapis.com/v0/b/quantum-toolbox-276008.appspot.com/o/DC%2F1%2FSuicide.Squad%2FSuicide.Squad.2016.720p.English.Hindi.Subs.MoviesFlixPro.in.mkv?alt=media&token=76e5ae50-48e6-4dcc-9bba-5a4bd325ed89' },
    ])
    return (
        <HomeContext.Provider value={{ movies }}>
            {props.children}
        </HomeContext.Provider>
    );
}

export default HomeContextProvider;
