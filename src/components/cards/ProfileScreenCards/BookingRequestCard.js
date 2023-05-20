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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {strings} from '../../Localization';
import {
  borderColor,
  RegularLegecy,
  Regular,
  lightAccent,
  grey,
} from '../../styles/styles';
import {useTranslation} from 'react-i18next';
const BookingRequestCard = props => {
  const navigation = useNavigation();
  const {t} = useTranslation();

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          alignSelf: 'center',
          borderColor: grey,
          borderWidth: 0.5,
          borderStyle: 'solid',
          width: wp('80%'),
          height: hp('30'),
          backgroundColor: '#FFFFFF',
          marginTop: wp('5%'),
          flex: 1,
        }}>
        <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>
          <View
            style={{
              flexDirection: 'row',
              // width: wp('60%'),
              padding: wp('4%'),
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
                width: wp('50%'),
                fontSize: hp('2'),
                color: 'black',
                // marginLeft: hp('2'),
                position: 'absolute',
                fontFamily: 'FilsonProRegular-Regular',
                right: wp('1'),
                top: hp('2'),
              }}
              numberOfLines={2}>
              I will be Taking care of your child...
            </Text>
          </View>

          <View
            style={{
              marginLeft: wp('3.5%'),

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
            }}>
            <Text style={styles.bTxt}>
              {t('common:profile:Buyersrequest.time')}
            </Text>
            <Text style={styles.gTxt}>15:05</Text>
          </View>

          <TouchableOpacity
            style={{
              borderColor: lightAccent,
              borderWidth: 0.7,
              width: wp('70%'),
              alignSelf: 'center',
              height: hp('4.8%'),
              marginTop: wp('4%'),
            }}
            onPress={() => navigation.navigate('BookingDetails')}>
            <Text
              style={{
                alignSelf: 'center',
                marginTop: wp('2.5'),
                color: lightAccent,
                fontFamily: Regular,
              }}>
              {t('common:profile:Buyersrequest.button')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bTxt: {
    fontSize: wp('4%'),
    color: 'black',
    fontFamily: RegularLegecy,
  },
  gTxt: {
    marginRight: wp('5'),
    color: '#B7B7B7',
    fontSize: wp('4'),
    color: '#B7B7B7',
    fontFamily: RegularLegecy,
  },
});

export default BookingRequestCard;
