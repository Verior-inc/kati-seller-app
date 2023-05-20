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
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import RequestDetails from '../../components/cards/ProfileScreenCards/RequestDetails';
import BookingExtraDetails from '../../components/cards/ProfileScreenCards/BookingExtraDetails';
import {FocusAwareStatusBar} from '../../components/Features/Statusbar';
import {lightAccent, Regular} from '../../components/styles/styles';
import {useTranslation} from 'react-i18next';
const BookingDetails = props => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  return (
    <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={{flexDirection: 'row', marginTop: wp('10%')}}>
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
            style={{color: lightAccent}}
          />
          <Text
            style={{
              color: lightAccent,
              fontSize: hp('2%'),
              fontWeight: '500',
              fontFamily: Regular,
            }}>
            {t('common:order:bookingDetails')}
          </Text>
        </View>
      </View>
      <ScrollView style={{flex: 1, marginTop: hp('5%')}}>
        <RequestDetails />
        <RequestDetails />
        <BookingExtraDetails />
      </ScrollView>
    </View>
  );
};

export default BookingDetails;
