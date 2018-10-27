import React, { Component } from 'react';
import { ScrollView, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
class AlbumList extends Component {
    state = { albums: [] };
    componentDidMount() {
        console.log('componentwillmount in AlbumList');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => {
                console.log('ok', response);
                return (
                     this.setState({ albums: response.data })
                    )
            })
            .catch(error => console.log('error', error));
    }
    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }
    render() {
        console.log("this.state.album.length", this.state.albums.length);
        return (
            <ScrollView>
                    {this.renderAlbums()}
            </ScrollView>
        );
    }
}
export default AlbumList;