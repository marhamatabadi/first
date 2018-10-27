//import library from making a component
import React from 'react';
import { Text, View, Platform } from 'react-native';
//Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};
const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.9,
        elevation: 20
    },
    textStyle: {
        fontSize: 20
    }
};
//make the component available to other parts of app

export default Header;
