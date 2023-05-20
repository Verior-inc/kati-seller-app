import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
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
export const HeadingWithBtn = props => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: hp('7%'),
        // alignSelf: 'center',
        width: wp('100%'),
      }}>
      <StatusBar backgroundColor={'#F9F9F9'} barStyle={'dark-content'} />

      <View
        style={{
          // position: 'absolute',
          // backgroundColor: 'grey',
          // height: hp('5'),
          flexDirection: 'row',
          justifyContent: 'center',
          width: wp('100'),
        }}>
        <AntDesign
          style={{color: 'grey', position: 'absolute', left: hp('3')}}
          name="left"
          size={hp('2.5')}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            color: lightAccent,
            fontSize: hp('2%'),
            fontWeight: '500',
            fontFamily: 'FilsonProRegular-Regular',
            alignSelf: 'center',
            // textAlign: 'center',
            // position: 'absolute',
            // alignSelf: 'center',
          }}>
          {props.name}
        </Text>
      </View>
    </View>
  );
};
