import React from 'react';
import {StatusBar, StyleSheet, Text, View, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
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
const HeadingTxt = props => {
  return (
    <View
      style={{
        marginTop: hp('6'),
        alignSelf: 'center',
      }}>
      <Text
        style={{
          color: lightAccent,
          fontSize: hp('2.5%'),
          fontWeight: '500',
          fontFamily: 'FilsonProRegular-Regular',
        }}>
        {props.name}
      </Text>
    </View>
  );
};

export default HeadingTxt;
