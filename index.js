//import library
import React from 'react';
import { AppRegistry, View } from 'react-native';
//import App from './App';
import { name as appName } from './app.json';
import Header from './AllSrc/Components/header';
import AlbumList from './AllSrc/Components/AlbumList';
//create component
const App = () => (
    <View>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);
//render it to the divice
AppRegistry.registerComponent(appName, () => App);
