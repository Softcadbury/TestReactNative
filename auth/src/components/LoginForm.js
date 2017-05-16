import firebase from 'firebase';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { isLoading: false, email: '', password: '', error: '' };

    login() {
        const { email, password } = this.state;
        this.setState({ isLoading: true, error: '' });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this))
            });
    }

    onLoginFail() {
        this.setState({ isLoading: false, error: 'Authentication failed.' });
    }

    onLoginSuccess() {
        this.setState({ isLoading: false, email: '', password: '', error: '' });
    }

    renderButton() {
        if (this.state.isLoading) {
            return <Spinner size="small" />;
        }

        return (
            <Button onPress={this.login.bind(this)}>
                Log in
            </Button>
        );
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
                <Text style={styles.error}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
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
