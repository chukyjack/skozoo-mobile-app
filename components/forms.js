import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  Modal,
  TouchableHighlight,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import CheckBox from '@react-native-community/checkbox';

import {useTheme} from 'react-native-paper';

import {AuthContext} from '../components/context';

import Users from '../model/users';
import {Image} from 'react-native-animatable';
import {AppButton, Buttonstyles} from '../components/button';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const SignInForm = () => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    activeTab: 'sign-in',
  });
  const {colors} = useTheme();

  const navigation = useNavigation();

  const {signIn} = React.useContext(AuthContext);

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = (userName, password) => {
    const foundUser = Users.filter(item => {
      return userName == item.username && password == item.password;
    });

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        'Wrong Input!',
        'Username or password field cannot be empty.',
        [{text: 'Okay'}],
      );
      return;
    }

    if (foundUser.length == 0) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
        {text: 'Okay'},
      ]);
      return;
    }
    signIn(foundUser);
  };

  return (
    <View style={{flex: 4, flexDirection: 'column', marginTop: 20}}>
      <View style={[styles.action, {margin: 20}]}>
        <Icon name="envelope" color="#05375a" size={18} style={styles.icon} />
        <TextInput
          placeholder="Email Address"
          style={styles.textInput}
          maxLength={30}
          autoCapitalize="none"
          onChangeText={val => textInputChange(val)}
          onEndEditing={e => handleValidUser(e.nativeEvent.text)}
        />
      </View>
      <View
        style={[
          styles.action,
          {marginLeft: 20, marginRight: 20, marginBottom: 30},
        ]}>
        <Icon name="lock" color="#05375a" size={20} style={styles.icon} />
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry={data.secureTextEntry}
          autoCapitalize="none"
          onChangeText={val => handlePasswordChange(val)}
        />
        <TouchableOpacity onPress={updateSecureTextEntry}>
          {data.secureTextEntry ? (
            <Icon name="eye-slash" color="grey" size={20} />
          ) : (
            <Icon name="eye" color="grey" size={20} />
          )}
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, marginTop: 10, marginLeft: 10, marginRight: 10}}>
        <AppButton
          title="Login"
          ContainerStyle={Buttonstyles.appButtonContainer}
          TextStyle={Buttonstyles.appButtonText}
          onPress={() => {
            loginHandle(data.username, data.password);
          }}
        />
        <View style={{alignItems: 'flex-end', marginRight: 10, marginTop: 20}}>
          <Text
            style={{fontSize: 16}}
            onPress={() => navigation.navigate('ForgotPasswordScreen')}>
            Forgot your password?
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignInForm;

export const SignUpForm = ({navigation}) => {
  const [data, setData] = useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    activeTab: 'sign-in',
    isSelected: false,
  });
  const [isSelected, setSelection] = useState(false);
  const {colors} = useTheme();

  const {signIn} = React.useContext(AuthContext);

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = (userName, password) => {
    const foundUser = Users.filter(item => {
      return userName == item.username && password == item.password;
    });

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        'Wrong Input!',
        'Username or password field cannot be empty.',
        [{text: 'Okay'}],
      );
      return;
    }

    if (foundUser.length == 0) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
        {text: 'Okay'},
      ]);
      return;
    }
    signIn(foundUser);
  };

  return (
    <View style={{flex: 4, flexDirection: 'column', marginTop: 10}}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../assets/avatarupload1.png')}
          style={{
            width: 85,
            height: 85,
            resizeMode: 'contain',
          }}
        />
      </View>
      <View style={{marginLeft: 20, marginRight: 20, marginTop: 30}}>
        <TextInput
          placeholder="First Name"
          style={styles.inputStyle}
          maxLength={30}
          autoCapitalize="none"
          onChangeText={val => textInputChange(val)}
          onEndEditing={e => handleValidUser(e.nativeEvent.text)}
        />
      </View>
      <View style={{marginLeft: 20, marginRight: 20, marginTop: 15}}>
        <TextInput
          placeholder="Last Name"
          style={styles.inputStyle}
          maxLength={30}
          autoCapitalize="none"
          onChangeText={val => textInputChange(val)}
          onEndEditing={e => handleValidUser(e.nativeEvent.text)}
        />
      </View>
      <View style={{marginLeft: 20, marginRight: 20, marginTop: 15}}>
        <TextInput
          placeholder="Email"
          style={styles.inputStyle}
          maxLength={30}
          autoCapitalize="none"
          onChangeText={val => textInputChange(val)}
          onEndEditing={e => handleValidUser(e.nativeEvent.text)}
        />
      </View>
      <View style={styles.action}>
        {/*<Feather name="lock" color="#05375a" size={20} />*/}
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry={data.secureTextEntry}
          autoCapitalize="none"
          onChangeText={val => handlePasswordChange(val)}
        />
        <TouchableOpacity onPress={updateSecureTextEntry}>
          {data.secureTextEntry ? (
            <Icon name="eye-slash" color="grey" size={20} />
          ) : (
            <Icon name="eye" color="grey" size={20} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.action}>
        {/*<Feather name="lock" color="#05375a" size={20} />*/}
        <TextInput
          placeholder="Re-enter Password"
          secureTextEntry={data.secureTextEntry ? true : false}
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={val => handlePasswordChange(val)}
        />
        <TouchableOpacity onPress={updateSecureTextEntry}>
          {data.secureTextEntry ? (
            <Icon name="eye-slash" color="grey" size={20} />
          ) : (
            <Icon name="eye" color="grey" size={20} />
          )}
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.checkboxContainer,
          {marginLeft: 20, marginRight: 20, marginTop: 15},
        ]}>
        <CheckBox
          style={styles.checkbox}
          disabled={false}
          value={isSelected}
          onValueChange={newValue => setSelection(newValue)}
          boxType="square"
          onCheckColor="#fff"
          onFillColor="#05375a"
          onTintColor="#05375a"
        />
        <Text style={styles.checkBoxLabel}> I accept all </Text>
        <Text
          style={[
            styles.checkBoxLabel,
            {textDecorationLine: 'underline', marginLeft: 0},
          ]}>
          Terms and Condition{' '}
        </Text>
      </View>
      <View style={{flex: 1, marginTop: 10, marginLeft: 10, marginRight: 10}}>
        <AppButton
          title="Sign up"
          ContainerStyle={Buttonstyles.appButtonContainer}
          TextStyle={Buttonstyles.appButtonText}
          onPress={() => {
            navigation.navigate('SignUpScreen');
          }}
        />
      </View>
    </View>
  );
};

