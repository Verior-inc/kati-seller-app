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
  Dimensions,
  Pressable,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  borderColor,
  lightAccent,
  RegularLegecy,
  dardAccent,
  Regular,
  semiBoldLegecy,
  grey,
} from '../../components/styles/styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTranslation} from 'react-i18next';
export const SettingLogo = props => {
  const {t} = useTranslation();
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: wp('12'),
        justifyContent: 'center',
      }}>
      <AntDesign
        style={{position: 'absolute', left: hp('3'), alignSelf: 'center'}}
        color={'#B7B7B7'}
        name="left"
        size={20}
        onPress={props.onPress}
      />
      <Ionicons
        name="md-settings-sharp"
        color={lightAccent}
        size={wp('6')}
        style={{alignSelf: 'center'}}
      />
      <Text
        style={{
          color: lightAccent,
          fontSize: hp('2%'),
          marginLeft: wp('3'),
          fontFamily: 'FilsonProRegular-Regular',
          alignSelf: 'center',
        }}>
        {t('common:profile:settings:Heading')}
        {/* {strings.profile.settings.Heading} */}
      </Text>
    </View>
  );
};
