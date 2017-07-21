import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './src/reducers';
import sagas from './src/sagas';

export default class App extends React.Component {
    render() {
        const sagaMiddleware = createSagaMiddleware()
        const store = createStore(reducers, applyMiddleware(sagaMiddleware))
        sagaMiddleware.run(sagas)

        return (
            <View style={style.main}>
                <Provider store={store}>
                    <Text>Hello</Text>
                </Provider>
            </View>
        );
    }
}

const style = {
    main: {
        flex: 1,
        paddingTop: 20
    }
}