export const ForgotPasswordForm = () => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    activeTab: 'sign-in',
    phoneNumber: '',
  });
  const {colors} = useTheme();
  const navigation = useNavigation();

  const {signIn} = React.useContext(AuthContext);

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const sendCode = phoneNumber => {
    navigation.navigate('PasswordResetCodeScreen');
  };

  return (
    <View style={{flex: 4, flexDirection: 'column', marginTop: 20}}>
      <View style={[styles.action, {margin: 20}]}>
        <Icon name="phone" color="#05375a" size={18} style={styles.icon} />
        <TextInput
          placeholder="Phone number"
          style={styles.textInput}
          maxLength={30}
          autoCapitalize="none"
          onChangeText={val => textInputChange(val)}
          onEndEditing={e => handleValidUser(e.nativeEvent.text)}
        />
      </View>

      <View style={{flex: 1, marginTop: 10, marginLeft: 10, marginRight: 10}}>
        <AppButton
          title="Send code"
          ContainerStyle={Buttonstyles.appButtonContainer}
          TextStyle={Buttonstyles.appButtonText}
          onPress={() => {
            sendCode(data.phoneNumber);
          }}
        />
      </View>
    </View>
  );
};

export const PasswordResetCodeForm = () => {
  const [data, setData] = React.useState({
    digit1: '',
    digit2: '',
    digit3: '',
    digit4: '',
  });
  const {colors} = useTheme();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const {signIn} = React.useContext(AuthContext);

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = (userName, password) => {
    const foundUser = Users.filter(item => {
      return userName == item.username && password == item.password;
    });

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        'Wrong Input!',
        'Username or password field cannot be empty.',
        [{text: 'Okay'}],
      );
      return;
    }

    if (foundUser.length == 0) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
        {text: 'Okay'},
      ]);
      return;
    }
    signIn(foundUser);
  };

  const confirmCode = value => {
    setData({
      ...data,
      digit4: value,
    });
    navigation.navigate('NewPasswordScreen');
  };

  return (
    <View style={{flex: 4, flexDirection: 'column', marginTop: 20}}>
      <View
        style={{
          margin: 20,
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'space-evenly',
        }}>
        <TextInput
          placeholder=" "
          ref={input => {
            this.firstTextInput = input;
          }}
          keyboardType={'numeric'}
          style={styles.singleInput}
          maxLength={1}
          autoCapitalize="none"
          onChangeText={value => {
            setData({
              ...data,
              digit1: value,
            });
            if (value) {
              this.secondTextInput.focus();
            }
          }}
          onEndEditing={e => handleValidUser(e.nativeEvent.text)}
        />
        <TextInput
          placeholder=" "
          ref={input => {
            this.secondTextInput = input;
          }}
          style={styles.singleInput}
          maxLength={1}
          autoCapitalize="none"
          onChangeText={value => {
            setData({
              ...data,
              digit2: value,
            });
            if (value) {
              this.thirdTextInput.focus();
            }
          }}
          onEndEditing={e => handleValidUser(e.nativeEvent.text)}
        />
        <TextInput
          placeholder=" "
          ref={input => {
            this.thirdTextInput = input;
          }}
          style={styles.singleInput}
          maxLength={1}
          autoCapitalize="none"
          onChangeText={value => {
            setData({
              ...data,
              digit3: value,
            });
            if (value) {
              this.fourthTextInput.focus();
            }
          }}
        />
        <TextInput
          placeholder=" "
          ref={input => {
            this.fourthTextInput = input;
          }}
          style={styles.singleInput}
          maxLength={1}
          autoCapitalize="none"
          onChangeText={value => {
            if (value) {
              confirmCode(value);
            }
          }}
          onEndEditing={e => handleValidUser(e.nativeEvent.text)}
        />
      </View>

      <View style={{flex: 1, marginTop: 10, marginLeft: 10, marginRight: 10}}>
        <AppButton
          title="Resend code"
          ContainerStyle={Buttonstyles.appButtonContainer}
          TextStyle={Buttonstyles.appButtonText}
          onPress={() => {
            loginHandle(data.username, data.password);
          }}
        />
      </View>
    </View>
  );
};

