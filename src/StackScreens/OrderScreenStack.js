import React, {useEffect} from 'react';
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
import {BookingDetails} from '../Screens/OrderScreens/BookingDetails';
import OrderScreen from '../Screens/OrderScreens/OrderScreen';

const OrderScreenStack = ({route}) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OrderTab"
        component={OrderScreen}
        options={{headerShown: false}}
        initialParams={{params: route.params?.post}}
      />
      <Stack.Screen
        name="Booking details order"
        component={BookingDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default OrderScreenStack;
