import React, {useState} from 'react';

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
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import EncryptedStorage from 'react-native-encrypted-storage';
import {
  extraBold,
  light,
  lightAccent,
  RegularLegecy,
  semiBold,
  semiBoldLegecy,
} from '../../components/styles/styles';
import {useTranslation} from 'react-i18next';
import axios from 'axios';
import {API_KEY, BASE_URL} from '@env';
export const BookingCard = props => {
  const [showTimings, setShowTimings] = useState(false);
  const {t} = useTranslation();
  const navigation = useNavigation();
  const [flagRes, setFlagRes] = useState();
  // console.log(props.data._id);
  // console.log('props', props);
  const getdata = action => {
    console.log(action);
  };
  const acceptDecline = async action => {
    try {
      axios({
        url: BASE_URL + 'bookings/accept-decline-booking',
        method: 'post',
        params: {apikey: API_KEY},
        data: {
          sellerId: props.data.sellerId,
          flag: `${action}`,
          bookingId: props?.data?._id,
        },
      })
        .then(res => {
          console.log('booking card', res.data);
          if (res.data.success == true) {
            setFlagRes(res.data.data);
            props?.getBookings();
          }
        })
        .catch(e => {
          console.log('booking card accept declive req', e);
        });
    } catch (error) {}
  };
  // console.log('props', props.data.status_code);
  // console.log('flagres', flagRes);
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Booking details order', {
          sellerId: props?.data?.sellerId,
          bookingId: props?.data?._id,
          budget: props?.data?.budget,
        })
      }
      style={{
        width: '90%',
        minHeight: 100,
        backgroundColor: 'white',
        shadowColor: '#000',
        marginBottom: hp('2'),
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,

        elevation: 1,
        alignSelf: 'center',
        marginVertical: 5,
        borderRadius: 10,
        paddingVertical: 10,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            width: '70%',
          }}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
            }}
            style={{
              width: 40,
              height: 40,
              borderWidth: 1,
              borderColor: 'transparent',
              borderRadius: 40 / 2,
            }}
          />
          <View style={{marginLeft: 10}}>
            <Text
              style={{color: 'black', fontFamily: RegularLegecy, fontSize: 18}}>
              {props?.data?.bookedBy?.name}
            </Text>
            <Text style={{color: 'black', fontFamily: semiBold, fontSize: 16}}>
              Will need you to take care of my kitchen.
            </Text>
            <Text numberOfLines={2} style={{color: 'grey', fontFamily: light}}>
              We are having guests at home, but dont have any at home who can
              cook well, we will need you to cook few simple dishes in our
              kitchen and take care of it
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontFamily: extraBold,
              color: 'black',
              padding: 15,
              fontSize: 27,
            }}>
            $90
          </Text>
        </View>
      </View>
      <Pressable
        onPress={() => {
          setShowTimings(prev => !prev);
        }}
        style={{
          padding: 10,
          backgroundColor: '#edf7fe',
          borderRadius: 5,
          width: '90%',
          alignSelf: 'center',
          marginBottom: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{fontFamily: semiBoldLegecy, fontSize: 17, color: 'black'}}>
            Timings & location
          </Text>
          <TouchableOpacity
            onPress={() => {
              setShowTimings(prev => !prev);
            }}>
            <Entypo
              name={showTimings ? 'chevron-down' : 'chevron-up'}
              color="black"
              size={20}
            />
          </TouchableOpacity>
        </View>
        {showTimings ? (
          <View>
            <Text
              style={{
                fontFamily: RegularLegecy,
                paddingVertical: 2,
                fontSize: 15,
                color: 'black',
              }}>
              Date: {props?.data?.bookedDate.slice(0, 10)}
            </Text>
            <Text
              style={{
                fontFamily: RegularLegecy,
                paddingVertical: 2,
                fontSize: 15,
                color: 'black',
              }}>
              from: {props?.data?.fromTime.slice(0, 10)}
            </Text>
            <Text
              style={{
                fontFamily: RegularLegecy,
                paddingVertical: 2,
                fontSize: 15,
                color: 'black',
              }}>
              To: {props?.data?.toTime.slice(0, 10)}
            </Text>
          </View>
        ) : null}
      </Pressable>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'flex-end',
        }}>
        {props.data?.status_code == 'REQUESTED' ? (
          <>
            <TouchableOpacity
              onPress={() => acceptDecline('Decline')}
              style={{
                height: 35,
                width: 100,
                backgroundColor: 'red',
                margin: 5,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
              }}>
              <Text style={{color: 'white', fontFamily: RegularLegecy}}>
                Decline
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => acceptDecline('Accept')}
              style={{
                height: 35,
                width: 100,
                backgroundColor: '#0bda51',
                margin: 5,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
              }}>
              <Text style={{color: 'white', fontFamily: RegularLegecy}}>
                Accept
              </Text>
            </TouchableOpacity>
          </>
        ) : null}
      </View>
    </Pressable>
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
    marginTop: hp('1.5'),
    fontSize: 17,
    fontFamily: 'FilsonProBook-Book',
    color: 'black',
  },
  cardRightTxt: {
    // marginLeft: hp('10'),
    marginTop: hp('1.5'),
    fontSize: 17,
    position: 'absolute',
    right: hp('3'),
    fontFamily: 'FilsonProBook-Book',
    color: '#B7B7B7',
  },
});
