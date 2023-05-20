import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
  Platform,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const BackButton = () => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row', marginTop: wp('7%')}}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
      <AntDesign
        style={{marginLeft: wp('9%'), marginTop: hp('3%'), color: 'grey'}}
        name="left"
        size={hp('3%')}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};
export default BackButton;
