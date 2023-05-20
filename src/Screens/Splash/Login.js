import React, {useEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {AuthContext} from '../../components/Authentication/AuthContext';
import EncryptedStorage from 'react-native-encrypted-storage';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  Keyboard,
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
  blackColor,
} from '../../components/styles/styles';

import FB from '../../../assets/FB.svg';
import Google from '../../../assets/Google.svg';
import Apple from '../../../assets/Apple.svg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Design from '../../../assets/Design.svg';
import Design2 from '../../../assets/Design2.svg';
import {FocusAwareStatusBar} from '../../components/Features/Statusbar';
import Loading from '../../components/Loader/Loading';
import {CommonActions} from '@react-navigation/native';
export const Login = () => {
  const [modal, setModal] = React.useState(false);
  const {t, i18n} = useTranslation();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  // const [email, setEmail] = React.useState();
  // const [password, setPassword] = React.useState();
  const {login} = useContext(AuthContext);
  const {err} = useContext(AuthContext);
  const {isLoading} = useContext(AuthContext);
  const {msg} = useContext(AuthContext);
  const navigation = useNavigation();
  const getToken = async () => {
    await EncryptedStorage.getItem('token').then(res => {
      if (res != null && res != undefined) {
        navigation.dispatch(
          CommonActions.reset({
            routes: [{name: 'HomeT'}],
          }),
        );
      }
    });
  };

  if (msg == 'Login Successfull') {
    getToken();
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <FocusAwareStatusBar
          translucent={true}
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
        />
        <View style={{marginLeft: hp('-3'), marginTop: hp('-5')}}>
          <Design width={150} height={200} fill={dardAccent} />
        </View>

        {isLoading === true ? (
          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              // flex: 1,
              height: hp('100%'),
              // marginTop: hp('50'),
              // marginTop: hp('5'),
              position: 'absolute',
            }}>
            <Loading />
          </View>
        ) : (
          <ScrollView>
            <View
              style={{
                marginLeft: hp('-3'),
                // width: wp('50%'),
                // alignSelf: 'center',
                // justifyContent: 'center',
              }}>
              <Text style={styles.Heading}>{t('common:login:title')}</Text>
              <Text style={styles.text}>{t('common:login:description1')}</Text>
              <Text style={styles.text}>{t('common:login:description2')} </Text>
            </View>

            <TextInput
              style={styles.input}
              placeholderTextColor={'#B7B7B7'}
              placeholder={t('common:login:email')}
              onChangeText={txt => {
                setEmail(txt);
              }}
              value={email}
            />
            <View style={styles.errtxtView}>
              <Text style={styles.errText}>{err?.errEmail}</Text>
            </View>
            <TextInput
              style={styles.input}
              value={password}
              placeholder={t('common:login:password')}
              secureTextEntry
              onChangeText={txt => {
                setPassword(txt);
              }}
              placeholderTextColor={'#B7B7B7'}
            />
            <View style={styles.errtxtView}>
              <Text style={styles.errText}>{err?.errPass}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                login({email, password});
              }}
              style={{
                width: hp('36.5'),
                backgroundColor: dardAccent,
                alignSelf: 'center',
                marginTop: hp('1.5'),
                height: hp('5.5'),
                borderColor: borderColor,
                borderRadius: 2,
                borderWidth: hp('0.1'),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: Regular,
                  color: '#FFFFFF',
                }}>
                {t('common:login:button')}
              </Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: hp('3'),
              }}>
              <View style={styles.Halfline}></View>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 18,
                  fontFamily: Regular,
                  color: '#B7B7B7',
                }}>
                {'   '}
                {t('common:login:or')}
                {'  '}
              </Text>
              <View style={styles.Halfline}></View>
            </View>
            <View style={{justifyContent: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  justifyContent: 'space-around',
                  width: wp('80%'),
                  marginTop: hp('5'),
                }}>
                <View style={styles.icon}>
                  <FB height={25} width={25} />
                </View>
                <View style={styles.txtView}>
                  <Text style={styles.txt2}>{t('common:login:facebook')}</Text>
                </View>
              </View>
              <View style={{...styles.line, marginTop: hp('5')}}></View>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  justifyContent: 'space-around',
                  width: wp('80%'),
                  marginTop: hp('2'),
                }}>
                <View style={styles.icon}>
                  <Google height={25} width={25} />
                </View>
                <View style={styles.txtView}>
                  <Text style={styles.txt2}>{t('common:login:google')}</Text>
                </View>
              </View>
              <View style={{...styles.line, marginTop: hp('5')}}></View>

              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  justifyContent: 'space-around',
                  width: wp('80%'),
                  marginTop: hp('2'),
                }}>
                <View style={styles.icon}>
                  <Apple height={25} width={25} />
                </View>
                <View style={styles.txtView}>
                  <Text style={{...styles.txt2}}>
                    {t('common:login:apple')}
                  </Text>
                </View>
              </View>
            </View>

            <View style={{...styles.line, marginTop: hp('5')}} />
          </ScrollView>
        )}

        <View
          style={{position: 'absolute', bottom: -30, alignSelf: 'flex-end'}}>
          <Design2 width={150} height={200} fill={dardAccent} />
        </View>
      </Pressable>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          alignSelf: 'center',
          bottom: hp('5'),
        }}>
        <Text style={styles.signupText}>Don't have an acount?</Text>
        <Text
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          style={{...styles.signupText, color: dardAccent}}>
          {' '}
          Sign UP
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: screenBackground,
  },
  Heading: {
    fontSize: 24,
    alignSelf: 'center',
    fontFamily: book,
    fontWeight: '400',
    color: lightAccent,
    marginLeft: hp('3'),
    marginBottom: hp('1'),
  },
  text: {
    fontSize: 16.5,
    fontFamily: Regular,
    fontWeight: '300',
    alignSelf: 'center',
    color: 'grey',
    marginLeft: hp('3'),
  },
  input: {
    width: hp('36'),
    color: 'black',
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    height: hp('5.5'),
    marginTop: hp('01'),
    borderWidth: 0.3,
    borderColor: '#B7B7B7',
    paddingLeft: hp('1'),
  },
  Halfline: {
    borderWidth: 0.4,
    borderColor: '#B7B7B7',
    width: hp('15'),

    alignSelf: 'center',
  },
  txt2: {
    fontSize: 17,
    color: 'black',
  },
  line: {
    borderWidth: 0.4,
    borderColor: '#B7B7B7',
    width: hp('36'),
    alignSelf: 'center',
    marginTop: hp('2'),
  },
  icon: {
    position: 'absolute',
    left: wp('12'),
  },
  txtView: {
    position: 'absolute',
    left: wp('25'),
  },
  errText: {
    width: wp('78%'),
    fontFamily: Regular,
    fontSize: hp('1.5'),
    marginTop: hp('-1'),

    alignSelf: 'center',
    color: 'red',
  },
  signupText: {
    fontFamily: Regular,
    fontSize: hp('1.5'),
    color: blackColor,
  },
  errtxtView: {justifyContent: 'center', height: hp('3')},
});
