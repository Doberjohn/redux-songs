import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../../actions';

class SongList extends Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button onClick={() => this.props.selectSong(song)} className="ui button primary">
                            Select
                        </button>
                    </div>

                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }


    render() {
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = state => {
    return {
        songs: state.songs
    };
}

// The following syntax is plain Javascript syntax.
// It means that the connect() function returns another function
// which then is called by passing the SongList component as a parameter.
export default connect(mapStateToProps, { selectSong })(SongList);