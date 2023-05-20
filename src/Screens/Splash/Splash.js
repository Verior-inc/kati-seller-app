import React, {useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Excl from '../../../assets/Excl.svg';
import Excl2 from '../../../assets/Excl2.svg';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import EncryptedStorage from 'react-native-encrypted-storage';
import {FocusAwareStatusBar} from '../../components/Features/Statusbar';
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
} from '../../components/styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useContext} from 'react';
import {AuthContext} from '../../components/Authentication/AuthContext';
import axios from 'axios';
import {CommonActions} from '@react-navigation/native';
import {API_KEY} from '@env';
export const Splash = () => {
  const navigation = useNavigation();
  const {baseUrl} = useContext(AuthContext);
  console.log(baseUrl);

  const getHashKey = async () => {
    const id = await AsyncStorage.getItem('userInfo');
    const temp = JSON.parse(id);

    // console.log(temp._id);
    // haseebmemon8771@gmail.com
    // Password

    try {
      await axios({
        method: 'post',
        url: baseUrl + 'user/restore-my-token',
        params: {apikey: API_KEY},
        data: {
          userId: temp._id,
        },
        // params: {apikey: API_KEY},
      }).then(res => {
        // if (id._id != null && undefined) {
        // console.log(res.data.data.secure_key);
        if (res.data?.data?.secure_key) {
          const changeHashKey = async () => {
            //change hashkey
            await EncryptedStorage.removeItem('hashKey');
            await EncryptedStorage.setItem(
              'hashKey',
              JSON.stringify(res.data.data.secure_key),
            );
          };
          changeHashKey();
        }

        // }
        // if(res.)
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getToken = async () => {
    let token = await EncryptedStorage.getItem('token');
    setTimeout(() => {
      if (token != undefined && token != null) {
        navigation.dispatch(
          CommonActions.reset({
            routes: [{name: 'HomeT'}],
          }),
        );
      } else {
        navigation.dispatch(
          CommonActions.reset({
            routes: [{name: 'Login'}],
          }),
        );

        // navigation.navigate('HomeT');
      }
    }, 3000);
  };
  useEffect(() => {
    getToken();
  }, []);

  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View
        style={{
          marginLeft: hp('-3'),
          marginTop: hp('-5'),
        }}>
        <Excl width={150} height={200} fill={'#FFFFFF'} />
      </View>
      <View
        style={{
          alignSelf: 'center',
          position: 'absolute',
          alignItems: 'center',
          marginTop: hp('45'),
        }}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: '400',
            fontFamily: semiBold,
            color: '#FFFFFF',
          }}>
          Kati
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: '#FFFFFF',
            marginLeft: hp('1'),
            fontFamily: RegularLegecy,
          }}>
          {t('common:splash:business')}
        </Text>
      </View>
      <View style={{position: 'absolute', bottom: hp('-5%'), right: wp('-1')}}>
        <Excl2 width={150} height={200} fill={'#FFFFFF'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: dardAccent,
    // justifyContent: 'center',
  },
});
