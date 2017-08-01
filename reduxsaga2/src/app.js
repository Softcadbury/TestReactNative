import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

import Card from './components/Card';
import CardSection from './components/CardSection';
import Button from './components/Button';

export default class App extends Component {
    state = {
        users: [],
        isLoading: false,
        currentPage: 0
    };

    fetchUsers() {
        if (this.state.isLoading) {
            return;
        }

        this.setState(
            {
                isLoading: true,
                currentPage: this.state.currentPage + 1
            },
            () => {
                console.log(this.state.isLoading);
                console.log(this.state.currentPage);

                fetch(
                    'https://reqres.in/api/users?page=' + this.state.currentPage
                )
                    .then(response => response.json())
                    .then(responseData => {
                        this.setState({
                            isLoading: false,
                            users: [
                                ...this.state.users,
                                ...responseData.data,
                                ...responseData.data,
                                ...responseData.data,
                                ...responseData.data
                            ]
                        });
                    });
            }
        );
    }

    componentWillMount() {
        this.fetchUsers();
    }

    renderUsers() {
        return this.state.users.map(user =>
            <Card>
                <CardSection>
                    <View key={user.id}>
                        <Text>
                            {user.first_name}
                        </Text>
                        <Text>
                            {user.last_name}
                        </Text>
                    </View>
                </CardSection>
            </Card>
        );
    }

    render() {
        return (
            <View style={style.main}>
                <Button
                    style={style.button}
                    onPress={this.fetchUsers.bind(this)}
                >
                    Load
                </Button>
                <ScrollView>
                    {this.renderUsers()}
                </ScrollView>
            </View>
        );
    }
}

const style = {
    main: {
        flex: 1,
        paddingTop: 20
    },
    button: {
        height: 30
    }
};
