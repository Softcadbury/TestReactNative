import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LibraryList from './components/LibraryList';

class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={{ flex: 1 }}>
                    <Header headerText='List'></Header>
                    <LibraryList></LibraryList>
                </View>
            </Provider>
        );
    }
}

export default App;
