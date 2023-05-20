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
  TouchableOpacity,
  Modal,
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
} from '../../../components/styles/styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Tick from '../../../../assets/fonts/Tick.svg';
import {useTranslation} from 'react-i18next';
export const RequirementsCard = () => {
  const {t} = useTranslation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        height: hp('40'),
        width: '85%',
        alignSelf: 'center',
        marginTop: hp('2'),
        flexDirection: 'column',
        borderWidth: 0.5,
        borderColor: '#B7B7B7',
      }}>
      <Text style={styles.Heading}>
        {t('common:card:BookingRequirements:Heading')}
      </Text>
      <View
        style={{flexDirection: 'row', marginLeft: hp('2'), marginTop: hp('3')}}>
        <Tick height={15} width={20} />
        <Text style={styles.txt}> i will be taking care of child</Text>
      </View>
      <View
        style={{flexDirection: 'row', marginLeft: hp('2'), marginTop: hp('3')}}>
        <Tick height={15} width={20} />
        <Text style={styles.txt}>
          {' '}
          i will make him what is good for his health{' '}
        </Text>
      </View>
      <View
        style={{flexDirection: 'row', marginLeft: hp('2'), marginTop: hp('3')}}>
        <Tick height={15} width={20} />
        <Text style={styles.txt}> i will be taking care of child</Text>
      </View>
      <TouchableOpacity
        style={{
          width: hp('34'),
          borderWidth: 0.3,
          alignSelf: 'center',
          marginTop: hp('1.5'),
          height: hp('5'),
          borderColor: lightAccent,
          borderRadius: 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: Regular,
            color: lightAccent,
          }}>
          {t('common:card:BookingRequirements:buttonReschedule')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: hp('34'),
          borderWidth: 0.3,
          alignSelf: 'center',
          marginTop: hp('1.5'),
          height: hp('5'),
          borderColor: lightAccent,
          borderRadius: 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: Regular,
            color: lightAccent,
          }}>
          {t('common:card:BookingRequirements:buttonDelivernow')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Heading: {
    fontFamily: Regular,
    fontSize: 20,
    margin: hp('2'),
    color: lightAccent,
  },
  txt: {
    fontFamily: 'FilsonProBook-Book',
    fontSize: 16,
    marginLeft: hp('1'),
    color: '#B7B7B7',
    width: hp('34'),
    marginTop: hp('-0.4'),
  },
});
