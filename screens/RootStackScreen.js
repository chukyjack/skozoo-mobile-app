import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import PasswordResetCodeScreen from './PasswordResetCodeScreen';
import NewPasswordScreen from './NewPasswordScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator screenOptions={{ headerTitleStyle:{ color: '#1E3152'}, headerBackTitle: 'Back', headerBackTitleStyle:{color:'#1E3152'}, headerTintColor: '#1E3152', }}>
    <RootStack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown: false}} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown: false}} />
    <RootStack.Screen
      name="ForgotPasswordScreen"
      component={ForgotPasswordScreen}
      options={{
        title: 'Forgot Password',
        headerTitleStyle: {color: '#1E3152'},
      }}
    />
    <RootStack.Screen
      name="PasswordResetCodeScreen"
      component={PasswordResetCodeScreen}
      options={{title: 'Reset Code'}}
    />
    <RootStack.Screen
      name="NewPasswordScreen"
      component={NewPasswordScreen}
      options={{title: 'New Password'}}
    />
  </RootStack.Navigator>
);

export default RootStackScreen;
