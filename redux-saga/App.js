import React from 'react';
import { Text, View, ScrollView } from 'react-native';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';

// import reducers from './src/reducers';
// import sagas from './src/sagas';
import Card from './src/components/Card';
import CardSection from './src/components/CardSection';

export default class App extends React.Component {
    state = {
        users: [],
        isLoading: false,
        currentPage: 1
    }

    componentWillMount() {
        fetch('https://reqres.in/api/users?page=2')
            .then((response) => response.json())
            .then((responseData) => {
                console.log('hello')
                this.setState({
                    users: [
                        ...this.state.users,
                        ...responseData.data,
                        ...responseData.data],
                });
            });
    }

    renderUsers() {
        return this.state.users.map(user =>
            <Card>
                <CardSection>
                    <View key={user.id}>
                        <Text>{user.first_name}</Text>
                        <Text>{user.last_name}</Text>
                    </View>
                </CardSection>
            </Card>
        );
    }

    render() {
        return (
            <View style={style.main}>
                <ScrollView>
                    {this.renderUsers()}
                </ScrollView>
            </View>
        );
    }

    //  render() {
    // const sagaMiddleware = createSagaMiddleware()
    // const store = createStore(reducers, applyMiddleware(sagaMiddleware))
    // sagaMiddleware.run(sagas)

    // return (
    //     <View style={style.main}>
    //         <Provider store={store}>
    //             <Text>Hello</Text>
    //         </Provider>
    //     </View>
    // );
    //  }
}

const style = {
    main: {
        flex: 1,
        paddingTop: 20
    }
}
