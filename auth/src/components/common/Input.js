import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
    return (
        <View style={style.container}>
            <Text style={style.label}>{label}</Text>
            <TextInput
                style={style.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                autoCorrect={false} />
        </View>
    );
};

const style = {
    input: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        marginRight: 20,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        alignSelf: 'center'
    },
    label: {
        color: 'black',
        fontSize: 18,
        marginLeft: 20,
        flex: 1,
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center'
    }
};

export { Input };