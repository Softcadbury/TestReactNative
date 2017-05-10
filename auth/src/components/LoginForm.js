import firebase from 'firebase';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '' };

    login() {
        const { email, password } = this.state;
        this.setState({ error: 'what' });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({ error: 'Authentication failed.' });
                    })
            });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="user@gmail.com"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })} />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        secureTextEntry />
                </CardSection>
                <CardSection>
                    <Text style={styles.error}>
                        {this.state.error}
                    </Text>
                    <Button onPress={this.login.bind(this)}>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    error: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center'
    }
};

export default LoginForm;
