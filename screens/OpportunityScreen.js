import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, ScrollView} from 'react-native';
import Opportunitycard, {
  OpportunitycardDetail,
} from '../components/opportunitycard';

export default class OpportunityScreen extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={{margin: 15, marginBottom: 0}}>
          <Text style={{color: '#1E3152', fontSize: 20, fontWeight: 'bold'}}>
            Tutoring Opportunities
          </Text>
        </View>
        <View
          style={styles.container}
          contentContainerStyle={{justifyContent: 'space-between'}}>
          <FlatList
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
            renderItem={({item}) => <Opportunitycard />}
          />
        </View>
      </View>
    );
  }
}

export class AcceptOpportunityScreen extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={{margin: 15, marginBottom: 0}}>
          <Text style={{color: '#1E3152', fontSize: 20, fontWeight: 'bold'}}>
            Tutoring Opportunities
          </Text>
        </View>
        <OpportunitycardDetail />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F8F9FE',
    flexDirection: 'column',
  },
  container: {
    backgroundColor: '#F8F9FE',
  },
});
