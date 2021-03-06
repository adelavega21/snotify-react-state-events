import React from 'react';
import SongList from './SongList';
import Queue from './Queue';

const MainContainer = props => {
    
    return (
        <div className="simple-flex-row top">
            <SongList songData={props.songData}/> {}
            <Queue /> {/** TODO: What props do I need? */}
        </div>
    )
}

export default MainContainer;