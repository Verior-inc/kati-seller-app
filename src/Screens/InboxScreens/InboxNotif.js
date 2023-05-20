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
} from '../../components/styles/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const InboxNotif = props => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
      <TouchableOpacity onPress={() => navigation.push('MsgScreen')}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            // marginLeft: wp('6'),
            marginTop: hp('3'),
          }}>
          <Image
            source={require('../../../assets/Profile.png')}
            style={{
              borderRadius: wp('100'),
              height: hp('5.5'),
              width: wp('11.5'),
            }}
          />

          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                marginTop: wp('2'),
                marginLeft: wp('2'),
                color: 'black',
                fontFamily: 'FilsonProBook-Book',
              }}>
              Joshef
            </Text>
            <Text
              numberOfLines={1}
              style={{
                marginLeft: wp('2'),
                width: wp('45'),
                color: 'black',
                fontFamily: 'FilsonProBook-Book',
              }}>
              This is insane to see you ansn
            </Text>
          </View>
          <View
            style={{
              borderRadius: wp('100'),
              backgroundColor: lightAccent,
              height: hp('2.3'),
              width: wp('4.9'),
              marginLeft: wp('23'),
              marginTop: wp('4.7'),
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                alignSelf: 'center',
                fontSize: hp('1.4'),
              }}>
              1
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InboxNotif;
