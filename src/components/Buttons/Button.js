import React from 'react';
import {Text, View, TouchableOpacity, Pressable} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {borderColor, dardAccent, grey, Regular} from '../styles/styles';

const Button = ({onPress, label, disable}) => (
  <Pressable
    disabled={disable}
    onPress={onPress}
    style={{
      width: hp('36.5'),
      backgroundColor: disable ? grey : dardAccent,
      alignSelf: 'center',
      marginTop: hp('1.5'),
      height: hp('5.5'),
      borderColor: borderColor,
      borderRadius: 2,
      borderWidth: hp('0.1'),
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Text
      style={{
        fontSize: 15,
        fontFamily: Regular,
        color: '#FFFFFF',
        alignSelf: 'center',
      }}>
      {label}
    </Text>
  </Pressable>
);

export default Button;
