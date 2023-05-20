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
  Dimensions,
  Pressable,
} from 'react-native';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Pencil from '../../components/assests/Pencil.svg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  borderColor,
  lightAccent,
  RegularLegecy,
  dardAccent,
  Regular,
  semiBoldLegecy,
  grey,
} from '../../components/styles/styles';
import {FocusAwareStatusBar} from '../../components/Features/Statusbar';
import {useState} from 'react';
import {SettingLogo} from '../../components/SettingLogo/SettingLogo';
// import {t} from 'i18next';
import {useTranslation} from 'react-i18next';
const Settings = props => {
  const {t, i18n} = useTranslation();
  const [lang, setlang] = useState();
  const navigation = useNavigation();
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight =
    Platform.OS === 'ios'
      ? Dimensions.get('window').height
      : require('react-native-extra-dimensions-android').get(
          'REAL_WINDOW_HEIGHT',
        );
  const [modal, setModal] = React.useState(false);

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <SettingLogo onPress={() => navigation.goBack()} />
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('EditProfile');
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: wp('9%'),
              marginLeft: wp('10%'),
            }}>
            {/* ///////////////////////////////// */}
            <View
              style={{
                ...styles.iconView,
                marginLeft: hp('2'),
                // alignItems: 'center',
                // justifyContent: 'center',
              }}>
              <Pencil />
              {/* <MaterialCommunityIcons
                name="pencil-outline"
                size={wp('10')}
                color={'#B7B7B7'}
                style={{alignSelf: 'center'}}
              /> */}
            </View>
            <View style={styles.txtfield}>
              <Text style={{...styles.font, marginLeft: hp('-0')}}>
                {t('common:profile:settings:Editprofile')}
              </Text>
            </View>

            <AntDesign
              style={{
                position: 'absolute',
                right: hp('2'),
                alignSelf: 'center',
                bottom: hp('1.5'),
              }}
              color={'#B7B7B7'}
              name="right"
              size={wp('6')}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('NotificationSettingsS');
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: wp('4%'),
              marginLeft: wp('10%'),
            }}>
            <View style={styles.iconView}>
              <MaterialIcons
                color={'#B7B7B7'}
                name="notifications-none"
                size={wp('10')}
                style={{alignSelf: 'center'}}
              />
            </View>
            <View style={styles.txtfield}>
              <Text style={styles.font}>
                {t('common:profile:settings:notification')}
              </Text>
            </View>

            <AntDesign
              style={{
                position: 'absolute',
                right: hp('2'),
                alignSelf: 'center',
                bottom: hp('1.5'),
              }}
              name="right"
              color={'#B7B7B7'}
              size={wp('5.5')}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PasswordScreen');
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: wp('6%'),
              marginLeft: wp('10%'),
            }}>
            <View style={styles.iconView}>
              <Foundation
                color={'#B7B7B7'}
                name="shield"
                size={wp('10')}
                style={{alignSelf: 'center'}}
              />
            </View>
            <View style={styles.txtfield}>
              <Text style={styles.font}>
                {t('common:profile:settings:passwordandsecurity')}
              </Text>
            </View>

            <AntDesign
              color={'#B7B7B7'}
              style={{
                position: 'absolute',
                right: hp('2'),
                alignSelf: 'center',
                bottom: hp('1.5'),
              }}
              name="right"
              size={wp('6')}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.line}></View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Location');
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: wp('6%'),
              marginLeft: wp('10%'),
            }}>
            <View style={styles.iconView}>
              <Ionicons
                name="location-outline"
                size={wp('9')}
                color={'#B7B7B7'}
                style={{alignSelf: 'center'}}
              />
            </View>
            <View style={styles.txtfield}>
              <Text style={styles.font}>
                {t('common:profile:settings:location')}
              </Text>
            </View>

            <AntDesign
              style={{
                position: 'absolute',
                right: hp('2'),
                alignSelf: 'center',
                bottom: hp('1.5'),
              }}
              name="right"
              size={wp('6')}
              color={'#B7B7B7'}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity
          onPress={() => {
            setModal(true);
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: wp('6%'),
              marginLeft: wp('10%'),
            }}>
            <View style={styles.iconView}>
              <Entypo
                name="language"
                size={wp('8')}
                color={'#B7B7B7'}
                style={{alignSelf: 'center'}}
              />
            </View>
            <View style={styles.txtfield}>
              <Text style={styles.font}>
                {t('common:profile:settings:Language')}
              </Text>
            </View>

            <AntDesign
              style={{
                position: 'absolute',
                right: hp('2'),
                alignSelf: 'center',
                bottom: hp('1.5'),
              }}
              name="right"
              size={wp('6')}
              color={'#B7B7B7'}
            />
          </View>
        </TouchableOpacity>
        <Modal
          // isVisible={modal}
          deviceHeight={deviceHeight}
          deviceWidth={deviceWidth}
          backdropOpacity={0.5}
          animationIn={'slideInUp'}
          backdropColor={'black'}
          // transparent={true}
          hasBackdrop
          onBackdropPress={() => {
            setModal(false);
          }}
          isVisible={modal}>
          <View
            style={{
              height: hp('18%'),
              // width: wp('65%'),
              backgroundColor: 'white',
              alignSelf: 'center',
              shadowColor: borderColor,
              borderRadius: 12,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <View style={{padding: hp('2')}}>
              <Text
                style={{
                  fontFamily: Regular,
                  color: dardAccent,
                  fontSize: hp('2.4'),
                }}>
                {' '}
                Select Language
              </Text>

              <TouchableOpacity
                onPress={() => {
                  i18n.changeLanguage('en');
                  setModal(false);
                }}>
                <Text style={styles.langTxt}>English</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  i18n.changeLanguage('es');

                  setModal(false);
                }}>
                <Text style={styles.langTxt}>Spanish</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  font: {
    fontSize: wp('3.7%'),
    fontFamily: 'FilsonProBook-Book',
    marginLeft: wp('3%'),
    color: '#B7B7B7',
    // marginTop: wp('1.5'),
  },
  line: {
    borderWidth: 0.4,
    borderColor: 'grey',
    marginTop: wp('3.5%'),
    color: '#B7B7B7',
  },
  rightIcon: {
    alignContent: 'center',
    justifyContent: 'center',
  },

  iconView: {
    // height: hp('5'),
    width: wp('10'),
    justifyContent: 'center',
  },
  txtfield: {
    height: hp('6'),
    justifyContent: 'center',

    // width: wp('60'),
  },
  langTxt: {
    marginTop: hp('2.5'),
    fontFamily: semiBoldLegecy,
    fontSize: hp('2'),
    color: grey,
    alignSelf: 'center',
  },
});
