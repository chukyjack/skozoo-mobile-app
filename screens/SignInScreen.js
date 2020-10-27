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

const SignInScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

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
    <View style={styles.container}>
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center', paddingTop:30}}>
        <Image source={require('../assets/whitelogo.png')}  style={{width: '45%', height: '45%'}} resizeMode='contain'/>
        {/*<Text style={styles.text_header}>Welcome!</Text>*/}
      </View>
      <View style={[styles.header, {flex: 0.5, flexDirection: 'row'}]}>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 3,
            borderBottomColor: '#CE3A5C'
          }}>
          <Text style={{fontSize: 24, fontWeight: '600', color: '#CE3A5C'}}>
            LOG IN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#eaaddd',
          }}>
          <Text style={{fontSize: 24, fontWeight: '300', color: '#CE3A5C'}}>
            SIGN UP
          </Text>
        </TouchableOpacity>

      </View>
      <View style={{flex: 4, flexDirection: 'column'}}>
        <View style={{margin: 20}}>
          <TextInput
              placeholder="Email Address"
              style={styles.inputStyle}
              maxLength={30}
              autoCapitalize="none"
              onChangeText={val => textInputChange(val)}
              onEndEditing={e => handleValidUser(e.nativeEvent.text)}
          />
        </View>
        <View style={{marginLeft: 20, marginRight: 20}}>
          <TextInput
              placeholder="Password"
              style={styles.inputStyle}
              secureTextEntry={data.secureTextEntry}
              autoCapitalize="none"
              onChangeText={val => handlePasswordChange(val)}
          />
        </View>
        <View style={{flex: 1, marginTop: 10, marginLeft:10, marginRight:10}}>
          <AppButton
              title="Login"
              ContainerStyle={Buttonstyles.appButtonContainer}
              TextStyle={Buttonstyles.appButtonText}
              onPress={() => {
                loginHandle(data.username, data.password);
              }}
          />
          <View
            style={{alignItems: 'flex-end', marginRight: 10, marginTop: 20}}>
            <Text style={{fontSize: 16}}> Forgot your password?</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;

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


