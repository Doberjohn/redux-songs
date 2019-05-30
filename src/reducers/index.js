import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'Memory remains',
            duration: '3:12'
        },
        {
            title: 'Darkside of Aquarius',
            duration: '2:43'
        },
        {
            title: 'Fear of the dark',
            duration: '3:33'
        },
        {
            title: 'Starway to heaven',
            duration: '3:52'
        }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});