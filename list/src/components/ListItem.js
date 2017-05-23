import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common'
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component {
    renderDescription() {
        const { library, selectedLibraryId } = this.props;

        if (library.id === selectedLibraryId) {
            return <Text>{library.description}</Text>
        }
    }

    render() {
        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={style.title}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
};

const mapStateToProps = state => {
    return { selectedLibraryId: state.selectedLibraryId };
};

const style = {
    title: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default connect(mapStateToProps, actions)(ListItem);