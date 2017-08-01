import React, { Component } from 'react';
import { Text, View, ScrollView, Image, Dimensions } from 'react-native';

import Card from './components/Card';
import CardSection from './components/CardSection';

export default class App extends Component {
    state = {
        users: [],
        currentPage: 0,
        isLoading: false,
        areAllLoaded: false
    };

    fetchUsers() {
        if (this.state.isLoading || this.state.areAllLoaded) {
            return;
        }

        this.setState(
            {
                currentPage: this.state.currentPage + 1,
                isLoading: true
            },
            _ => {
                fetch('https://reqres.in/api/users?page=' + this.state.currentPage).then(response => response.json()).then(responseData => {
                    console.log( this.state.currentPage , responseData.total_pages);

                    this.setState({
                        users: [...this.state.users, ...responseData.data],
                        isLoading: false,
                        areAllLoaded: this.state.currentPage == responseData.total_pages
                    });
                });
            }
        );
    }

    componentWillMount() {
        this.fetchUsers();
    }

    onScroll(e) {
        var windowHeight = Dimensions.get('window').height;
        var height = e.nativeEvent.contentSize.height;
        var offset = e.nativeEvent.contentOffset.y;
        if (windowHeight + offset >= height) {
            this.fetchUsers();
        }
    }

    renderUsers() {
        return this.state.users.map(user =>
            <Card key={user.id}>
                <CardSection>
                    <Image style={style.image} source={{ uri: user.avatar }} />
                </CardSection>
                <CardSection>
                    <View key={user.id}>
                        <Text style={style.name}>
                            {user.first_name} {user.last_name}
                        </Text>
                    </View>
                </CardSection>
            </Card>
        );
    }

    render() {
        return (
            <View style={style.main}>
                <ScrollView onScroll={this.onScroll.bind(this)}>
                    {this.renderUsers()}
                </ScrollView>
            </View>
        );
    }
}

const style = {
    main: {
        flex: 1,
        paddingBottom: 10
    },
    image: {
        height: 200,
        flex: 1,
        width: null
    },
    name: {
        margin: 10,
        fontSize: 20
    }
};
