import React, { Component } from 'react';
import { View } from 'react-native';

import Users from './components/Users';

export default class App extends Component {
    render() {
        return (
            <View style={style.main}>
                <Users />
            </View>
        );
    }
}

const style = {
    main: {
        flex: 1,
        paddingBottom: 10
    }
};
