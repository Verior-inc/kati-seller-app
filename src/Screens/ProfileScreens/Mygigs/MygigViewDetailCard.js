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
import {lightAccent} from '../../../components/styles/styles';
import {FocusAwareStatusBar} from '../../../components/Features/Statusbar';
import {useTranslation} from 'react-i18next';
export const MygigViewDetailCard = props => {
  const navigation = useNavigation();
  const data = props.data;
  console.log(data);
  const {t} = useTranslation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        height: hp('22'),
        width: '85%',
        alignSelf: 'center',
        marginTop: hp('2'),
        flexDirection: 'column',
        borderWidth: 0.5,
        borderColor: '#B7B7B7',
      }}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{
            width: wp('22%'),
            height: hp('10%'),
            marginTop: hp('2'),
            marginLeft: hp('2.6'),
          }}
          source={require('../../../../assets/Profile.png')}
        />
        <View style={{flexDirection: 'column'}}>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.Txt}>
            {data?.title}
          </Text>
          <Text style={styles.cardTxt}>{t('common:profile:mygigs:date')}</Text>
          <Text style={styles.cardRightTxt}>
            {data?.created_on?.substr(0, data?.created_on.length - 14)}
          </Text>
        </View>

        {/* <Text numberOfLines={2} style={styles.Txt}>
          I will be taking care of your child
        </Text>
       
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.cardRightTxt}>12/3/2002</Text>
        </View> */}
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('ViewDetail')}
        style={{
          width: hp('34'),
          borderWidth: 0.3,
          alignSelf: 'center',
          // marginTop: hp('1.5'),
          position: 'absolute',
          bottom: hp('2'),
          height: hp('5'),
          borderColor: lightAccent,
          borderRadius: 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'FilsonProBook-Book',
            color: lightAccent,
          }}>
          {t('common:profile:mygigs:ButtonviewDetail')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Txt: {
    width: wp('50%'),
    fontSize: hp('2'),
    color: 'black',
    marginLeft: hp('2.5'),
    fontFamily: 'FilsonProRegular-Regular',
    marginTop: hp('2'),
  },
  cardTxt: {
    position: 'absolute',
    // top: hp('1.5'),
    bottom: hp('0'),
    left: hp('2.5'),
    // marginLeft: hp('2'),
    // marginTop: hp('1.5'),
    // marginLeft: hp('2.5'),
    fontSize: hp('1.8'),
    // marginTop: hp('1.5'),
    color: 'black',
    fontFamily: 'FilsonProBook-Book',
  },
  cardRightTxt: {
    // marginLeft: hp('20'),
    // marginTop: hp('1.5'),
    fontSize: hp('1.8'),
    position: 'absolute',
    right: hp('1'),
    // top: hp('9'),
    bottom: hp('0'),
    fontFamily: 'FilsonProBook-Book',
    color: '#B7B7B7',
  },
});