export const NewPasswordForm = () => {
  const [data, setData] = React.useState({
    password1: '',
    password2: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const {colors} = useTheme();
  const navigation = useNavigation();

  const {signIn} = React.useContext(AuthContext);

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = (userName, password) => {
    const foundUser = Users.filter(item => {
      return userName == item.username && password == item.password;
    });

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        'Wrong Input!',
        'Username or password field cannot be empty.',
        [{text: 'Okay'}],
      );
      return;
    }

    if (foundUser.length == 0) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
        {text: 'Okay'},
      ]);
      return;
    }
    signIn(foundUser);
  };
  const changePassword = value => {
    Alert.alert('Password has been changed');
    navigation.navigate('SignInScreen');
  };

  return (
      <View style={{flex: 4, flexDirection: 'column', marginTop: 20}}>
        <View style={[styles.action, {margin: 20}]}>
          <TextInput
              placeholder="New Password"
              style={styles.textInput}
              secureTextEntry={data.secureTextEntry}
              autoCapitalize="none"
              onChangeText={val => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
                <Icon name="eye-slash" color="grey" size={20} />
            ) : (
                <Icon name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <View
            style={[
              styles.action,
              {marginLeft: 20, marginRight: 20, marginBottom: 30},
            ]}>
          <TextInput
              placeholder="Confirm New Password"
              style={styles.textInput}
              secureTextEntry={data.secureTextEntry}
              autoCapitalize="none"
              onChangeText={val => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
                <Icon name="eye-slash" color="grey" size={20} />
            ) : (
                <Icon name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, marginTop: 10, marginLeft: 10, marginRight: 10}}>
          <AppButton
              title="Reset"
              ContainerStyle={Buttonstyles.appButtonContainer}
              TextStyle={Buttonstyles.appButtonText}
              onPress={() => {
                changePassword();
              }}
          />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#5d1010',
    // marginTop:'20%',
    // height: '60%',
  },
  header: {
    justifyContent: 'center',
    // paddingHorizontal: 20,
    paddingBottom: 45,
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
    // marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderBottomWidth: 1,
    // borderBottomColor: '#f2f2f2',
    // paddingBottom: 5,
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: '#959595',
    color: '#4e4e4e',
    height: 50,
    fontSize: 16,
    paddingLeft: 5,
    paddingRight: 15,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
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
    fontSize: 16,
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
    borderBottomWidth: 1,
    borderBottomColor: '#eaaddd',
  },
  Font: {
    fontSize: 24,
    color: '#CE3A5C',
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
  inputWithIcon: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    // borderWidth: 0.3,
    // borderColor: '#959595',
    color: '#4e4e4e',
    // height: 50,
    fontSize: 16,
    // paddingLeft: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
    height: 15,
    width: 15,
  },
  checkBoxLabel: {
    marginLeft: 10,
    color: '#05375a',
    fontSize: 16,
  },
  icon: {
    marginLeft: 10,
    marginRight: 5,
  },
  singleInput: {
    borderWidth: 0.25,
    borderColor: '#959595',
    fontSize: 30,
    color: '#5d5d5d',
    padding: 18,
    borderRadius: 10,
    width: 60,
  },
});
