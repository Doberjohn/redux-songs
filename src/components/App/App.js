import React from 'react';
import SongList from '../SongList/SongList';
import SongDetail from '../SongDetail/SongDetail';

const App = () => {
    return (
        <div className="ui container ui grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    )
}

export default App;