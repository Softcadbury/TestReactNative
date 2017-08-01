import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';
import Users from './components/Users';

export default class App extends Component {
    render() {
        const sagaMiddleware = createSagaMiddleware();
        const store = createStore(reducers);//, applyMiddleware(sagaMiddleware));
       // sagaMiddleware.run(sagas);

        return (
            <Provider store={store}>
                <View style={style.main}>
                    <Users />
                </View>
            </Provider>
        );
    }
}

const style = {
    main: {
        flex: 1,
        paddingBottom: 10
    }
};
