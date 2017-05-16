import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component {
    state = { loggedIn: null };

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
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button onPress={this.logOut.bind(this)}>
                                Log out
                            </Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm />
            default:
                return <Spinner size="large" />;
        }
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
