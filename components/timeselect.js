import React, {Component} from 'react';
import {Text, View} from 'react-native-animatable';
import {
  Animated,
  Dimensions, I18nManager,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {AppButton, Buttonstyles} from './button';

const CARD_WIDTH = Dimensions.get('window').width * 0.8;
const CARD_HEIGHT = Dimensions.get('window').height * 0.23;
const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 5;

const cards = [
  {name: 'Eduardo Enrique', last_four_digits: 7830, expiry_date: '10/25'},
  {name: 'Eduardo Enrique', last_four_digits: 4567, expiry_date: '11/23'},
  {name: 'Maria Enrique', last_four_digits: 9733, expiry_date: '09/25'},
  {name: 'Eduardo Enrique', last_four_digits: 9833, expiry_date: '08/21'},
  {name: 'Eduardo Enrique', last_four_digits: 4992, expiry_date: '04/20'},
  {name: 'Eduardo Enrique', last_four_digits: 4992, expiry_date: '04/20'},
  {name: 'Eduardo Enrique', last_four_digits: 4992, expiry_date: '04/20'},
  {name: 'Eduardo Enrique', last_four_digits: 4992, expiry_date: '04/20'},
  {name: 'Eduardo Enrique', last_four_digits: 4992, expiry_date: '04/20'},
  {name: 'Eduardo Enrique', last_four_digits: 4992, expiry_date: '04/20'},
  {name: 'Eduardo Enrique', last_four_digits: 4992, expiry_date: '04/20'},
  {name: 'Eduardo Enrique', last_four_digits: 4992, expiry_date: '04/20'},
  {name: 'Eduardo Enrique', last_four_digits: 4992, expiry_date: '04/20'},
  {name: 'Eduardo Enrique', last_four_digits: 4992, expiry_date: '04/20'},
  {name: 'Eduardo Enrique', last_four_digits: 4992, expiry_date: '04/20'},
  {name: 'Eduardo Enrique', last_four_digits: 4992, expiry_date: '04/20'},
  {name: 'Eduardo Enrique', last_four_digits: 4992, expiry_date: '04/20'},
  {name: 'Eduardo Enrique', last_four_digits: 4992, expiry_date: '04/20'},
  {name: 'Eduardo Enrique', last_four_digits: 4992, expiry_date: '04/20'},
  {name: 'Eduardo Enrique', last_four_digits: 4992, expiry_date: '04/20'},
  {name: 'Eduardo Enrique', last_four_digits: 4992, expiry_date: '04/20'},
  {name: 'Eduardo Enrique', last_four_digits: 4992, expiry_date: '04/20'},
  {name: 'Eduardo Enrique', last_four_digits: 4992, expiry_date: '04/20'},
  {name: 'Eduardo Enrique', last_four_digits: 4992, expiry_date: '04/20'},
  {name: 'Eduardo Enrique', last_four_digits: 4992, expiry_date: '04/20'},
  {name: 'Eduardo Enrique', last_four_digits: 4992, expiry_date: '04/20'},
  {name: 'Eduardo Enrique', last_four_digits: 4992, expiry_date: '04/20'},
];
const CardColors = ['#7A56FC', '#2A98FF', '#000', '#EDA617', '#1E3152'];

export class TimeSelect extends Component {
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
              flexDirection: 'column',
              alignItems: 'stretch',
              marginLeft: 30,
            },
          ]}
        />
      );
    });
  };
  render() {
    return (
      <>
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
      </>
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
    width: 1,
    height: 40,
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
