import React, { createContext, useState, useEffect } from 'react';
import firebase from '../config/fbConfig'

export const HomeContext = createContext();

const HomeContextProvider = (props) => {
    const [movies, setmovies] = useState([]);

    useEffect(() => {
        firebase.firestore()
            .collection('movies')
            .onSnapshot((snapshot) => {
                const Newmovies = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setmovies(Newmovies)
            })
    }, [])

    return (
        <HomeContext.Provider value={{ movies }}>
            {props.children}
        </HomeContext.Provider>
    );
}

export default HomeContextProvider;
