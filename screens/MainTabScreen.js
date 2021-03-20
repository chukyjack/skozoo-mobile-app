import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import OpportunityScreen, {AcceptOpportunityScreen} from './OpportunityScreen';
import {AddHoursScreen} from './AddHoursScreen';
import {SelectPayment} from './PaymentSelectScreen';
import {CreditCardSelect, AddNewCreditCard} from './CreditCardSelectScreen';
import AppointmentScreen, {RequestAppointmentScreen, RequestAppointmentTimeScreen} from './AppointmentScreen';
import CustomAppointment from './CustomAppointment';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

export const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({color}) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#694fad',
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor: '#d02860',
        tabBarIcon: ({color}) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

export const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1E3152',
        height: 120,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Dashboard',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1E3152"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="headset-sharp"
            size={25}
            backgroundColor="#1E3152"
            onPress={() => null}
          />
        ),
      }}
    />
    <HomeStack.Screen
      name="Opportunity"
      component={OpportunityScreen}
      options={{
        title: 'Opportunity',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1E3152"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
    <HomeStack.Screen
      name="AcceptOpportunity"
      component={AcceptOpportunityScreen}
      options={{
        headerBackTitle: null,
        title: 'Opportunity',
      }}
    />
    <HomeStack.Screen
      name="AddHours"
      component={AddHoursScreen}
      options={{
        headerBackTitle: null,
        title: 'Add hours',
      }}
    />
    <HomeStack.Screen
      name="SelectPaymentMethod"
      component={SelectPayment}
      options={{
        headerBackTitle: null,
        title: 'Payment Method',
      }}
    />
    <HomeStack.Screen
      name="CreditCardSelect"
      component={CreditCardSelect}
      options={{
        headerBackTitle: null,
        title: 'Choose card',
      }}
    />
    <HomeStack.Screen
      name="AddNewCreditCard"
      component={AddNewCreditCard}
      options={{
        headerBackTitle: null,
        title: 'Add card',
      }}
    />
    <HomeStack.Screen
      name="Appointment"
      component={AppointmentScreen}
      options={{
        title: 'SCHEDULE',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1E3152"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="add"
            size={35}
            backgroundColor="#1E3152"
            onPress={() => navigation.navigate('RequestAppointment')}
          />
        ),
      }}
    />
    <HomeStack.Screen
      name="RequestAppointment"
      component={RequestAppointmentScreen}
      options={{
        title: 'Request',
        headerBackTitle: null,
      }}
    />
    <HomeStack.Screen
      name="RequestAppointmentTime"
      component={RequestAppointmentTimeScreen}
      options={{
        title: 'Time',
        headerBackTitle: null,
      }}
    />
    <HomeStack.Screen
      name="CustomAppointment"
      component={CustomAppointment}
      options={{
        title: 'schedule',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1E3152"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

// export const OpportunityStackScreen = ({navigation}) => (
//   <HomeStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#1E3152',
//         height: 120,
//         borderBottomRightRadius: 10,
//         borderBottomLeftRadius: 10,
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//         fontSize: 25,
//       },
//     }}>
//     <HomeStack.Screen
//       name="Opportunity"
//       component={OpportunityScreen}
//       options={{
//         title: 'Opportunity',
//         headerLeft: () => (
//           <Icon.Button
//             name="ios-menu"
//             size={25}
//             backgroundColor="#1E3152"
//             onPress={() => navigation.openDrawer()}
//           />
//         ),
//         headerRight: () => (
//           <Icon.Button
//             name="headset-sharp"
//             size={25}
//             backgroundColor="#1E3152"
//             onPress={() => null}
//           />
//         ),
//       }}
//     />
//   </HomeStack.Navigator>
// );

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1f65ff"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </DetailsStack.Navigator>
);
