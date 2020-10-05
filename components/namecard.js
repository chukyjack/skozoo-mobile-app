import React, {Component} from 'react';
import {
    Avatar,
    Title,
    Caption,
} from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import StarRating from './star-ratings';

export const NameCard = ({source, name}) => {
  const ratings = {
    ratings: 3,
    views: 556,
  };
  return (
    <View style={{flexDirection: 'row', marginTop: 15}}>
      <Avatar.Image
        source={source}
        size={50}
      />
      <View style={{marginLeft: 15, flexDirection: 'column'}}>
        <Title style={styles.title}>{name}</Title>
        <StarRating ratingObj={ratings} />
      </View>
    </View>
);
};

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        color: '#1E3152',
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
