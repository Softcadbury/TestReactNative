import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const viewStyle = {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
};

const textStyle = {
    fontSize: 20
};

export default Header;
