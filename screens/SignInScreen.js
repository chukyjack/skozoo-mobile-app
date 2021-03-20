import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from 'react-native-paper';

import {AuthContext} from '../components/context';

import Users from '../model/users';
import {Image} from 'react-native-animatable';
import {AppButton, Buttonstyles} from '../components/button';
import SignInForm, {SignUpForm} from '../components/forms';

const SignInScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    activeTab: 'sign-in',
  });
  const {colors} = useTheme();

  const {signIn} = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          alignItems: 'center',
          paddingTop: 30,
        }}>
        <Image
          source={require('../assets/whitelogo.png')}
          style={{width: '45%', height: '45%'}}
          resizeMode="contain"
        />
      </View>
      <View style={[styles.header, {flex: 0.5, flexDirection: 'row'}]}>
        <TouchableOpacity
          onPress={() => setData({...data, activeTab: 'sign-in'})}
          style={[
            styles.tab,
            data.activeTab === 'sign-in'
              ? styles.tabActive
              : styles.tabInActive,
          ]}>
          <Text
            style={[
              styles.Font,
              data.activeTab === 'sign-in' ? {fontWeight: '600'} : styles.FontInactive,
            ]}>
            LOG IN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setData({...data, activeTab: 'sign-up'})}
          style={[
            styles.tab,
            data.activeTab === 'sign-up'
              ? styles.tabActive
              : styles.tabInActive,
          ]}>
          <Text
            style={[
              styles.Font,
              data.activeTab === 'sign-up'
                ? {fontWeight: '600'}
                : styles.FontInactive,
            ]}>
            SIGN UP
          </Text>
        </TouchableOpacity>
      </View>
      {data.activeTab === 'sign-up' ? <SignUpForm /> : <SignInForm />}
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    justifyContent: 'center',
    marginBottom: 20,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#800707',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabActive: {
    borderBottomWidth: 3,
    borderBottomColor: '#CE3A5C',
  },
  tabInActive: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#959595',
  },
  Font: {
    fontSize: 24,
    color: '#CE3A5C',
  },
  FontInactive: {
    fontWeight: '300',
    color: '#959595',
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputStyle: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: '#959595',
    color: '#4e4e4e',
    height: 50,
    fontSize: 16,
    paddingLeft: 15,
  },
});
