import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  Image,
  Animated,
  FlatList,
} from 'react-native';
import {Agenda, Calendar} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AppButton, Buttonstyles} from '../components/button';
// import {Icon} from 'react-native-elements';
// import Typography from '../components/Typography';
import DropDownPicker from 'react-native-dropdown-picker';
// import DatePicker from 'react-native-date-picker';
import DatePicker from 'react-native-modern-datepicker';
import moment from 'moment';
import {TimeSelect} from '../components/timeselect';
import {SelectTime, TimeScroller} from '../components/timeselect2';

const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const AppointmentScreen: React.FC = () => {
  const [items, setItems] = useState({});
  const today = new Date();

  const backgroundColors = [
    '#FFE2E2', //light pink
    '#E0E4FF', //light blue
    '#FFFFE0', //light orange
  ];

  const loadItems = day => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Silvester Notmyname',
              time: '9:30am - 10:30am',
              class: 'Advanced Algebra',
              height: Math.max(50, Math.floor(Math.random() * 150)),
              backgroundColor: backgroundColors[Math.abs(i % 4)],
              ivalue: j.toString(10),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = item => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card style={{backgroundColor: '#FFE2E2'}}>
          <Card.Content
            style={{
              height: 150,
              backgroundColor: item.backgroundColor,
              borderRadius: 10,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                flex: 1,
              }}>
              <View style={{flex: 4}}>
                <Text style={{fontWeight: '700', color: '#05375a'}}>
                  {item.name}
                </Text>
              </View>
              <View style={{flex: 3}}>
                <Text>{item.time}</Text>
              </View>
              {/*<Avatar.Text label="J" />*/}
            </View>
            <View style={{flex: 2, marginTop: 10}}>
              <Text> {item.class}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };
  const renderDay = item => {
    return <Icon name="chevron-down-outline" color="black" size={26} />;
  };

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={today}
        renderItem={renderItem}
        renderKnob={renderDay}
        // scrollEnabled={true}
        pastScrollRange={3}
        futureScrollRange={3}
        // theme={{
        //     arrowColor: 'red',
        //     'stylesheet.agenda.reservations': {
        //         week: {
        //             marginTop: 5,
        //             flexDirection: 'row',
        //             justifyContent: 'space-between',
        //             backgroundColor:'red'
        //         }
        //     }
        // }}
      />
    </View>
  );
};
export const RequestAppointmentScreen = ({navigation}) => {
  const users = [
    {label: 'Muhammed Abubakar', value: '1', hidden: true},
    {label: 'Ezinne Igwe', value: '2'},
    {label: 'Christian Zirchorf', value: '3'},
  ];
  const subjects = [
    {label: 'Intermediate Algebra', value: '1', hidden: true},
    {label: 'Adv statistics', value: '2'},
    {label: 'Pre Calculus', value: '3'},
  ];
  const userType = 'Select Tutor' || 'Select Student';
  const defaultSubject = subjects[0].label;
  const [date, setDate] = useState(new Date());
  return (
    <View style={styles.container}>
      <View style={{flex: 3, flexDirection: 'column'}}>
        <View
          style={{
            ...(Platform.OS !== 'android' && {
              zIndex: 10,
            }),
            margin: 20,
          }}>
          <DropDownPicker
            items={users}
            defaultValue=""
            placeholder={userType}
            placeholderStyle={{color: '#4e4e4e', fontSize: 16}}
            containerStyle={{height: 50}}
            style={{backgroundColor: '#fff'}}
            itemStyle={{
              justifyContent: 'flex-start',
              color: 'white',
            }}
            dropDownStyle={{backgroundColor: '#fff'}}
            onChangeItem={item => {}}
          />
        </View>
        <View
          style={{
            ...(Platform.OS !== 'android' && {
              zIndex: 9,
            }),
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 20,
          }}>
          <DropDownPicker
            items={subjects}
            defaultValue=""
            placeholder={defaultSubject}
            placeholderStyle={{color: '#4e4e4e', fontSize: 16}}
            containerStyle={{height: 50}}
            style={{backgroundColor: '#fff'}}
            itemStyle={{
              justifyContent: 'flex-start',
              color: 'white',
            }}
            dropDownStyle={{backgroundColor: '#fff'}}
            onChangeItem={item => {}}
          />
        </View>
        {/*<View style={{marginLeft: 20, marginRight: 20, marginBottom: 20}}>*/}
        {/*  <DatePicker*/}
        {/*    date={date}*/}
        {/*    onDateChange={setDate}*/}
        {/*    dividerHeight={100}*/}
        {/*    style={{*/}
        {/*      height: 100,*/}
        {/*      width: 370,*/}
        {/*      backgroundColor: '#fff',*/}
        {/*      color: '#fff',*/}
        {/*      borderRadius: 5,*/}
        {/*      borderWidth: 0.3,*/}
        {/*      borderColor: '#959595'}}*/}
        {/*  />*/}
        {/*</View>*/}
        <View style={{marginLeft: 20, marginRight: 20}}>
          <TextInput
            placeholder="Notes (Optional)"
            style={styles.multiLineInput}
            onChangeText={text => {}}
            multiline
          />
        </View>
      </View>

      <View style={{flex: 1, marginTop: 10}}>
        <AppButton
          title="Set appointment time"
          ContainerStyle={Buttonstyles.appButtonContainer}
          TextStyle={Buttonstyles.appButtonText}
          onPress={() => navigation.navigate('RequestAppointmentTime')}
          maxLength={36}
        />
      </View>
    </View>
  );
};

