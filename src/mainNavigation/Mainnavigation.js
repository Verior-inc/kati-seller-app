import React, {useEffect, useState} from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
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
import {
  extraBold,
  semiBold,
  RegularLegecy,
  dardAccent,
  screenBackground,
  white,
  borderColor,
  titleColor,
  grey,
  lightAccent,
  black,
  book,
  Regular,
  Heavy,
  light,
  medium,
  semiBoldLegecy,
} from '../components/styles/styles';
import Profile from '../../assets/Profile.svg';
import Chat from '../../assets/Chat.svg';
import Homeicon from '../../assets/Homeicon.svg';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InboxScreenStack from '../../src/StackScreens/InboxScreenStack';
import Home from '../../src/Screens/Home/Home';
import MsgScreen from '../../src/Screens/InboxScreens/MsgScreen';
import OrderScreenStack from '../../src/StackScreens/OrderScreenStack';
import NotificationScreenStack from '../../src/StackScreens/NotificationScreenStack';
import ProfileScreenStack from '../../src/StackScreens/ProfileScreenStack';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {ViewDetail} from '../../src/Screens/ProfileScreens/Mygigs/ViewDetails';
import {Splash} from '../../src/Screens/Splash/Splash';
import {Login} from '../../src/Screens/Splash/Login';
import '../../src/components/Localization/index';
import {useTranslation} from 'react-i18next';
import AuthProvider from '../../src/components/Authentication/AuthContext';
import EncryptedStorage from 'react-native-encrypted-storage';
import SignUpScreen from '../Screens/SignUp/SignupScreen';
import RegisterScreen from '../Screens/SignUp/ProfileCompletion';
import ProfileCompletion from '../Screens/SignUp/ProfileCompletion';
const MainNavigation = ({notification}) => {
  const Stack = createNativeStackNavigator();

  //    const test = async () => {
  //  let test = await EncryptedStorage.getItem('token');
  //      console.log(test);
  //    };

  //    test();
  //   console.log(test);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false, gestureEnabled: false}}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name="ProfileCompletion"
            component={ProfileCompletion}
            options={{headerShown: false, gestureEnabled: false}}
          />

          <Stack.Screen
            name="HomeT"
            component={Tabs}
            options={{
              headerShown: false,
              gestureEnabled: false,
              fullScreenGestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="InboxStack"
            component={InboxScreenStack}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name="MsgScreen"
            component={MsgScreen}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            options={{gestureEnabled: false}}
            name="Order"
            component={OrderScreenStack}
          />
          <Stack.Screen
            options={{gestureEnabled: false}}
            name="Notifications"
            initialParams={notification}
            component={NotificationScreenStack}
          />
          <Stack.Screen
            options={{gestureEnabled: false}}
            name="ProfileScreensStack"
            component={ProfileScreenStack}
          />
          <Stack.Screen
            name="ViewDetail"
            component={ViewDetail}
            options={{headerShown: false, gestureEnabled: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export function Tabs() {
  const Tab = createBottomTabNavigator();
  const {t} = useTranslation();

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={t('common:home:Home')}
        component={Home}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({focused}) => {
            return (
              <View style={{marginTop: wp(0.5)}}>
                <Homeicon
                  height={25}
                  width={25}
                  fill={focused ? lightAccent : '#B7B7B7'}
                />
              </View>
            );
          },
          tabBarActiveTintColor: lightAccent,
          tabBarInactiveTintColor: '#B7B7B7',
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name={t('common:Chat:Chat')}
        component={InboxScreenStack}
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Chat
                height={25}
                width={25}
                fill={focused ? lightAccent : '#B7B7B7'}
              />
            );
          },
          tabBarActiveTintColor: lightAccent,
          tabBarInactiveTintColor: '#B7B7B7',
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name={'orderStack'}
        component={OrderScreenStack}
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name="md-list-outline"
                size={hp('3.5')}
                color={focused ? lightAccent : '#B7B7B7'}
              />
            );
          },
          tabBarActiveTintColor: lightAccent,
          tabBarInactiveTintColor: '#B7B7B7',
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name={'Notifications'}
        component={NotificationScreenStack}
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Fontisto
                name="bell"
                size={hp('3')}
                color={focused ? lightAccent : '#B7B7B7'}
              />
            );
          },
          tabBarActiveTintColor: lightAccent,
          tabBarInactiveTintColor: '#B7B7B7',
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name={'profile'}
        component={ProfileScreenStack}
        options={{
          title: '',
          tabBarHideOnKeyboard: true,
          headerShown: false,

          tabBarIcon: ({focused}) => {
            return (
              <Profile
                height={25}
                width={25}
                fill={focused ? lightAccent : '#B7B7B7'}
                // color={focused ? '#9ED5E3' : null}
              />
            );
          },
          tabBarActiveTintColor: lightAccent,
          tabBarInactiveTintColor: '#B7B7B7',
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNavigation;
