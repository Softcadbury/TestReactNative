import React, { Component } from 'react';
import { Text, ScrollView, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import { loadUsers } from '../actions'
import Card from './Card';
import CardSection from './CardSection';

class Users extends Component {
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

        this.props.loadUsers();

        this.setState(
            {
                currentPage: this.state.currentPage + 1,
                isLoading: true
            },
            _ => {
                fetch('https://reqres.in/api/users?page=' + this.state.currentPage).then(response => response.json()).then(responseData => {
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
                    <Text style={style.name}>
                        {user.first_name} {user.last_name}
                    </Text>
                </CardSection>
            </Card>
        );
    }

    render() {
        return (
            <ScrollView onScroll={this.onScroll.bind(this)}>
                {this.renderUsers()}
            </ScrollView>
        );
    }
}

const style = {
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

const mapStateToProps = state => {
    return { users: state.users };
};

export default connect(mapStateToProps, { loadUsers })(Users);
