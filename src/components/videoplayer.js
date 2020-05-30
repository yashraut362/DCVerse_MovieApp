import React, { Component } from 'react';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'


const VideoPlayer = () => {
    return (
        <Player
            playsInline
            poster="/assets/poster.png"
            src="https://firebasestorage.googleapis.com/v0/b/quantum-toolbox-276008.appspot.com/o/DC%2F1%2FSuicide.Squad%2FSuicide.Squad.2016.720p.English.Hindi.Subs.MoviesFlixPro.in.mkv?alt=media&token=76e5ae50-48e6-4dcc-9bba-5a4bd325ed89"
            fluid={false}
            width={786}
            height={432}
        />
    );
}

export default VideoPlayer;