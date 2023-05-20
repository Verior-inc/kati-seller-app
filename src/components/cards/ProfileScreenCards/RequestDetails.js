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
import {strings} from '../../Localization';
const RequestDetails = () => {
  const {t} = useTranslation();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          alignSelf: 'center',
          borderColor: '#B7B7B7',
          borderWidth: 0.5,
          borderStyle: 'solid',
          width: wp('80%'),
          // height: hp('28%'),
          backgroundColor: '#FFFFFF',
          marginTop: wp('5%'),
        }}>
        <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>
          <View
            style={{
              flexDirection: 'row',
              width: wp('60%'),
              padding: wp('4%'),
              // justifyContent: 'space-around',
              // alignSelf: 'center',
            }}>
            <Image
              style={{
                width: wp('22%'),
                height: hp('6%'),
                // marginRight: wp('2%'),
              }}
              source={require('../../../../assets/Profile.png')}
            />
            <Text
              ellipsizeMode="tail"
              style={{
                width: wp('48%'),
                fontSize: hp('1.8'),
                color: 'black',
                marginLeft: hp('2'),
                fontFamily: 'FilsonProRegular-Regular',
              }}
              numberOfLines={2}>
              I will be Taking care of your child...
            </Text>
          </View>

          <View
            style={{
              marginLeft: wp('3.5%'),
              marginTop: wp('2%'),
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={styles.bTxt}>
              {t('common:profile:Buyersrequest.bookingid')}
            </Text>
            <Text style={styles.gTxt}>#FFFF489</Text>
          </View>
          <View
            style={{
              marginLeft: wp('3.5%'),
              marginTop: wp('3%'),
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={styles.bTxt}>
              {t('common:profile:Buyersrequest.date')}
            </Text>
            <Text style={styles.gTxt}>11-1-2002</Text>
          </View>
          <View
            style={{
              marginLeft: wp('3.5%'),
              marginTop: wp('3%'),
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginBottom: hp('3'),
            }}>
            <Text style={styles.bTxt}>
              {t('common:profile:Buyersrequest.time')}
            </Text>
            <Text style={styles.gTxt}>15:05</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bTxt: {
    fontSize: wp('4%'),
    color: 'black',
    // marginTop: hp('0.5'),
    fontFamily: 'FilsonProBook-Book',
  },
  gTxt: {
    marginRight: wp('5'),
    color: '#B7B7B7',
    fontSize: wp('4'),
    color: '#B7B7B7',
    fontFamily: 'FilsonProBook-Book',
  },
});

export default RequestDetails;
