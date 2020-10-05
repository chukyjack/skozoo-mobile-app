import React, {Component} from 'react';
import {StyleSheet, FlatList, View, Text, Image} from 'react-native';
import { Divider} from 'react-native-paper';
import {NameCard} from './namecard';
export default class UserList extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <FlatList showsVerticalScrollIndicator={true} persistentScrollbar={true}
                    data={[
                        {name: 'Devin King'},
                        {name: 'Dan'},
                        {name: 'Dominic'},
                        {name: 'Jackson'},
                        {name: 'James'},
                        {name: 'Joel'},
                        {name: 'John'},
                        {name: 'Jillian'},
                        {name: 'Jimmy'},
                        {name: 'Julie'},
                    ]}
                    renderItem={({item}) =>
                        <View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{flex: 3, marginLeft: 15}}>
                                <NameCard
                                    source={require('../assets/profileimage.png')}
                                    name={item.name}
                                />
                            </View>
                            <View style={{ flex: 1, flexDirection:'row', alignItems:'center'}}>
                                <Image source={require('../assets/icons/chat1.png')} style={{marginLeft:10,width:30, height:30}}/>
                                <Image source={require('../assets/icons/phone1.png')} style={{marginLeft:10,width:30, height:30}}/>
                            </View>
                        </View>
                            <View style={{ marginRight:10, marginLeft:13,marginTop:10,marginBottom:10, alignItems: 'auto'}}>
                                <Text style={{fontSize: 15, fontWeight: '300', lineHeight: 20, color:'#1E3152'}}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.
                                </Text>
                            </View>
                            <Divider/>
                        </View>
                    }
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

