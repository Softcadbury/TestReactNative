import React, { Component } from 'react';
import { Text, ScrollView, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import { loadUsers } from '../actions';
import Card from './Card';
import CardSection from './CardSection';

class Users extends Component {
    fetchUsers() {
        if (this.props.isLoading || this.props.areAllLoaded) {
            return;
        }

        this.props.loadUsers(this.props.currentPage);
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
        return this.props.users.map(user =>
            <Card key={user.id + user.first_name}>
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
    const { users, currentPage, isLoading, areAllLoaded } = state.usersReducer;
    return { users, currentPage, isLoading, areAllLoaded };
};

export default connect(mapStateToProps, { loadUsers })(Users);
