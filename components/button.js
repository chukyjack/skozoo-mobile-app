import React, {Component} from 'react';
import {Button, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {actuatedNormalize} from '../utils/utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native-animatable';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

export const AppButton = ({
  onPress,
  title,
  ContainerStyle,
  TextStyle,
  icon,
  iconColor = 'white',
}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={ContainerStyle}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <View>
        <Text style={TextStyle}> {title} </Text>
      </View>
      <View>
        {icon ? (
          <Icon name="plus-circle-outline" color={iconColor} size={22} />
        ) : null}
      </View>
    </View>
  </TouchableOpacity>
);

export const Buttonstyles = StyleSheet.create({
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
  outlineButtonContainer: {
    elevation: 8,
    // backgroundColor: 'orange',
    borderColor: 'orange',
    borderWidth: 1,
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
  outlineButtonText: {
    fontSize: actuatedNormalize(12),
    color: 'red',
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    textTransform: 'capitalize',
  },
  outlineButtonTextBlue: {
    fontSize: actuatedNormalize(12),
    color: '#1E3152',
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    textTransform: 'capitalize',
  },
});
