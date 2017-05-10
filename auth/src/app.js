import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'xxxx',
            authDomain: 'xxxx',
            databaseURL: 'xxxx',
            projectId: 'xxxx',
            storageBucket: 'xxxx',
            messagingSenderId: 'xxxx'
        });
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication'></Header>
                <LoginForm />
            </View>
        );
    }
}

export default App;
