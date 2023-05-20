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
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
export const Card = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        height: hp('28'),
        width: '85%',
        alignSelf: 'center',
        marginTop: hp('2'),
        flexDirection: 'column',
        borderWidth: 0.5,
        borderColor: '#B7B7B7',
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{
            width: wp('22%'),
            height: hp('6%'),
            marginTop: hp('2'),
            marginLeft: hp('1'),
          }}
          source={require('../../../../assets/Profile.png')}
        />
        <Text ellipsizeMode="tail" numberOfLines={2} style={styles.Txt}>
          I will be taking care of your child
        </Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={styles.cardTxt}>{t('common:order:OrderedBy')}</Text>
        <Text style={styles.cardRightTxt}>@thisthis.com</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.cardTxt}>{t('common:order:Delivery')}</Text>
        <Text style={{...styles.cardRightTxt}}>25, Apr</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.cardTxt}>{t('common:order:Totalhours')}</Text>
        <Text style={{...styles.cardRightTxt}}>8</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.cardTxt}>{t('common:order:TotalPayment')}</Text>
        <Text style={{...styles.cardRightTxt}}>$67</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Txt: {
    width: wp('50%'),
    fontSize: hp('2'),
    color: 'black',
    marginLeft: hp('2'),
    fontFamily: 'FilsonProRegular-Regular',
    marginTop: hp('2'),
  },
  cardTxt: {
    marginLeft: hp('2'),
    marginTop: hp('2'),
    fontSize: wp('3.8'),
    color: 'black',
    fontFamily: 'FilsonProBook-Book',
  },
  cardRightTxt: {
    // marginLeft: hp('10'),
    marginTop: hp('1.5'),
    fontSize: wp('3.8'),
    position: 'absolute',
    right: hp('3'),
    fontFamily: 'FilsonProBook-Book',
    color: '#B7B7B7',
  },
});
