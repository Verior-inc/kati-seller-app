import React from 'react';

import {StatusBar, StyleSheet, Text, View} from 'react-native';
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
} from '../../../components/styles/styles';

export const Heading = props => {
  return (
    <View style={{alignSelf: 'flex-start', marginTop: props.margin}}>
      <Text
        style={{
          color: dardAccent,
          marginLeft: wp('5%'),
          fontSize: hp('2%'),
          fontWeight: '500',
          fontFamily: 'FilsonProRegular-Regular',
        }}>
        {props.name}
      </Text>
    </View>
  );
};
