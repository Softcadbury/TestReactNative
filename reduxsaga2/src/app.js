import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import Users from './components/Users';

export default class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={style.main}>
                    <Users />
                </View>
            </Provider>
        );
    }
}

const style = {
    main: {
        flex: 1,
        paddingBottom: 10
    }
};
