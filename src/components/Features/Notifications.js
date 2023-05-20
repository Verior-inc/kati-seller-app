import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {dardAccent, semiBold} from '../styles/styles';
import {useNavigation} from '@react-navigation/native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
const Notifications = props => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        props?.data?.type == 'order'
          ? navigation.navigate('Order', {
              screen: 'Booking details order',

              // params: {screen: 'Booking details order'},
            })
          : navigation.navigate('ProfileScreensStack');
      }}
      style={{flex: 1}}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
      <View
        style={{
          marginTop: wp('9'),
          marginLeft: wp('10'),
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: wp('3'),
            backgroundColor: dardAccent,
            height: hp('1.5'),
            borderRadius: wp('100'),
            marginTop: wp('4'),
          }}></View>
        <View style={{flexDirection: 'column'}}>
          <Text
            style={{
              marginLeft: wp('5'),
              width: wp('55'),
              fontSize: wp('3.5'),
              color: props.color,
              fontFamily: semiBold,
              lineHeight: hp('2.5'),
              marginTop: hp('1'),
            }}>
            {props?.data.title}
          </Text>
          <Text
            style={{
              marginLeft: wp('5'),
              width: wp('55'),
              fontSize: wp('3.5'),
              color: props.color,
              fontFamily: 'FilsonProBook-Book',
              lineHeight: hp('2.5'),
            }}>
            {props?.data?.body}
          </Text>
          <Text
            style={{
              marginLeft: wp('5'),
              marginTop: hp('0.6'),
              color: '#B7B7B7',
            }}>
            22:34
          </Text>
        </View>
        <SimpleLineIcons
          name="lock"
          size={wp('6')}
          style={{
            marginLeft: wp('10'),
            color: dardAccent,
            marginTop: hp('0.5'),
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Notifications;

//  <View
//    style={{
//      marginTop: wp('9'),
//      marginLeft: wp('10'),
//      flexDirection: 'row',
//    }}>
//    <View
//      style={{
//        width: wp('3'),
//        backgroundColor: dardAccent,
//        height: hp('1.5'),
//        borderRadius: wp('100'),
//        marginTop: wp('4'),
//      }}></View>
//    <View style={{flexDirection: 'column'}}>
//      <Text
//        style={{
//          marginLeft: wp('5'),
//          width: wp('60'),
//          fontSize: wp('3.5'),
//          color: props.color,
//          fontFamily: 'FilsonProBook-Book',
//        }}>
//        Josef has sent you a message
//      </Text>
//      <Text
//        style={{
//          marginLeft: wp('5'),
//          marginTop: hp('0.6'),
//          color: '#B7B7B7',
//        }}>
//        22:34
//      </Text>
//    </View>
//    <Image
//      source={require('../../../assets/Profile.png')}
//      style={{
//        borderRadius: wp('100'),
//        height: hp('5'),
//        width: wp('10'),
//        marginLeft: wp('4'),
//      }}
//    />
//  </View>;
