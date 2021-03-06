import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;


    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image
                        style={styles.thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={styles.HeaderContentStyle}>
                    <Text style={styles.HeaderTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>

            </CardSection>
            <CardSection>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: image }}
                />
            </CardSection>
            <CardSection>
                <Button onPress1={() => Linking.openURL(url)}>
                    Buy Now!
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    HeaderContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    HeaderTextStyle: {
        fontSize: 20
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};
export default AlbumDetail;