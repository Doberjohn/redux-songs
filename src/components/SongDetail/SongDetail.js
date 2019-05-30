import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongDetail extends Component {

    render() {        
        const { song } = this.props;

        if (!song) {
            return <div>Select a song</div>
        }

        return (
            <div>
                <h3>Details for:</h3>
                <p>
                    Title: {song.title}
                </p>
                <p>
                    Duration: {song.duration}
                </p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        song: state.selectedSong
    };
}

export default connect(mapStateToProps)(SongDetail);