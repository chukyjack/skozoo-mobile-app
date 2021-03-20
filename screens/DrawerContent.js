import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {AuthContext} from '../components/context';

export function DrawerContent(props) {
  const paperTheme = useTheme();

  const {signOut, toggleTheme} = React.useContext(AuthContext);

  return (
    <View style={{flex: 1}}>
      <Drawer.Section
        style={{
          width: undefined,
          padding: 16,
          marginBottom: -50,
          paddingTop: 40,
          backgroundColor: '#1E3152',
        }}>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/logoa.png')}
              // size={10}
              style={styles.logo}
            />
            {/*<View style={{marginLeft:15, flexDirection:'column'}}>*/}
            {/*    <Title style={styles.title}>Skozoo tutors</Title>*/}
            {/*    /!*<Caption style={styles.caption}>@j_doe</Caption>*!/*/}
            {/*</View>*/}
          </View>
        </View>
      </Drawer.Section>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Dashboard"
              style={styles.menuitem}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Appointments"
              style={styles.menuitem}
              onPress={() => {
                props.navigation.navigate('Appointment');
              }}
            />
            <DrawerItem
                icon={({color, size}) => (
                    <Icon name="account-outline" color={color} size={size} />
                )}
                label="Custom Appointment"
                style={styles.menuitem}
                onPress={() => {
                  props.navigation.navigate('CustomAppointment');
                }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Opportunities"
              style={styles.menuitem}
              activeTintColor="#000"
              activeBackgroundColor={styles.menuitem}
              onPress={() => {
                props.navigation.navigate('Opportunity');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Gigs"
              style={styles.menuitem}
              onPress={() => {
                props.navigation.navigate('BookmarkScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Messages"
              style={styles.menuitem}
              onPress={() => {
                props.navigation.navigate('SettingsScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Invoice"
              style={styles.menuitem}
              onPress={() => {
                props.navigation.navigate('SettingsScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Students"
              style={styles.menuitem}
              onPress={() => {
                props.navigation.navigate('SettingsScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Profile"
              style={styles.menuitem}
              onPress={() => {
                props.navigation.navigate('SettingsScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="Other Revenue"
              style={styles.menuitemLast}
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
          </Drawer.Section>
          {/*<Drawer.Section title="Preferences">*/}
          {/*    <TouchableRipple onPress={() => {toggleTheme()}}>*/}
          {/*        <View style={styles.preference}>*/}
          {/*            <Text>Dark Theme</Text>*/}
          {/*            <View pointerEvents="none">*/}
          {/*                <Switch value={paperTheme.dark}/>*/}
          {/*            </View>*/}
          {/*        </View>*/}
          {/*    </TouchableRipple>*/}
          {/*</Drawer.Section>*/}
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 20,
    marginTop: 3,
    fontWeight: 'bold',
    color: '#fff',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    // marginTop: 0,
    borderBottomWidth: 0,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  logo: {
    width: 200,
    height: 90,
    borderColor: '#fff',
  },
  menuitem: {
    borderBottomColor: '#A3A3A3',
    borderBottomWidth: 0.3,
    color: '#1E3152',
    fontFamily: 'Times New Roman',
    fontWeight: '800',
    fontSize: 150,
    paddingTop: 5,
    paddingBottom: 5,
  },
  menuitemLast: {
    borderBottomColor: '#A3A3A3',
    borderBottomWidth: 0,
    color: '#1E3152',
    fontFamily: 'Times New Roman',
    fontWeight: '800',
    fontSize: 150,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
