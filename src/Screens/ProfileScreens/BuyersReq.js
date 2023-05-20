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

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FocusAwareStatusBar} from '../../components/Features/Statusbar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BookingRequestCard from '../../components/cards/ProfileScreenCards/BookingRequestCard';
import {lightAccent, Regular} from '../../components/styles/styles';
import {useTranslation} from 'react-i18next';
const BuyersReq = props => {
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
        }}>
        {/* <AntDesign
          style={{marginLeft: wp('9%'), marginTop: wp('1')}}
          color={'grey'}
          name="left"
          size={hp('2.5')}
          onPress={() => props.navigation.goBack()}
        /> */}
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            width: wp('100%'),

            justifyContent: 'center',
          }}>
          <View
            // onPress={() => props.navigation.goBack()}
            style={{
              // height: hp('5'),
              // width: wp('5'),
              // backgroundColor: 'grey',
              position: 'absolute',
              // justifyContent: 'center',
              left: hp('3'),
            }}>
            <AntDesign
              style={{
                position: 'absolute',
                left: hp('0'),
              }}
              color={'grey'}
              name="left"
              size={hp('2.5')}
              onPress={() => props.navigation.goBack()}
            />
          </View>
          <MaterialCommunityIcons
            name="calendar-range-outline"
            size={hp('2.7')}
            style={{color: lightAccent, alignSelf: 'center'}}
          />
          <Text
            style={{
              color: lightAccent,
              fontSize: hp('2%'),
              fontWeight: '500',
              fontFamily: Regular,
            }}>
            {t('common:profile:Buyersrequest:Heading')}
          </Text>
        </View>
      </View>
      <ScrollView style={{flex: 1, marginTop: hp('5')}}>
        <View style={{marginBottom: hp('2')}}>
          <BookingRequestCard />
          <BookingRequestCard />
          <BookingRequestCard />
        </View>
      </ScrollView>
    </View>
  );
};

export default BuyersReq;
