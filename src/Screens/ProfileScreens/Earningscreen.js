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
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {ChartScreen} from './Chart/ChartScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FocusAwareStatusBar} from '../../components/Features/Statusbar';
import Percent from '../../../assets/Percent.svg';
import {lightAccent} from '../../components/styles/styles';
import {useTranslation} from 'react-i18next';
const Earningscreen = props => {
  // const navigation = useNavigation();
  const {t} = useTranslation();
  return (
    <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View
        style={{
          flexDirection: 'row',
          marginTop: wp('12%'),
          marginBottom: hp('1'),
          width: wp('100%'),
          justifyContent: 'center',
        }}>
        <AntDesign
          style={{position: 'absolute', left: hp('3'), alignSelf: 'center'}}
          color={'grey'}
          name="left"
          size={20}
          onPress={() => props.navigation.goBack()}
        />
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <View style={{marginTop: hp('0.4')}}>
            <Percent height={hp('2.5')} width={hp('2.5')} />
          </View>
          {/* <Image
            source={require('../../../assets/percentBlue.png')}
            style={{
              // marginLeft: wp('18'),
              height: hp('3'),
              width: hp('3'),
              alignSelf: 'center',
            }}
          /> */}

          <Text
            style={{
              color: lightAccent,
              fontSize: wp('6'),
              marginLeft: wp('3'),
              fontFamily: 'FilsonProRegular-Regular',
            }}>
            {t('common:profile:Earnings:Heading')}
            {/* {strings.profile.Earnings.Heading} */}
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '40%',
          marginTop: hp('5'),
          marginLeft: hp('2 '),
        }}>
        {/* Graph */}
        <ChartScreen />
        <View
          style={{
            marginLeft: hp('5'),
            flexDirection: 'row',
            marginTop: hp(-3),
          }}>
          <Text style={styles.graphTxt}>Jan</Text>
          <Text style={styles.graphTxt}>Feb</Text>
          <Text style={styles.graphTxt}>Mar</Text>
          <Text style={styles.graphTxt}>Apr</Text>
          <Text style={styles.graphTxt}>May</Text>
          <Text style={styles.graphTxt}>Jun</Text>
          <Text style={styles.graphTxt}>Jul</Text>
        </View>
      </View>
      <View
        style={{
          borderColor: '#B7B7B7',
          backgroundColor: '#FFFFFF',
          width: wp('80'),
          // height: hp('35'),
          alignSelf: 'center',
          marginTop: wp('10'),
          borderWidth: 0.5,
        }}>
        <Text
          style={{
            color: lightAccent,
            fontSize: wp('4.5'),
            padding: wp('5'),
            fontFamily: 'FilsonProBook-Book',
          }}>
          {t('common:profile:Earnings:MonthlyAnalysis')}
          {/* {strings.profile.Earnings['Monthly Analysis']} */}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.text}>April-2021</Text>
            <Text style={styles.text}>Jan-2021</Text>
            <Text style={styles.text}>May-2021</Text>
            <Text style={styles.text}>July-2021</Text>
          </View>
          <View style={{flexDirection: 'column', marginTop: wp('7')}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: wp('4'),
                  color: '#90EE90',
                  marginLeft: hp('18'),
                  fontFamily: 'FilsonProBook-Book',
                }}>
                23
              </Text>
              <MaterialCommunityIcons
                name="arrow-up-thin"
                size={hp('2.3%')}
                style={{color: '#90EE90'}}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: wp('4'),
                  color: '#90EE90',
                  marginLeft: hp('18'),
                  marginTop: wp('7'),
                  fontFamily: 'FilsonProBook-Book',
                }}>
                23
              </Text>
              <MaterialCommunityIcons
                name="arrow-up-thin"
                size={hp('2.3%')}
                style={{color: '#90EE90', marginTop: wp('7')}}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: wp('4'),
                  color: 'red',
                  marginLeft: hp('18'),
                  marginTop: wp('7'),
                  fontFamily: 'FilsonProBook-Book',
                }}>
                23
              </Text>
              <MaterialCommunityIcons
                name="arrow-down-thin"
                size={hp('2.3%')}
                style={{color: 'red', marginTop: wp('7')}}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: wp('4'),
                  color: 'red',
                  marginLeft: hp('18'),
                  marginTop: wp('7'),
                  fontFamily: 'FilsonProBook-Book',
                }}>
                23
              </Text>
              <MaterialCommunityIcons
                name="arrow-down-thin"
                size={hp('2.3%')}
                style={{
                  color: 'red',
                  marginTop: wp('7'),
                  marginBottom: hp('3'),
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: wp('4'),
    color: '#B7B7B7',
    paddingLeft: wp('4'),
    marginTop: wp('7'),
    fontFamily: 'FilsonProBook-Book',
  },
  graphTxt: {
    fontSize: 10,
    marginLeft: hp('2.5'),
    color: 'grey',
  },
});

export default Earningscreen;
