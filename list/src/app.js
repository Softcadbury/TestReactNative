import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Card, CardSection, Spinner } from './components/common';

class App extends Component {
    render() {
        return (
            <View>
                <Header headerText='Authentication'></Header>
            </View>
        );
    }
}

export default App;
