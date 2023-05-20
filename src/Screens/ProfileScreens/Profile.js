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
  ImageBackground,
} from 'react-native';
import Percent from '../../../assets/PercentGrey.svg';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Heading} from '../Home/HomeUiComp/Heading';
import {FocusAwareStatusBar} from '../../components/Features/Statusbar';
import {dardAccent, Regular, light, grey} from '../../components/styles/styles';
import {useTranslation} from 'react-i18next';
const Profile = ({props, navigation}) => {
  // const navigation = useNavigation();
  const {t} = useTranslation();
  // console.log({props});
  return (
    <ImageBackground
      source={require('../../../assets/BackProfile.jpg')}
      style={{flex: 1, backgroundColor: '#F9F9F9'}}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View
        style={{
          flex: 2,
          alignSelf: 'center',
          justifyContent: 'center',
          backgroundColor: '#F9F9F9',
        }}>
        <View
          style={{
            width: wp('100'),
            position: 'absolute',
            top: hp('15'),
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: wp('35'),
              // marginTop: hp('2'),

              alignSelf: 'center',
              justifyContent: 'center',
              height: hp('20'),
            }}>
            <View style={{flex: 1, width: hp('11')}}>
              <Image
                style={{
                  // alignSelf: 'center',
                  borderRadius: hp('100%'),
                  position: 'absolute',
                  top: hp('1'),
                  left: hp('2'),
                  width: wp('30%'),
                  height: hp('14.5%'),

                  // marginTop: wp('9%'),
                  // marginLeft: hp('5'),
                }}
                source={require('../../../assets/Profile.png')}
              />
            </View>
            <MaterialCommunityIcons
              style={{
                alignSelf: 'center',
                // marginLeft: hp('10.8'),
                // marginBottom: hp('1'),
                color: dardAccent,
                position: 'absolute',
                right: hp('-1.5'),
                bottom: hp('4.5'),
              }}
              name="camera-plus"
              size={hp('5.5')}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              top: hp('16.5'),
              alignSelf: 'center',
            }}>
            <Text
              style={{
                // marginTop: wp('-3'),
                fontSize: wp('4.8%'),
                alignSelf: 'center',
                color: 'black',
                marginLeft: wp('2'),
                fontFamily: Regular,
              }}>
              Joseph
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                color: 'grey',
                marginLeft: wp('2'),
                marginTop: hp('1'),
                fontFamily: light,
                fontSize: hp('1.8'),
              }}>
              joseph@gmail.com
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 2.1,
          backgroundColor: 'white',
          borderTopStartRadius: wp('4'),
          borderTopEndRadius: wp('4%'),
          borderColor: '#B1B1B1',
          overflow: 'hidden',
          borderWidth: 0.4,
        }}>
        <View style={{marginLeft: wp('7'), marginTop: hp('2')}}>
          <Heading margin={hp('1')} name={t('common:profile:Heading')} />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Payment');
          }}>
          <View style={styles.field}>
            <View style={styles.iconView}>
              <Ionicons
                color={'#B7B7B7'}
                name="md-card-outline"
                size={wp('8')}
              />
            </View>
            <View style={styles.txtfield}>
              <Text style={styles.font}>
                {' '}
                {t('common:profile:tabs:Payment')}
              </Text>
            </View>
            <View
              style={{
                width: wp('10'),

                height: hp('2'),
                alignSelf: 'center',
              }}></View>
            <AntDesign
              style={styles.right}
              name="right"
              size={wp('6')}
              color={'grey'}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Earnings');
          }}>
          <View style={styles.field}>
            <View style={styles.iconView}>
              <View style={{marginTop: hp('0.5')}}>
                <Percent />
              </View>
              {/* <Image
                source={require('../../../assets/percent.png')}
                style={{height: hp('4'), width: hp('3')}}
              /> */}
            </View>
            <View style={styles.txtfield}>
              <Text style={styles.font}>
                {' '}
                {t('common:profile:tabs:Earnings')}
              </Text>
            </View>
            <View
              style={{
                width: wp('10'),

                height: hp('2'),
                alignSelf: 'center',
              }}></View>
            <AntDesign
              style={styles.right}
              name="right"
              size={wp('6')}
              color={'grey'}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Settings');
          }}>
          <View style={styles.field}>
            <View style={styles.iconView}>
              <Ionicons
                name="md-settings-sharp"
                color={'#B7B7B7'}
                size={wp('8')}
              />
            </View>
            <View style={styles.txtfield}>
              <Text style={styles.font}>
                {' '}
                {t('common:profile:tabs:Settings')}
              </Text>
            </View>
            <View
              style={{
                width: wp('10'),

                height: hp('2'),
                alignSelf: 'center',
              }}></View>
            <AntDesign
              style={styles.right}
              name="right"
              size={wp('6')}
              color={'grey'}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Profile;

const styles = StyleSheet.create({
  font: {
    fontSize: wp('4%'),

    marginLeft: wp('5%'),
    color: 'grey',
    marginTop: wp('2'),
    fontFamily: 'FilsonProLight-Light',
  },
  line: {
    borderWidth: 0.2,
    // borderColor: 'grey',
    marginTop: wp('3.5%'),
    borderColor: '#B1B1B1',
    // color: '#B1B1B1',
  },
  field: {
    flexDirection: 'row',
    marginTop: wp('5%'),
    marginLeft: wp('12%'),
  },
  iconView: {
    height: hp('4'),
    width: wp('10'),
  },
  txtfield: {
    height: hp('4'),
    // width: wp('60'),
  },
  right: {
    position: 'absolute',
    right: hp('4'),
    alignSelf: 'center',
  },
});
