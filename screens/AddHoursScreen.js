import React, {Component, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Picker} from 'react-native-wheel-pick';
import {AppButton, Buttonstyles} from '../components/button';

export const AddHoursScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const hoursSelect = [
    '1 : 00',
    '1 : 30',
    '2 : 00',
    '2 : 30',
    '3 : 00',
    '3 : 30',
    '4 : 00',
    '4 : 30',
    '5 : 00',
  ];
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'white', borderRadius: 10, marginTop:20, marginLeft: 15, marginRight: 15, marginBottom:350}}>
        <Text style={{fontWeight: 'bold', fontSize:16, color:'#1E3152', paddingTop:15, paddingLeft:12 }}> Select number of hours</Text>
        <Picker
            style={{ backgroundColor: 'transparent',  height: 215, alignSelf:'stretch', marginBottom:20 }}
            selectedValue={hoursSelect[4]}
            pickerData={hoursSelect}
            onValueChange={value => { }}
            itemSpace={30} // this only support in android
            itemStyle={{width:'100%', fontSize:40}}
            // textSize={40}
        />
      </View>
        <View style={{flex: 1}}>
          <AppButton
              title="Purchase"
              ContainerStyle={Buttonstyles.appButtonContainer}
              TextStyle={Buttonstyles.appButtonText}
              onPress={() => navigation.navigate('SelectPaymentMethod')}
          />
        </View>
    </View>
  );
};

var {height} = Dimensions.get('window');

var box_count = 4;
var box_height = height / box_count;
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    backgroundColor: 'orange',
    alignItems: 'center',
  },
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
});
