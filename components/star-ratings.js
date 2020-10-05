import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

type Props = {
  ratingObj: {
    ratings: number,
    views: number,
  },
};

export default class StarRating extends Component<Props> {
  render() {
    // Recieve the ratings object from the props
    let ratingObj = this.props.ratingObj;
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/star-filled.png')}
        />
        <Image
          style={styles.image}
          source={require('../assets/star-filled.png')}
        />
        <Image
          style={styles.image}
          source={require('../assets/star-filled.png')}
        />
        <Image
          style={styles.image}
          source={require('../assets/star-unfilled.png')}
        />
        <Image
          style={styles.image}
          source={require('../assets/star-unfilled.png')}
        />
        <Text style={styles.text}>({ratingObj.views})</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#FF00FF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 12,
    height: 12,
    marginRight: 1,
  },
  text: {
    fontSize: 10,
    marginLeft: 5,
    marginRight: 10,
    fontWeight: 'normal',
    color: '#A3A3A3',
    // fontWeight: 'light',
  },
});
