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
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Inbox from '../Screens/InboxScreens/Inbox';
import MsgScreen from '../Screens/InboxScreens/MsgScreen';
const Stack = createNativeStackNavigator();
const InboxScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inbox"
        component={Inbox}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default InboxScreenStack;