export const RequestAppointmentTimeScreen = ({navigation}) => {
  const users = [
    {label: 'Muhammed Abubakar', value: '1', hidden: true},
    {label: 'Ezinne Igwe', value: '2'},
    {label: 'Christian Zirchorf', value: '3'},
  ];
  const subjects = [
    {label: 'Intermediate Algebra', value: '1', hidden: true},
    {label: 'Adv statistics', value: '2'},
    {label: 'Pre Calculus', value: '3'},
  ];
  const userType = 'Select Tutor' || 'Select Student';
  const defaultSubject = subjects[0].label;
  const [date, setDate] = useState('');
  const [time, setTime] = useState({
    minute: 0,
    hour: 0,
  });
  const [selectedDate, setSelectedDate] = useState('');
  const [markedDates, setmarkedDates] = useState({});
  const minDate = new Date();

  const getSelectedDayEvents = date => {
    let newMarkedDates = {};
    newMarkedDates[date] = {
      selected: true,
      color: '#00B0BF',
      textColor: '#FFFFFF',
    };
    setSelectedDate(date.dateString);
    setmarkedDates(newMarkedDates);
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 6, flexDirection: 'column'}}>
        <View
          style={{
            margin: 20,
            marginTop: 0,
          }}>
          <Calendar
            // Specify style for calendar container element. Default = {}
            style={{
              borderColor: 'gray',
              height: 'auto',
              borderBottomWidth: 0.3,
              borderBottomColor: '#cacaca',
            }}
            onDayPress={day => getSelectedDayEvents(day)}
            minDate={minDate}
            disableAllTouchEventsForDisabledDays={true}
            hideExtraDays={true}
            markedDates={{
              ...markedDates,
              [selectedDate]: {selected: true, disableTouchEvent: true},
            }}
            // Specify theme properties to override specific styles for calendar parts. Default = {}
            theme={{
              backgroundColor: 'transparent',
              calendarBackground: 'transparent',
              textSectionTitleColor: '#b6c1cd',
              textSectionTitleDisabledColor: '#d9e1e8',
              selectedDayBackgroundColor: '#CE3A5C',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              dotColor: '#00adf5',
              selectedDotColor: '#ffffff',
              arrowColor: '#1E3152',
              disabledArrowColor: '#d9e1e8',
              monthTextColor: '#1E3152',
              indicatorColor: '#1E3152',
              textDayFontWeight: '700',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '500',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 14,
              textDayFontFamily: 'arial',
              textMonthFontFamily: 'arial',
              textDayHeaderFontFamily: 'arial',
            }}
          />
        </View>

        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 20,
            borderBottomWidth: 0.3,
            borderBottomColor: '#cacaca',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              source={require('../assets/icons/clock.png')}
              style={{width: 20, height: 20}}
            />
            <Text
              style={{
                marginLeft: 10,
                fontWeight: '700',
                color: '#1E3152',
              }}>
              Start {time.hour} {time.minute}
            </Text>
          </View>
          {/*<DatePicker*/}
          {/*    mode="time"*/}
          {/*    minuteInterval={3}*/}
          {/*    onTimeChange={selectedTime => {}}*/}
          {/*/>*/}
          {/*<TimeSelect />*/}
          {/*<SelectTime />*/}
          <TimeScroller
            data={Array.from({length: 24}, (x, i) => i)}
            onChange={hour => setTime({...time, hour})}
          />
        </View>
        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 20,
            borderBottomWidth: 0.3,
            borderBottomColor: '#cacaca',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              source={require('../assets/icons/clock.png')}
              style={{width: 20, height: 20}}
            />
            <Text
              style={{
                marginLeft: 10,
                fontWeight: '700',
                color: '#1E3152',
              }}>
              End Time {time.hour} {time.minute}
            </Text>
          </View>
          <DatePicker
              mode="time"
              minuteInterval={3}
              onTimeChange={selectedTime => {}}
          />
          <TimeScroller
            data={Array.from({length: 24}, (x, i) => i)}
            onChange={hour => setTime({...time, hour})}
          />
        </View>


      </View>

      <View style={{flex: 1, marginTop: 10}}>
        <AppButton
          title="Request Appointment"
          ContainerStyle={Buttonstyles.appButtonContainer}
          TextStyle={Buttonstyles.appButtonText}
          onPress={() => navigation.navigate('Appointment')}
          maxLength={36}
        />
      </View>
    </View>
  );
};

export default AppointmentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fe',
    paddingTop: 10,
    height: 30,
    flexDirection: 'column',
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 0.24
  },
  inputStyle: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: '#959595',
    color: '#4e4e4e',
    height: 50,
    fontSize: 16,
    paddingLeft: 15,
  },
  multiLineInput: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: '#959595',
    color: '#4e4e4e',
    height: 150,
    fontSize: 16,
    paddingLeft: 15,
    paddingTop: 15,
  },
});
