import React, {Component, useState} from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import {Text, View} from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppButton, Buttonstyles} from '../components/button';
import {color} from 'react-native-reanimated';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {ScrollView} from 'react-native-reanimated';

const CARD_WIDTH = Dimensions.get('window').width * 0.8;
const CARD_HEIGHT = Dimensions.get('window').height * 0.23;
const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 5;

const cards = [
  {name: 'Eduardo Enrique', last_four_digits: 7830, expiry_date: '10/25'},
  {name: 'Eduardo Enrique', last_four_digits: 4567, expiry_date: '11/23'},
  {name: 'Maria Enrique', last_four_digits: 9733, expiry_date: '09/25'},
  {name: 'Eduardo Enrique', last_four_digits: 9833, expiry_date: '08/21'},
  {name: 'Eduardo Enrique', last_four_digits: 4992, expiry_date: '04/20'},
];
const CardColors = ['#7A56FC', '#2A98FF', '#000', '#EDA617', '#1E3152'];

export class CreditCardSelect extends Component {
  constructor(props) {
    super(props);
    const coloredcards = cards.map((item, index) => {
      item.color = CardColors[index];
      return item;
    });
    this.state = {
      cards: coloredcards,
    };
  }
  renderCards = cards => {
    return cards.map(card => {
      return (
        <View
          style={[
            styles.cardStyle,
            {
              backgroundColor: card.color,
              flexDirection: 'column',
              paddingLeft: 20,
              paddingRight: 20,
              alignItems: 'stretch',
            },
          ]}>
          <View style={{flex: 1}}>
            <Image
              source={require('../assets/icons/visa.png')}
              style={{
                width: 55,
                height: 30,
                resizeMode: 'contain',
                alignSelf: 'flex-end',
                marginRight: 10,
                marginTop: 20,
              }}
            />
          </View>
          <View style={{flex: 1}}>
            <View style={{flex: 1.3, alignItems: 'center'}}>
              <Text style={{color: '#fff', fontSize: 20, paddingTop: 15}}>
                XXXX XXXX XXXX {card.last_four_digits}
              </Text>
            </View>
            <View style={{flex: 1, paddingLeft: 10, paddingTop: 2}}>
              <Text style={{color: '#d2d0d0', fontSize: 13, fontWeight: '300'}}>
                123
              </Text>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row', paddingTop: 5}}>
            <View style={{flex: 4}}>
              <Text
                style={{color: '#fff', fontSize: 17, flex: 5, paddingLeft: 5}}>
                {' '}
                {card.name}
              </Text>
            </View>
            <View style={{flex: 0.5, flexDirection: 'column'}}>
              <View>
                <Text
                  style={{color: '#d2d0d0', fontSize: 8, fontWeight: '300'}}>
                  VALID
                </Text>
              </View>
              <View>
                <Text
                  style={{color: '#d2d0d0', fontSize: 8, fontWeight: '300'}}>
                  THRU
                </Text>
              </View>
            </View>
            <View style={{flex: 1}}>
              <Text style={{color: '#fff', fontSize: 17, flex: 5}}>
                {' '}
                {card.expiry_date}
              </Text>
            </View>
          </View>
        </View>
      );
    });
  };
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <View style={{height: CARD_HEIGHT + 50, paddingTop: 20}}>
            <ScrollView
              horizontal // Change the direction to horizontal
              pagingEnabled // Enable paging
              decelerationRate={0} // Disable deceleration
              snapToInterval={CARD_WIDTH + 10} // Calculate the size for a card including marginLeft and marginRight
              snapToAlignment="center" // Snap to the center
              contentInset={{
                // iOS ONLY
                top: 0,
                left: SPACING_FOR_CARD_INSET, // Left spacing for the very first card
                bottom: 0,
                right: SPACING_FOR_CARD_INSET, // Right spacing for the very last card
              }}
              contentContainerStyle={{
                // contentInset alternative for Android
                paddingHorizontal:
                  Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0, // Horizontal spacing before and after the ScrollView
              }}>
              {this.renderCards(this.state.cards)}
            </ScrollView>
          </View>

          <View style={{flex: 1, marginTop: 350}}>
            <AppButton
              title="Add New Card"
              ContainerStyle={Buttonstyles.outlineButtonContainer}
              TextStyle={Buttonstyles.outlineButtonTextBlue}
              onPress={() => this.props.navigation.navigate('AddNewCreditCard')}
              icon="+"
              iconColor="#1E3152"
            />
            <AppButton
              title="Pay"
              ContainerStyle={Buttonstyles.appButtonContainer}
              TextStyle={Buttonstyles.appButtonText}
              onPress={() => this.props.navigation.navigate('Home')}
            />
          </View>
        </View>
      </>
    );
  }
}

