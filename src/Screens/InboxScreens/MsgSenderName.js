import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {lightAccent} from '../../components/styles/styles';
export const HeadingName = ({user}) => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row', marginTop: hp('8%')}}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <AntDesign
        style={{position: 'absolute', color: 'grey', left: -150}}
        name="left"
        size={hp('2.7')}
        onPress={() => navigation.goBack()}
      />
      <View style={{alignSelf: 'center'}}>
        <Text
          style={{
            color: lightAccent,
            fontSize: hp('2.3%'),
            fontWeight: '500',
            fontFamily: 'FilsonProRegular-Regular',
          }}>
          {user}
        </Text>
      </View>
    </View>
  );
};
