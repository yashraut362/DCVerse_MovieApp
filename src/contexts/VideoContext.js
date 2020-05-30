import React from 'react';

export const VideoContext = createContext();

const VideoContextProvider = (props) => {
    const [videos, setvideos] = useState([

    ]);
    return (
        <VideoContextProvider value={{ videos }}>
            {props.children}
        </VideoContextProvider>
    );
}

export default VideoContextProvider;