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
} from 'react-native';
import Payment from '../../../assets/Payment.svg';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {dardAccent, lightAccent} from '../../components/styles/styles';
import {FocusAwareStatusBar} from '../../components/Features/Statusbar';
import {useTranslation} from 'react-i18next';
const PaymentScreen = props => {
  const {t} = useTranslation();
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View
        style={{
          flexDirection: 'row',
          marginTop: wp('12%'),
          marginBottom: hp('1'),
          width: wp('100%'),
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: hp('3'),
            alignSelf: 'center',
            // height: hp('3'),
            // width: wp('5'),
            // backgroundColor: 'grey',
          }}>
          <AntDesign
            color={'grey'}
            name="left"
            size={hp('2.5')}
            onPress={() => props.navigation.goBack()}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            // position: 'absolute',

            alignSelf: 'center',
          }}>
          <Ionicons
            name="md-card-outline"
            size={hp('3')}
            style={{color: lightAccent}}
          />
          <Text
            style={{
              color: lightAccent,
              fontSize: hp('2.5%'),
              fontWeight: '500',
              fontFamily: 'FilsonProRegular-Regular',
            }}>
            {t('common:profile.payment.Heading')}
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: hp('2'),
            alignSelf: 'center',
            marginTop: wp('10'),
            color: 'black',
            fontFamily: 'FilsonProLight-Light',
          }}>
          {t('common:profile.payment.incomeearned')}
        </Text>
        <Text
          style={{
            fontSize: wp('8'),
            alignSelf: 'center',
            marginTop: wp('8'),
            fontWeight: '900',
            color: dardAccent,
            fontFamily: 'FilsonProRegular-Regular',
          }}>
          $2300
        </Text>
        <Text
          style={{
            fontSize: hp('2'),
            alignSelf: 'center',
            marginTop: wp('8'),
            color: 'black',
            fontFamily: 'FilsonProLight-Light',
          }}>
          {t('common:profile.payment.incomePending')}
        </Text>
        <Text
          style={{
            fontSize: wp('8'),
            alignSelf: 'center',
            marginTop: wp('10'),
            fontWeight: '900',
            color: dardAccent,
            fontFamily: 'FilsonProRegular-Regular',
          }}>
          $1200
        </Text>
      </View>
      <View style={{alignSelf: 'center', marginTop: hp('4')}}>
        <Payment height={200} width={200} />
      </View>
      <View style={{width: wp('90'), alignSelf: 'center'}}>
        <Text
          style={{
            fontSize: wp('4.5'),
            marginTop: wp('10'),
            alignSelf: 'center',
            color: 'grey',
            fontFamily: 'FilsonProBook-Book',
          }}>
          {t('common:profile.payment.ques1')}
        </Text>
        <Text
          style={{
            fontSize: wp('4.5'),
            alignSelf: 'center',
            color: 'grey',
            fontFamily: 'FilsonProBook-Book',
          }}>
          {t('common:profile.payment.ques2')}
        </Text>
      </View>
      <View
        style={{
          marginTop: wp('6'),

          height: hp('6'),
          width: wp('32'),
          alignSelf: 'center',
          backgroundColor: '#FFFFFF',
        }}>
        <Text
          style={{
            fontSize: wp('4'),
            alignSelf: 'center',
            color: lightAccent,
            marginTop: wp('3.5'),
            fontFamily: 'FilsonProBook-Book',
          }}>
          {t('common:profile.payment.button')}
        </Text>
      </View>
    </View>
  );
};

export default PaymentScreen;
