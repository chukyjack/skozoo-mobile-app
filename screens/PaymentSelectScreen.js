import React, {Component} from 'react';
import {Text, View} from 'react-native-animatable';
import {StyleSheet, StatusBar, FlatList, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppButton, Buttonstyles} from '../components/button';


const DATA = [
  {
    id: '1',
    title: 'Credit Card/Debit Card',
    icon: require('../assets/icons/credit-card3.png'),
  },
  {
    id: '2',
    title: 'Bank Account',
    icon: require('../assets/icons/banking3.png'),
  },
  {
    id: '3',
    title: 'Paypal',
    icon: require('../assets/icons/paypal3.png'),
  },
];


export class SelectPayment extends Component {
    constructor(props) {
        super(props)
        const responseData = DATA.map((item, index) => {
                item.isSelect = index === 0;
                return item}
                );
        this.state = {
            dataTypesData: responseData
        };
    }

    selectItem = data => {
        // no action if item is already selected
        if (data.item.isSelect) {
            return
        }
        // deselect previously selected item
        this.state.dataTypesData = this.state.dataTypesData.map(
            item => {
                item.isSelect = false;
                return item
            });
        data.item.isSelect = true;

        const index = this.state.dataTypesData.findIndex(
            item => data.item.id === item.id
        );

        this.state.dataTypesData[index] = data.item;

        this.setState({
            dataTypesData: this.state.dataTypesData,
        });
    };
    renderItem = data => (
        <TouchableOpacity style={styles.item} onPress={() => this.selectItem(data)}>
            <View style={{flex:1}}>
                <Image source={data.item.icon} style={{ width: 55, height: 30, resizeMode:'contain'}} />
                <Text>{data.item.isSelect}</Text>
            </View>
            <View style={{flex:8}}>
                <Text style={styles.title}>{data.item.title}{data.item.isSelect}</Text>
            </View>
            <View style={{flex:1}}>
                {data.item.isSelect ? <Icon name='check-circle' color='green' size={25}/> : null}
            </View>
        </TouchableOpacity>
  );
  render() {
      return (
          <View style={styles.container}>
              <View style={{flex: 4.6}}>
                  <FlatList
                      data={this.state.dataTypesData}
                      renderItem={item => this.renderItem(item)}
                      keyExtractor={item => item.id}
                  />
              </View>
              <View style={{flex: 1}}>
                  <AppButton
                      title="Next"
                      ContainerStyle={Buttonstyles.appButtonContainer}
                      TextStyle={Buttonstyles.appButtonText}
                      onPress={() => this.props.navigation.navigate('CreditCardSelect')}
                  />
              </View>

          </View>
      );
    }

}

const styles = StyleSheet.create(
    {
      container: {
        flex:1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#f8f9fe',
        paddingTop:10,
        height:30
      },
      item: {
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:8,
        flexDirection: 'row',
          alignItems:'center'
        // borderWidth: 0.24
      },
      title: {
        fontSize:14,
        fontWeight: '500',
          padding: 20
      }
    }
)