// const SignInScreen = ({navigation}) => {
//   const [data, setData] = React.useState({
//     username: '',
//     password: '',
//     check_textInputChange: false,
//     secureTextEntry: true,
//     isValidUser: true,
//     isValidPassword: true,
//   });
//
//   const {colors} = useTheme();
//
//   const {signIn} = React.useContext(AuthContext);
//
//   const textInputChange = val => {
//     if (val.trim().length >= 4) {
//       setData({
//         ...data,
//         username: val,
//         check_textInputChange: true,
//         isValidUser: true,
//       });
//     } else {
//       setData({
//         ...data,
//         username: val,
//         check_textInputChange: false,
//         isValidUser: false,
//       });
//     }
//   };
//
//   const handlePasswordChange = val => {
//     if (val.trim().length >= 8) {
//       setData({
//         ...data,
//         password: val,
//         isValidPassword: true,
//       });
//     } else {
//       setData({
//         ...data,
//         password: val,
//         isValidPassword: false,
//       });
//     }
//   };
//
//   const updateSecureTextEntry = () => {
//     setData({
//       ...data,
//       secureTextEntry: !data.secureTextEntry,
//     });
//   };
//
//   const handleValidUser = val => {
//     if (val.trim().length >= 4) {
//       setData({
//         ...data,
//         isValidUser: true,
//       });
//     } else {
//       setData({
//         ...data,
//         isValidUser: false,
//       });
//     }
//   };
//
//   const loginHandle = (userName, password) => {
//     const foundUser = Users.filter(item => {
//       return userName == item.username && password == item.password;
//     });
//
//     if (data.username.length == 0 || data.password.length == 0) {
//       Alert.alert(
//           'Wrong Input!',
//           'Username or password field cannot be empty.',
//           [{text: 'Okay'}],
//       );
//       return;
//     }
//
//     if (foundUser.length == 0) {
//       Alert.alert('Invalid User!', 'Username or password is incorrect.', [
//         {text: 'Okay'},
//       ]);
//       return;
//     }
//     alert('signed in')
//     signIn(foundUser);
//   };
//
//   return (
//       <View style={styles.container}>
//         <StatusBar backgroundColor="#009387" barStyle="light-content" />
//         <View style={styles.header}>
//           <Text style={styles.text_header}>Welcome!</Text>
//         </View>
//         <Animatable.View
//             animation="fadeInUpBig"
//             style={[
//               styles.footer,
//               {
//                 backgroundColor: colors.background,
//               },
//             ]}>
//           <Text
//               style={[
//                 styles.text_footer,
//                 {
//                   color: colors.text,
//                 },
//               ]}>
//             Username
//           </Text>
//           <View style={styles.action}>
//             <FontAwesome name="user-o" color={colors.text} size={20} />
//             <TextInput
//                 placeholder="Your Username"
//                 placeholderTextColor="#666666"
//                 style={[
//                   styles.textInput,
//                   {
//                     color: colors.text,
//                   },
//                 ]}
//                 autoCapitalize="none"
//                 onChangeText={val => textInputChange(val)}
//                 onEndEditing={e => handleValidUser(e.nativeEvent.text)}
//             />
//             {data.check_textInputChange ? (
//                 <Animatable.View animation="bounceIn">
//                   <Feather name="check-circle" color="green" size={20} />
//                 </Animatable.View>
//             ) : null}
//           </View>
//           {data.isValidUser ? null : (
//               <Animatable.View animation="fadeInLeft" duration={500}>
//                 <Text style={styles.errorMsg}>
//                   Username must be 4 characters long.
//                 </Text>
//               </Animatable.View>
//           )}
//
//           <Text
//               style={[
//                 styles.text_footer,
//                 {
//                   color: colors.text,
//                   marginTop: 35,
//                 },
//               ]}>
//             Password
//           </Text>
//           <View style={styles.action}>
//             <Feather name="lock" color={colors.text} size={20} />
//             <TextInput
//                 placeholder="Your Password"
//                 placeholderTextColor="#666666"
//                 secureTextEntry={data.secureTextEntry ? true : false}
//                 style={[
//                   styles.textInput,
//                   {
//                     color: colors.text,
//                   },
//                 ]}
//                 autoCapitalize="none"
//                 onChangeText={val => handlePasswordChange(val)}
//             />
//             <TouchableOpacity onPress={updateSecureTextEntry}>
//               {data.secureTextEntry ? (
//                   <Feather name="eye-off" color="grey" size={20} />
//               ) : (
//                   <Feather name="eye" color="grey" size={20} />
//               )}
//             </TouchableOpacity>
//           </View>
//           {data.isValidPassword ? null : (
//               <Animatable.View animation="fadeInLeft" duration={500}>
//                 <Text style={styles.errorMsg}>
//                   Password must be 8 characters long.
//                 </Text>
//               </Animatable.View>
//           )}
//
//           <TouchableOpacity>
//             <Text style={{color: '#009387', marginTop: 15}}>
//               Forgot password?
//             </Text>
//           </TouchableOpacity>
//           <View style={styles.button}>
//             <TouchableOpacity
//                 style={styles.signIn}
//                 onPress={() => {
//                   loginHandle(data.username, data.password);
//                 }}>
//               <LinearGradient
//                   colors={['#08d4c4', '#01ab9d']}
//                   style={styles.signIn}>
//                 <Text
//                     style={[
//                       styles.textSign,
//                       {
//                         color: '#fff',
//                       },
//                     ]}>
//                   Sign In
//                 </Text>
//               </LinearGradient>
//             </TouchableOpacity>
//
//             <TouchableOpacity
//                 onPress={() => navigation.navigate('SignUpScreen')}
//                 style={[
//                   styles.signIn,
//                   {
//                     borderColor: '#009387',
//                     borderWidth: 1,
//                     marginTop: 15,
//                   },
//                 ]}>
//               <Text
//                   style={[
//                     styles.textSign,
//                     {
//                       color: '#009387',
//                     },
//                   ]}>
//                 Sign Up
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </Animatable.View>
//       </View>
//   );
// };
//
// export default SignInScreen;
