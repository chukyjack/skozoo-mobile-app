import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppButton} from '../components/button';
import UserList from '../components/user-list';

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/balance1.png')}
        style={styles.background}
        imageStyle={{resizeMode: 'stretch'}}>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
          }}>
          <View style={styles.accountbalanceleft}>
            <View style={{width: 'auto', flex: 2}}>
              <Text
                style={{color: 'white', fontWeight: 'normal', fontSize: 18}}>
                {' '}
                Account Balances
              </Text>
            </View>
            <View style={{width: 'auto', flex: 3, flexDirection: 'row'}}>
              <Icon name="clock-outline" size={28} color="white" />
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 23,
                  marginLeft: 10,
                }}>
                1 hour
              </Text>
            </View>
            <AppButton title="Get more hours" />
          </View>
          <View style={styles.accountbalanceright}>
            <Text />
          </View>
        </View>
      </ImageBackground>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            marginLeft: 15,
            color: '#1E3152',
          }}>
          Your Tutors
        </Text>
      </View>
      <View style={[styles.section, styles.section2]}>
        <AppButton title="Request New Tutor" />
        <ScrollView style={{flex: 3, height: 50}}>
          <UserList />
        </ScrollView>
      </View>
      <View style={[styles.section, styles.section3]}>
        <ImageBackground
          source={require('../assets/upload.png')}
          style={styles.background}
          imageStyle={{resizeMode: 'center'}}
        />
        <AppButton title="Upload homework" />
      </View>
    </View>
  );
};

export default HomeScreen;

var {height} = Dimensions.get('window');

var box_count = 4;
var box_height = height / box_count;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#F8F9FE',
  },
  section: {
    height: box_height, //set this one
    margin: 20,
    marginRight: 15,
    marginLeft: 15,
    borderRadius: 10,
  },
  section1: {
    backgroundColor: '#1E3152',
    flex: 3,
  },
  section2: {
    backgroundColor: '#FFFFFF',
    flex: 4.5,
    flexDirection: 'column',
  },
  section3: {
    backgroundColor: '#FFFFFF',
    flex: 4,
    flexDirection: 'column',
    // alignItems: 'center'
  },
  accountbalanceleft: {
    width: 'auto',
    height: 'auto',
    marginTop: 30,
    marginLeft: 40,
    marginRight: 10,
    marginBottom: 30,
    // backgroundColor: 'transparent',
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  accountbalanceright: {
    width: 'auto',
    height: 'auto',
    marginTop: 30,
    marginRight: 40,
    marginLeft: 10,
    marginBottom: 30,
    // backgroundColor: 'orange',
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain', // or 'stretch'
  },
  background: {
    flex: 4,
    marginTop: 10,
    marginRight: -10,
    marginLeft: -10,
    width: 'auto',
    height: 'auto',
    resizeMode: 'cover',
    // resizeMode: 'cover', // or 'stretch'
  },
  buttonContainer: {
    // flex: 1,
    // marginTop: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 20,
    height: 'auto',
    backgroundColor: 'orange',
    borderRadius: 5,

    // resizeMode: 'cover', // or 'stretch'
  },
});
