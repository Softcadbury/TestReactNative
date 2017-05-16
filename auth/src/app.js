import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component {
    state = { loggedIn: false };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'xxxx',
            authDomain: 'xxxx',
            databaseURL: 'xxxx',
            projectId: 'xxxx',
            storageBucket: 'xxxx',
            messagingSenderId: 'xxxx'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    logOut() {
        firebase.auth().signOut();
    }

    renderContent() {
        if (this.state.loggedIn) {
            return (
                <Card>
                    <CardSection>
                        <Button onPress={this.logOut.bind(this)}>
                            Log out
                        </Button>
                    </CardSection>
                </Card>
            );
        }

        return <LoginForm />
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication'></Header>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
