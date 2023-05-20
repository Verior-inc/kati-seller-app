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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import NotificationsTab from '../../NotifTab/NotificationsTab';
import NotificationScreen from '../Screens/NotificationScreen/NotificationScreen';

const NotificationScreenStack = ({route}) => {
  const Stack = createNativeStackNavigator();
  // console.log('stack', route.params);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NotificationTab"
        // initialParams={{query: 'tset'}}
        component={NotificationScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default NotificationScreenStack;
