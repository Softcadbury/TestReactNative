import React, { Component } from 'react';
import { View } from 'react-native'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm'

export default class App extends Component {
    componentWillMount() {
        var config = {
            apiKey: "xxxxxxxx",
            authDomain: "xxxxxxxx",
            databaseURL: "xxxxxxxx",
            projectId: "xxxxxxxx",
            storageBucket: "xxxxxxxx",
            messagingSenderId: "xxxxxxxx"
        };

        firebase.initializeApp(config);
    }

    render() {
        return (
            <View style={style.main}>
                <Provider store={createStore(reducers)}>
                    <LoginForm />
                </Provider>
            </View>
        );
    }
}

const style = {
    main: {
        flex: 1,
        paddingTop: 20
    }
}