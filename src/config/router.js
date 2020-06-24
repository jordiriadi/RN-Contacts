import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View } from 'react-native';
// import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ContactListScreen from '../screens/contact/ContactListScreen';
import AddContactScreen from '../screens/contact/AddContactScreen';
import EditContactScreen from '../screens/contact/EditContactScreen';
import ContactDetailScreen from '../screens/contact/ContactDetailScreen';
import DeleteAlert from '../screens/contact/components/DeleteAlert';
// import ProfileScreen from '../screens/profile/Profile';
// import SettingScreen from '../screens/setting/Setting';
// import AddNewContactScreen from '../screens/contact/AddNewContactScreen';
// import MovieListScreen from '../screens/movie/MovieListScreen';
// import MovieDetailScreen from '../screens/movie/MovieDetailScreen';
// import WebViewComponent from '../components/WebViewComponent';
// import BookingResultScreen from '../screens/movie/BookingResultScreen';
// import PaymentListScreen from '../screens/payment/PaymentListScreen';
// import { UPCOMING } from '../utils/constants';
import Button from '../components/Button';
import Styles from '../utils/Styles';


export const AppStack = createStackNavigator(
  {
    // MainScreenTabs: {
    //   screen: MainScreenTabs,
    //   navigationOptions: {
    //     header: null,
    //   },
    // },
    ContactListScreen: {
      screen: ContactListScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Contacts',
        headerRight: () => (
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              style={{ marginRight: Styles.DefaultMargin*3, color: Styles.SecondaryColor }}
              name="md-add"
              size={30}
              onPress={() => navigation.push('AddContactScreen')}
            />
            <Ionicons
              style={{ marginRight: Styles.DefaultMargin*3, color: Styles.SecondaryColor }}
              name="md-search"
              size={30}
              // onPress={() => navigation.push('Setting')}
            />
            <Ionicons
              style={{ marginRight: Styles.DefaultMargin*3, color: Styles.SecondaryColor }}
              name="md-more"
              size={30}
              // onPress={() => navigation.push('Setting')}
            />
          </View>
        ),
      }),
    },
    AddContactScreen: {
      screen: AddContactScreen,
      navigationOptions: {}
    },
    EditContactScreen: {
      screen: EditContactScreen,
      navigationOptions: {},
    },
    ContactDetailScreen: {
      screen: ContactDetailScreen,
      navigationOptions: ({navigation}) => ({
      }),
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerTintColor: Styles.SecondaryColor,
      headerStyle: { backgroundColor: Styles.PrimaryColor },
    }),
  },
);

export const RootStack = createSwitchNavigator({
  MainScreen: AppStack,
});

export default createAppContainer(RootStack);
