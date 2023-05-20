import React, {useState} from 'react';
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
  Switch,
} from 'react-native';
import Modal from 'react-native-modal';
import {ExpandableListView} from 'react-native-expandable-listview';
import Flag from '../../components/assests/Flag.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LocationPicker} from './LocationPicker/LocationPicker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FocusAwareStatusBar} from '../../components/Features/Statusbar';
import {
  borderColor,
  lightAccent,
  Regular,
} from '../../components/styles/styles';

import {SettingLogo} from '../../components/SettingLogo/SettingLogo';
import {useTranslation} from 'react-i18next';
const Location = props => {
  const {t} = useTranslation();
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <ScrollView>
        <SettingLogo onPress={() => props.navigation.goBack()} />
        <View style={{padding: wp('7'), flexDirection: 'row'}}>
          <Ionicons name="location-outline" size={wp('8')} color={'#B7B7B7'} />
          <Text style={styles.Heading}>
            {t('common:profile:settings:Location:Heading')}
          </Text>
        </View>

        <LocationPicker />
        <TouchableOpacity
          style={{
            width: wp('80'),
            height: hp('6.5'),
            backgroundColor: lightAccent,
            alignSelf: 'center',
            // position: 'absolute',
            // bottom: hp('2'),
            marginTop: hp('5'),
            borderColor: borderColor,
            fontFamily: Regular,
            borderWidth: hp('0.1'),
            justifyContent: 'center',
            borderRadius: 6,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              // marginTop: wp('3.9'),
              fontSize: 17,
              color: '#FFFFFF',
            }}>
            {t('common:common:savebutton')}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  Heading: {
    fontSize: wp('4%'),
    fontFamily: 'FilsonProBook-Book',
    marginLeft: wp('3%'),
    color: '#B7B7B7',
    marginTop: wp('1.5'),
  },
  Field: {
    marginTop: wp('8'),
  },
  input: {
    borderWidth: wp('0.1'),
    marginTop: wp('3'),
    width: wp('90'),
    alignSelf: 'center',
    height: hp('4.8'),
    backgroundColor: '#FFFFFF',
  },
  font: {
    fontSize: wp('4.5'),
    marginLeft: wp('4.9'),
    color: '#B7B7B7',
    fontFamily: 'FilsonProBook-Book',
  },
  modalFiled: {
    alignSelf: 'center',
    width: wp('75'),
    backgroundColor: '#FFFFFF',
    borderWidth: 0.3,
    borderColor: '#B7B7B7',
    height: hp('5'),
    marginTop: hp('1'),
    borderRadius: 5,
  },
  modalfiledTxt: {
    fontFamily: 'FilsonProBook-Book',
    fontSize: hp('1.5'),
    color: 'black',
    // marginTop: hp('2'),
  },
});
