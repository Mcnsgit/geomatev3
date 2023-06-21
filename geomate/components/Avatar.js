import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Avatar = ({ source }) => (
    <Image style={styles.avatar} source={source} />
);

const styles = StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
});

export default Avatar;
