import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, UIManager } from 'react-native';
import { CardSection } from './common'
import * as actions from '../actions';
import { connect } from 'react-redux';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>
                        {library.description}
                    </Text>
                </CardSection>);
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

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
};

const style = {
    title: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default connect(mapStateToProps, actions)(ListItem);