export class AddNewCreditCard extends Component {
  constructor(props) {
    super(props);
    const coloredcard = {
      name: 'CardHolder Name',
      card_number: 'XXXX    XXXX     XXXX     XXXX',
      expiry_date: 'XX/XX',
      color: 'black',
    };
    // const [name, setName] = useState('');
    this.state = {
      card: coloredcard,
      cardholderName: 'CardHolder Name',
      cardNumber: 'XXXX    XXXX    XXXX    XXXX',
      expiryDate: '',
      cvc: 'XXX',
      cardColor: 'black',
    };
  }
  updateName = name => {
    if (name === '') {
      name = 'CardHolder Name';
    }
    this.setState({
      cardholderName: name,
    });
  };
  updateCvc = cvc => {
    if (cvc === '') {
      cvc = 'XXX';
    }
    this.setState({
      cvc: cvc,
    });
  };
  updateNumber = number => {
    this.setState({
      cardNumber: this.formatNumber(number),
    });
  };
  updateExpiry = text => {
    let textTemp = text;
    // Clear one, clear all!
    if (textTemp.length < this.state.expiryDate.length) {
      textTemp = '';
    }
    if (textTemp[0] !== '1' && textTemp[0] !== '0') {
      textTemp = '';
    }
    if (textTemp.length === 2) {
      if (
        parseInt(textTemp.substring(0, 2), 10) > 12 ||
        parseInt(textTemp.substring(0, 2), 10) === 0
      ) {
        textTemp = textTemp[0];
      } else if (text.length === 2) {
        textTemp += '/';
      } else {
        textTemp = textTemp[0];
      }
    }
    this.setState({expiryDate: textTemp});
  };
  formatNumber = number => {
    let numWithSpaces = '';
    const numLen = number.length;
    const remainder = 16 - numLen;
    for (let i = 0; i < remainder; i++) {
      number = number + 'X';
    }
    for (let i = 0; i < 16; i++) {
      numWithSpaces = numWithSpaces + number[i];
      if (i === 3 || i === 7 || i === 11) {
        numWithSpaces = numWithSpaces + '    ';
      }
    }
    return numWithSpaces;
  };
  renderCard = () => {
    return (
      <View
        style={[
          styles.cardStyle,
          {
            backgroundColor: this.state.cardColor,
            flexDirection: 'column',
            paddingLeft: 20,
            paddingRight: 20,
            alignItems: 'stretch',
          },
        ]}>
        <View style={{flex: 1}}>
          <Image
            source={require('../assets/icons/visa.png')}
            style={{
              width: 55,
              height: 30,
              resizeMode: 'contain',
              alignSelf: 'flex-end',
              marginRight: 10,
              marginTop: 20,
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <View style={{flex: 1.3, alignItems: 'center'}}>
            <Text style={{color: '#fff', fontSize: 20, paddingTop: 15}}>
              {this.state.cardNumber}
            </Text>
          </View>
          <View style={{flex: 1, paddingLeft: 15, paddingTop: 2}}>
            <Text style={{color: '#d2d0d0', fontSize: 13, fontWeight: '300'}}>
              {this.state.cvc}
            </Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', paddingTop: 5}}>
          <View style={{flex: 4}}>
            <Text
              style={{color: '#fff', fontSize: 17, flex: 5, paddingLeft: 5}}>
              {this.state.cardholderName}
            </Text>
          </View>
          <View style={{flex: 0.5, flexDirection: 'column'}}>
            <View>
              <Text style={{color: '#d2d0d0', fontSize: 8, fontWeight: '300'}}>
                VALID
              </Text>
            </View>
            <View>
              <Text style={{color: '#d2d0d0', fontSize: 8, fontWeight: '300'}}>
                THRU
              </Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: '#fff', fontSize: 16, flex: 5}}>
              {this.state.expiryDate}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: CARD_HEIGHT + 50,
            paddingTop: 20,
            alignItems: 'center',
          }}>
          {this.renderCard(this.state.card)}
        </View>
        <View style={{flex: 3, flexDirection: 'column'}}>
          <View style={{margin: 20}}>
            <TextInput
              placeholder="Card Number"
              style={styles.inputStyle}
              maxLength={16}
              onChangeText={number => this.updateNumber(number)}
              keyboardType={'numeric'}
          />
          </View>
          <View style={{marginLeft: 20, marginRight: 20}}>
            <TextInput
              placeholder="Cardholder Name"
              style={styles.inputStyle}
              onChangeText={text => this.updateName(text)}
            />
          </View>
          <View style={{flexDirection: 'row', margin: 20}}>
            <View style={{flex: 1, marginRight: 5}}>
              <TextInput
                placeholder="Expiration Date"
                style={styles.inputStyle}
                onChangeText={number => this.updateExpiry(number)}
                clearTextOnFocus={true}
                value={this.state.expiryDate}
                maxLength={5}
              />
            </View>
            <View style={{flex: 1, marginLeft: 5}}>
              <TextInput
                placeholder="CVV"
                style={styles.inputStyle}
                maxLength={3}
                onChangeText={num => this.updateCvc(num)}
              />
            </View>
          </View>
        </View>

        <View style={{flex: 1, marginTop: 10}}>
          <AppButton
            title="Pay"
            ContainerStyle={Buttonstyles.appButtonContainer}
            TextStyle={Buttonstyles.appButtonText}
            onPress={() => this.props.navigation.navigate('Home')}
            maxLength={36}
          />
        </View>
      </View>
    );
  }
}

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
  cardStyle: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    margin: 5,
    borderRadius: 15,
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
