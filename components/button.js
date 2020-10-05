import React, {Component} from 'react';
import {Button, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {actuatedNormalize} from '../utils/utils';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

export const AppButton = ({onPress, title}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>

);

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    elevation: 8,
    backgroundColor: 'orange',
    borderRadius: 5,
    // paddingVertical: 10,
    paddingHorizontal: 12,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 'auto',
  },
  appButtonText: {
    fontSize: actuatedNormalize(12),
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    textTransform: 'capitalize',
  },
});
