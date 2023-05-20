import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
//
// import DetailOrderScreen from '../Screens/ProfileScreens/Mygigs/DetailOrderScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../Screens/ProfileScreens/Profile';
import BuyersReq from '../Screens/ProfileScreens/BuyersReq';
import PaymentScreen from '../Screens/ProfileScreens/PaymentScreen';
import Earningscreen from '../Screens/ProfileScreens/Earningscreen';

import Settings from '../Screens/ProfileScreens/Settings';
import EditProfile from '../Screens/ProfileScreens/EditProfile';
import PasswordScreen from '../Screens/ProfileScreens/PasswordScreen';
import Location from '../Screens/ProfileScreens/Location';
import NotificationSettingsS from '../Screens/ProfileScreens/NotificationSettingsS';
import BookingDetails from '../Screens/ProfileScreens/BookingDetails';
import {Mygigs} from '../Screens/ProfileScreens/Mygigs/Mygigs';

const ProfileScreenStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="BuyersReq"
        component={BuyersReq}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BookingDetails"
        component={BookingDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Earnings"
        component={Earningscreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Mygigs"
        component={Mygigs}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PasswordScreen"
        component={PasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NotificationSettingsS"
        component={NotificationSettingsS}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Location"
        component={Location}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ProfileScreenStack;
