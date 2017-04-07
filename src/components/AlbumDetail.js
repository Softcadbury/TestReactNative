import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
    const { title, artist } = album;

    return (
        <Card>
            <CardSection>
                <View style={styles.headerContent}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContent: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
};

export default AlbumDetail;
