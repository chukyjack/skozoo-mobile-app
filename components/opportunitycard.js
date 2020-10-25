import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppButton, Buttonstyles} from './button';
import {actuatedNormalize} from '../utils/utils';
import {useNavigation} from '@react-navigation/native';
import {NameCard} from './namecard';
//
// export default class Opportunitycard extends Component {
//
//   render() {
//     const navigation = useNavigation();
//     return (
//       <View style={styles.wrapper}>
//         <View
//           style={{
//             flex: 1,
//             flexDirection: 'row',
//             marginTop: 8,
//             marginLeft: 8,
//             marginRight: 8,
//           }}>
//           <View style={{flex: 4}}>
//             <Text style={{color: '#1E3152', fontWeight: 'bold', fontSize: 15}}>
//               Subject Name
//             </Text>
//           </View>
//           <View style={{flex: 1}}>
//             <Text>in person</Text>
//           </View>
//         </View>
//         <View style={{flex: 1, marginLeft: 8, marginRight: 8}}>
//           <Text style={{color: '#A3A3A3', fontWeight: '600', fontSize: 13}}>
//             May 01, 2020
//           </Text>
//         </View>
//         <View style={{flex: 2, flexDirection: 'row'}}>
//           <View style={{flex: 1}}>
//             <AppButton
//               onPress={() => navigation.navigate('AcceptOpportunity')}
//               title="Accept"
//               ContainerStyle={buttonstyles.appButtonContainer}
//               TextStyle={buttonstyles.appButtonText}
//             />
//           </View>
//           <View style={{flex: 1}}>
//             <AppButton
//               title="Decline"
//               ContainerStyle={Buttonstyles.outlineButtonContainer}
//               TextStyle={Buttonstyles.outlineButtonText}
//             />
//           </View>
//         </View>
//         <View style={{flex: 1, alignItems: 'center', }}>
//           <Text style={{color: '#A3A3A3', fontWeight: '400', fontSize: 13}}>
//             22 hours ago
//           </Text>
//         </View>
//       </View>
//     );
//   }
// }

function Opportunitycard() {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
        <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 8,
              marginLeft: 8,
              marginRight: 8,
            }}>
          <View style={{flex: 4}}>
            <Text style={{color: '#1E3152', fontWeight: 'bold', fontSize: 15}}>
              Subject Name
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text>in person</Text>
          </View>
        </View>
        <View style={{flex: 1, marginLeft: 8, marginRight: 8}}>
          <Text style={{color: '#A3A3A3', fontWeight: '600', fontSize: 13}}>
            May 01, 2020
          </Text>
        </View>
        <View style={{flex: 2, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <AppButton
                onPress={() => navigation.navigate('AcceptOpportunity')}
                title="Accept"
                ContainerStyle={buttonstyles.appButtonContainer}
                TextStyle={buttonstyles.appButtonText}
            />
          </View>
          <View style={{flex: 1}}>
            <AppButton
                title="Decline"
                ContainerStyle={Buttonstyles.outlineButtonContainer}
                TextStyle={Buttonstyles.outlineButtonText}
            />
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center', }}>
          <Text style={{color: '#A3A3A3', fontWeight: '400', fontSize: 13}}>
            22 hours ago
          </Text>
        </View>
      </View>
  );
}
export default Opportunitycard;

export function OpportunitycardDetail() {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapperDetail}>
        <View style={{
              // flex: 1,
              flexDirection: 'row',
              marginTop: 15,
              marginLeft: 8,
              marginRight: 8,
            }}>
          <View style={{flex: 4}}>
            <Text style={{color: '#1E3152', fontWeight: 'bold', fontSize: 15}}>
              Subject Name
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text>in person</Text>
          </View>
        </View>
        <View style={{ marginLeft: 8, marginRight: 8}}>
          <Text style={{color: '#A3A3A3', fontWeight: '600', fontSize: 13}}>
            May 01, 2020
          </Text>
        </View>
        <View >
          <NameCard
              source={require('../assets/profileimage.png')}
              name="Jane smith"
          />

        </View>
        <View style={{ height:'auto',marginTop:10}}>
            <Text style={{
              fontSize: 15,
              fontWeight: '300',
              lineHeight: 23,
              color: '#1E3152',
              margin:10,
            }}>Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the
              industry’s standard dummy text ever since the
              1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also
              the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the
              1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.</Text>

        </View>
        <View >
            <AppButton
                onPress={() => navigation.navigate('AcceptOpportunity')}
                title="Accept"
                ContainerStyle={buttonstyles.appButtonContainer}
                TextStyle={buttonstyles.appButtonText}
            />

        </View>
      </View>
  );
}

// export OpportunitycardDetail;

export const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: '#fff',
    flexDirection: 'column',
    backgroundColor: '#fff',
    // alignItems: 'center',
    margin: 10,
    marginTop: 20,
    borderRadius: 5,
    height: 170,
  },
  wrapperDetail: {
    // backgroundColor: '#fff',
    flexDirection: 'column',
    backgroundColor: '#fff',
    // alignItems: 'center',
    margin: 10,
    marginTop: 20,
    borderRadius: 5,
    // height: 450,
  },
});

const buttonstyles = StyleSheet.create({
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
