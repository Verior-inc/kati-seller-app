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
import EncryptedStorage from 'react-native-encrypted-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FocusAwareStatusBar} from '../../../components/Features/Statusbar';
import {lightAccent, dardAccent} from '../../../components/styles/styles';
import {useTranslation} from 'react-i18next';
import {useContext} from 'react';
import {AuthContext} from '../../../components/Authentication/AuthContext';
import {useState} from 'react';
import Loading from '../../../components/Loader/Loading';
import axios from 'axios';
import {useEffect} from 'react';
import {API_KEY} from '@env';
export const ViewDetail = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const {baseUrl} = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  // console.log(data);
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={styles.backbtn}>
        <AntDesign
          style={{marginLeft: '5%'}}
          color={'grey'}
          name="left"
          size={20}
          onPress={() => navigation.goBack()}
        />
      </View>
      {loading === true ? (
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
        <ScrollView scrollEnabled>
          <View style={styles.headingView}>
            <Text style={styles.headingTxt} numberOfLines={2}>
              i will be taking care of your child
              {/* {data?.title} */}
            </Text>
          </View>
          <ImageBackground
            style={styles.backgroundImage}
            source={require('../../../../assets/Profile.png')}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <AntDesign
                style={{...styles.imageicon, left: hp('1')}}
                color={'grey'}
                name="left"
                size={20}
              />
              <AntDesign
                style={{...styles.imageicon, right: hp('1')}}
                color={'grey'}
                name="right"
                size={20}
              />
            </View>
          </ImageBackground>
          <View
            style={{
              width: wp('90%'),

              alignSelf: 'center',
              marginTop: hp('1'),
            }}>
            <Text style={styles.txt}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
              similique! Architecto deleniti veritatis nemo quos error? Error e
              {/* {data?.description} */}
            </Text>
            <View
              style={{
                marginTop: hp('2'),
                height: hp('4'),
              }}>
              <Text style={styles.SecondHeading}>
                {t('common:profile:mygigs:thingsIncluded')}
              </Text>
            </View>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Ionicons
                  style={{...styles.checkIcon, marginTop: hp('1.7')}}
                  name="md-checkmark-done-outline"
                  size={hp('2.5')}
                />
                <Text
                  style={{
                    ...styles.txt,
                    fontSize: hp('2'),
                    marginTop: hp('1.5'),
                    marginLeft: hp('1'),
                    width: wp('76'),
                  }}>
                  {' '}
                  i will be taking care of your child{' '}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Ionicons
                  style={{...styles.checkIcon, marginTop: hp('1.7')}}
                  name="md-checkmark-done-outline"
                  size={hp('2.5')}
                />
                <Text
                  style={{
                    ...styles.txt,
                    fontSize: hp('2'),
                    marginTop: hp('1.5'),
                    marginLeft: hp('1'),
                    width: wp('76'),
                  }}>
                  {' '}
                  i will make him what is good for his health{' '}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Ionicons
                  style={styles.checkIcon}
                  name="md-checkmark-done-outline"
                  size={hp('2.5')}
                />
                <Text
                  style={{
                    ...styles.txt,
                    fontSize: hp('2'),
                    marginTop: hp('2.5'),
                    marginLeft: hp('1'),
                    width: wp('76'),
                  }}>
                  i will be taking care of your child
                </Text>
              </View>
            </View>
            <Text style={styles.SecondHeading}>
              {t('common:profile:mygigs:reviews')}
            </Text>
            <View
              style={{
                height: hp('15'),

                flexDirection: 'row',
              }}>
              <Image
                style={styles.profile}
                source={require('../../../../assets/Profile.png')}
              />

              <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontFamily: 'FilsonProBold-Bold',
                      marginLeft: hp('1'),
                      marginTop: hp('2.5'),
                      fontSize: hp('1.8'),
                      color: 'black',
                    }}>
                    Joshua
                  </Text>
                  <AntDesign
                    color={'gold'}
                    name="star"
                    size={hp('1.5')}
                    style={{marginLeft: '55%', marginTop: hp('2.6')}}
                  />
                  <Text
                    style={{
                      marginLeft: hp('0'),
                      marginTop: hp('2.5'),
                      fontFamily: 'FilsonProRegular-Regular',
                      color: '#B7B7B7',
                      fontSize: hp('1.4'),
                    }}>
                    5.0
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: 'FilsonProBook-Book',
                    marginLeft: hp('1.9'),
                    fontSize: 15,
                    color: '#B7B7B7',
                  }}>
                  Well done! such an amazing work{' '}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backbtn: {
    marginTop: hp('6.5%'),
  },
  headingView: {
    marginTop: hp('2%'),

    height: hp('7'),
    width: wp('100%'),
    alignSelf: 'center',
  },
  headingTxt: {
    fontFamily: 'FilsonProRegular-Regular',
    fontSize: wp('4.9'),

    color: 'black',
    alignSelf: 'center',
  },
  backgroundImage: {
    width: wp('90%'),
    height: hp('25'),

    alignSelf: 'center',
  },
  imageicon: {
    // alignSelf: 'flex-start',
    // marginTop: hp('11'),
    position: 'absolute',
    top: hp('11'),
    // alignSelf: 'center',
  },
  txt: {
    fontFamily: 'FilsonProBook-Book',
    fontSize: hp('2'),
    marginLeft: hp('1'),
    color: '#B7B7B7',
    width: wp('83'),
    lineHeight: hp('2.5'),
  },
  SecondHeading: {
    fontFamily: 'FilsonProBook-Book',
    fontSize: hp('2'),
    marginLeft: hp('1'),
    color: dardAccent,
    marginTop: hp('1'),
  },
  profile: {
    borderRadius: 100,
    width: wp('10'),
    height: hp('5'),
    marginLeft: hp('1'),
    marginTop: hp('1.7'),
  },
  checkIcon: {
    color: '#B7B7B7',
    marginTop: hp('2.5'),
    marginLeft: hp('1'),
  },
});
