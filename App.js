import React, {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import Profile from './assets/Profile.svg';

import AuthProvider from './src/components/Authentication/AuthContext';
import MainNavigation from './src/mainNavigation/Mainnavigation';
import FlashMessage, {
  showMessage,
  hideMessage,
} from 'react-native-flash-message';
import {
  lightAccent,
  RegularLegecy, 
  Regular,
} from './src/components/styles/styles';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import messaging from '@react-native-firebase/messaging';
// import {firebase} from '@react-native-firebase/messaging';
// import notifee from '@notifee/react-native';
import {useState} from 'react';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
const App = () => {
  const connection = NetInfo.useNetInfo();
  const [recivedNotification, setRecivedNotification] = useState({});
  // const firebaseConfig = {
  //   apiKey: 'AIzaSyCFqCIeludTYRHUY9H0cVu8CDXH91HG3ks',
  //   authDomain: 'kati-aaa2d.firebaseapp.com',
  //   databaseURL: 'https://kati-aaa2d-default-rtdb.firebaseio.com',
  //   projectId: 'kati-aaa2d',
  //   storageBucket: 'kati-aaa2d.appspot.com',
  //   messagingSenderId: '948626058105',
  //   appId: '1:948626058105:web:d291617c0203c230401da8',
  //   measurementId: 'G-NGC619E0LC',
  // };

  // if (!firebase.apps.length) {
  //   firebase.initializeApp(firebaseConfig);
  // }

  // // else {
  // //   firebase.apps();
  // // }
  // async function onDisplayNotification(data) {
  //   // Request permissions (required for iOS)
  //   await notifee.requestPermission();

  //   // Create a channel (required for Android)
  //   const channelId = await notifee.createChannel({
  //     id: 'default',
  //     name: 'Default Channel',
  //   });

  //   // Display a notification
  //   await notifee.displayNotification({
  //     //remaing
  //     title: data?.message?.android?.title,
  //     body: data?.notification?.android?.body,
  //     android: {
  //       channelId,
  //       //   smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
  //       // pressAction is needed if you want the notification to open the app when pressed
  //       pressAction: {
  //         id: 'default',
  //       },
  //     },
  //   });
  // }

  // useEffect(() => {
  //   // Assume a message-notification contains a "type" property in the data payload of the screen to open

  //   messaging().onNotificationOpenedApp(remoteMessage => {
  //     console.log(
  //       'Notification caused app to open from background state:',
  //       remoteMessage.notification,
  //     );
  //     if (remoteMessage.data.message?.type == 'order') {
  //       navigation.navigate('Order', {
  //         screen: 'orderStack',
  //         params: {screen: 'Booking details order'},
  //       });
  //     }
  //   });

  //   // Check whether an initial notification is available
  //   messaging()
  //     .getInitialNotification()
  //     .then(remoteMessage => {
  //       if (remoteMessage) {
  //         console.log(
  //           'Notification caused app to open from quit state:',
  //           remoteMessage.notification,
  //         );
  //         if (remoteMessage.data.message?.type == 'order') {
  //           setInitialRoute('Order', {
  //             screen: 'orderStack',
  //             params: {screen: 'Booking details order'},
  //           }); // e.g. "Settings"
  //         }
  //       }
  //       //  setLoading(false);
  //     });

  //   notification();
  //   // save the token to the db
  // }, []);

  // useEffect(() => {
  //   messaging().setBackgroundMessageHandler(async remoteMessage => {
  //     // showNotification(remoteMessage)
  //     alert(JSON.stringify(remoteMessage));
  //     notification(remoteMessage);
  //     setRecivedNotification(remoteMessage);
  //   });
  // }, []);

  // useEffect(() => {
  //   messaging().onMessage(msg => {
  //     notification(msg);
  //     setRecivedNotification(msg);
  //     alert(JSON.stringify(msg));
  //     // showNotification(msg)
  //   });
  // }, []);

  // const notification = async () => {
  //   await messaging().registerDeviceForRemoteMessages();
  //   const token = await messaging().getToken();
  //   console.log(token);
  // };

  const toastConfig = {
    success: props => (
      <BaseToast
        {...props}
        style={{
          // borderLeftColor: 'transparent',
          height: hp('6'),
          width: wp('100%'),
          justifyContent: 'center',
        }}
        contentContainerStyle={{paddingHorizontal: 15, alignSelf: 'center'}}
        text1Style={{
          fontSize: hp('2'),
          fontWeight: '400',
          // alignSelf: 'center',
          textAlign: 'center',
        }}
        text2Style={{fontSize: hp('1.5'), textAlign: 'center', color: 'red'}}
      />
    ),
  };

  // Unsubscribe
  useEffect(() => {
    if (connection.isConnected === false) {
      Toast.show({
        text1: 'Network disconnected',
        text2: 'Please connect to a internet connection',
      });
    } else {
      Toast.hide();
    }
  }, [connection]);

  return (
    <Text>Hello world</Text>
    // // <GestureHandlerRootView style={{flex: 1}}>
    //   <AuthProvider>
    //     {/* <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}> */}
    //     <MainNavigation notification={recivedNotification} />
    //     {/* </SafeAreaView> */}
    //     <Toast autoHide={false} config={toastConfig} />
    //   </AuthProvider>
    // </GestureHandlerRootView>
  );
};

export default App;
