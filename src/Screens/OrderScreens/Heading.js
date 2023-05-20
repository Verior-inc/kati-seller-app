import React from 'react';

import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Heading = props => {
  return (
    <View style={{alignSelf: 'flex-start', marginTop: props.margin}}>
      <Text
        style={{
          color: '#9ED5E3',
          marginLeft: wp('5.5%'),
          fontSize: hp('2%'),
          fontWeight: '500',
          fontFamily: 'FilsonProRegular-Regular',
        }}>
        {props.name}
      </Text>
    </View>
  );
};
