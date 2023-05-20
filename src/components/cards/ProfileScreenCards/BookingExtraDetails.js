import React from 'react';
import {useTranslation} from 'react-i18next';
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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {strings} from '../../Localization';
import {lightAccent} from '../../styles/styles';
const BookingExtraDetails = () => {
  const {t} = useTranslation();
  return (
    <View style={{flex: 1, marginBottom: hp('4')}}>
      <View
        style={{
          borderWidth: wp('0.1%'),
          borderColor: '#B7B7B7',
          width: wp('80%'),
          alignSelf: 'center',
          marginTop: wp('4'),
          // height: hp('59'),
          backgroundColor: '#FFFFFF',
        }}>
        <View style={{padding: hp('2')}}>
          <Text
            style={{
              color: lightAccent,
              fontSize: wp('4.5%'),
              fontFamily: 'FilsonProBook-Book',
            }}>
            {t('common:card:BookingdetailsProfile:heading')}
          </Text>
          <Text style={styles.quesText}>Q.How old are your child?</Text>
          <Text style={styles.AnsText}>A. 2 Years old</Text>
          <Text style={styles.quesText}>Q.Does he Speaks?</Text>
          <Text style={styles.AnsText}>A. yess</Text>
          <Text style={styles.quesText}>Description</Text>
          <Text numberOfLines={5} style={styles.AnsText}>
            Lorem ipsum dolor
            adskjblkajdbflkabdas,jbdkjmnasmndambas,dbkfsjbj,asb,bs,asbf,mslsabdas,jb
            basjk kajbkb kasb
          </Text>
        </View>
        <View style={{marginBottom: hp('3')}}>
          <View style={styles.button}>
            <Text
              style={{
                color: lightAccent,
                alignSelf: 'center',
                marginBottom: wp('2.5'),
                fontFamily: 'FilsonProBook-Book',
                fontSize: hp('1.7'),
              }}>
              {t('common:card:BookingdetailsProfile:button1')}
            </Text>
          </View>
          <View style={styles.button}>
            <Text
              style={{
                fontSize: hp('1.7'),
                color: lightAccent,
                alignSelf: 'center',
                marginBottom: wp('2.5'),
                fontFamily: 'FilsonProBook-Book',
              }}>
              {t('common:card:BookingdetailsProfile:button2')}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quesText: {
    fontSize: wp('4%'),
    marginTop: wp('5'),
    color: 'black',
    fontFamily: 'FilsonProBook-Book',
  },
  AnsText: {
    fontSize: wp('4%'),
    marginTop: wp('3'),
    color: '#B7B7B7',
    fontFamily: 'FilsonProBook-Book',
  },
  button: {
    height: hp('5%'),
    borderWidth: wp('0.1'),
    borderRadius: wp('2'),
    width: wp('65%'),
    alignSelf: 'center',
    borderColor: lightAccent,
    marginTop: wp('4'),
    justifyContent: 'flex-end',
  },
});

export default BookingExtraDetails;
