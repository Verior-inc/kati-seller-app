import React, {useState, useRef} from 'react';

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
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Modalize} from 'react-native-modalize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {FocusAwareStatusBar} from '../../components/Features/Statusbar';
import {HeadingWithBtn} from '../../components/Header/HeaderWbtn';
import {Card} from './BookingDetailComponents/Card';
import {RequirementsCard} from './BookingDetailComponents/RequirementsCard';
import {useTranslation} from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  dardAccent,
  extraBold,
  grey,
  lightAccent,
  medium,
  Regular,
  semiBoldLegecy,
} from '../../components/styles/styles';
import {useNavigation} from '@react-navigation/native';
import RescheduleCard from './RescheduleCard';
import MyModalizeView from './MyModalize';
import {TextInput} from 'react-native';
import Modal from 'react-native-modal';
import axios from 'axios';
import {API_KEY, BASE_URL} from '@env';
import CancellationModal from './CancellationModal';
import ConfirmationModal from './ConfirmationModal';
import SucessModal from '../../components/Dialog/SucessModal';
export const BookingDetails = ({route}) => {
  const {t} = useTranslation();
  const onOpen = () => {
    modalizeRef.current.open();
  };
  const {sellerId, bookingId, budget} = route.params;

  const modalizeRef = useRef(null);
  const modalizeCancelRef = useRef(null);
  const [currentScreen, setCurrentScreen] = useState('details');
  const isDetailScreen = currentScreen == 'details';
  const navigation = useNavigation();
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const [reasonInput, setReasonInput] = useState('');
  const [rescheduleReason, setRescheduleReason] = useState('');
  const [showTimings, setShowtimings] = useState(true);
  const [date, setDate] = useState(new Date());
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [successModal, setSuccessModal] = useState(false);
  const [message, setMessage] = useState('');
  const Separator = () => {
    return (
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          borderWidth: 0.3,
          borderColor: 'grey',
        }}
      />
    );
  };

  const CancellationRequest = async () => {
    await axios({
      url: BASE_URL + 'bookings/request-cancellation',
      method: 'post',

      data: {
        // hashkey
        bookingId: bookingId,
        reason: reasonInput,
        request_by_type: 'seller',
        request_by: sellerId,
      },
    })
      .then(res => {
        if (res.data.success == true) {
          setSuccessModal(true);
          setMessage(res.data.message);
        }
      })
      .catch(e => {
        console.log('error', e);
      });
  };

  const rescheduleReq = async () => {
    await axios({
      url: BASE_URL + 'reschedule_request/create-rescheduling-request',
      method: 'post',
      data: {
        bookingId: bookingId,
        bookedDate: date,
        fromTime: fromDate,
        toTime: toDate,
        budget: budget,
        reason: rescheduleReason,
        request_by: sellerId,
        request_by_type: 'seller',
      },
    })
      .then(res => {
        console.log(res.data);
        if (res.data.success == true) {
          setSuccessModal(true);
          setMessage(res.data.message);
        }
      })
      .catch(e => {
        console.log('reschedule', e);
      });
    // console.log(req.data);
  };

  const getReschedule = reason => {
    setRescheduleReason(reason);
  };

  const getDate = date => {
    setDate(date);
  };
  const getFromDate = date => {
    setFromDate(date);
  };
  const getToDate = date => {
    setToDate(date);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F9F9F9'}}>
      {/* <FocusAwareStatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      /> */}
      <SucessModal
        onPress={() => {
          setSuccessModal(false);
        }}
        message={message}
        isVisible={successModal}
      />
      <View
        style={{
          width: '100%',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,

          elevation: 1,
          backgroundColor: 'white',
          height: 100,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            marginVertical: 10,
          }}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Ionicons name="chevron-back" color="black" size={20} />
          </Pressable>

          <Pressable>
            <Text
              style={{
                fontSize: 18,
                fontFamily: semiBoldLegecy,
                color: 'black',
              }}>
              Abdul Haseeb
            </Text>
          </Pressable>
          <Pressable>
            <MaterialCommunityIcons
              name="dots-vertical"
              color="black"
              size={20}
            />
          </Pressable>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
          }}>
          <Pressable
            onPress={() => {
              setCurrentScreen('details');
            }}
            style={{
              width: '50%',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: isDetailScreen ? 4 : 0.3,
              borderBottomColor: isDetailScreen ? lightAccent : 'grey',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: isDetailScreen ? semiBoldLegecy : Regular,
                color: isDetailScreen ? lightAccent : 'black',
              }}>
              Details
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCurrentScreen('chat');
            }}
            style={{
              width: '50%',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: !isDetailScreen ? 4 : 0.3,
              borderBottomColor: !isDetailScreen ? lightAccent : 'grey',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: !isDetailScreen ? semiBoldLegecy : Regular,
                color: !isDetailScreen ? lightAccent : 'black',
              }}>
              Chat
            </Text>
          </Pressable>
        </View>
      </View>
      {/* <HeadingWithBtn name={t('common:card:Bookingdetailscard:Heading')} /> */}
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 20,
          }}>
          <View>
            <Text style={{fontSize: 20, fontFamily: extraBold, color: 'black'}}>
              #A01FC10
            </Text>
            <Text style={{fontSize: 15, fontFamily: Regular, color: 'grey'}}>
              12/12/2020 8:00 PM
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 30,
              paddingVertical: 10,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#E6F4FF',
            }}>
            <Text
              style={{
                color: '#0096FF',
                fontFamily: semiBoldLegecy,
                fontSize: 17,
              }}>
              Requested
            </Text>
          </View>
        </View>

        <Separator />

        <View style={{width: '90%', alignSelf: 'center', marginTop: 10}}>
          <Pressable
            onPress={() => setShowInfo(prev => !prev)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 15,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome5 name="info-circle" color="grey" size={20} />
              <Text
                style={{
                  fontSize: 18,
                  paddingLeft: 10,
                  fontFamily: semiBoldLegecy,
                  color: 'grey',
                }}>
                Order Info
              </Text>
            </View>
            <Entypo
              onPress={() => setShowInfo(prev => !prev)}
              name={showInfo ? 'chevron-down' : 'chevron-up'}
              color="grey"
              size={25}
            />
          </Pressable>
          {showInfo ? (
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: semiBoldLegecy,
                  color: 'black',
                }}>
                Will need you to take care of my kitchen.
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: Regular,
                  color: 'grey',
                  marginTop: 5,
                }}>
                We are having guests at home, but dont have any at home who can
                cook well, we will need you to cook few simple dishes in our
                kitchen and take care of it
              </Text>
            </View>
          ) : null}
        </View>

        <View style={{width: '90%', alignSelf: 'center'}}>
          <Pressable
            onPress={() => setShowtimings(prev => !prev)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 15,
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="calendar-sharp" color="grey" size={20} />
              <Text
                style={{
                  fontSize: 18,
                  paddingLeft: 10,
                  fontFamily: semiBoldLegecy,
                  color: 'grey',
                }}>
                Booked Timings
              </Text>
            </View>
            <Entypo
              onPress={() => setShowtimings(prev => !prev)}
              name={showTimings ? 'chevron-down' : 'chevron-up'}
              color="grey"
              size={25}
            />
          </Pressable>
          {showTimings ? (
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: semiBoldLegecy,
                  color: 'black',
                }}>
                Will need you to take care of my kitchen.
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: Regular,
                  color: 'grey',
                  marginTop: 5,
                }}>
                We are having guests at home, but dont have any at home who can
                cook well, we will need you to cook few simple dishes in our
                kitchen and take care of it
              </Text>
            </View>
          ) : null}
        </View>
        {/* <Card />
        <RequirementsCard /> */}
        <RescheduleCard
          onPress={() => {
            onOpen();
          }}
        />
        <TouchableOpacity
          onPress={() => {
            setConfirmDialog(true);
          }}
          style={{
            alignSelf: 'center',
            marginTop: hp('2'),
            backgroundColor: lightAccent,
            height: hp('5'),
            width: wp('80'),
            borderRadius: 8,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: Regular,
              alignSelf: 'center',
              color: 'black',
              alignSelf: 'center',
              marginTop: 0,
            }}>
            Cancel Order
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <Modalize
        panGestureComponentEnabled={true}
        panGestureEnabled={true}
        modalHeight={hp('70%')}
        ref={modalizeRef}>
        <MyModalizeView
          onPress={() => {
            rescheduleReq();
          }}
          value={rescheduleReason}
          getRescheduleReason={getReschedule}
          date={date}
          fromDate={fromDate}
          toDate={toDate}
          getFromDate={getFromDate}
          getToDate={getToDate}
          getDate={getDate}
          onPressClose={() => {
            modalizeRef.current.close();
          }}
          ref={modalizeRef}
        />
      </Modalize>
      <Modalize
        panGestureComponentEnabled={true}
        panGestureEnabled={true}
        modalStyle={{flex: 1}}
        modalHeight={hp('30%')}
        ref={modalizeCancelRef}>
        <CancellationModal
          value={reasonInput}
          onChangeText={t => {
            setReasonInput(t);
          }}
          onPress={() => {
            CancellationRequest();
          }}
          disable={reasonInput}
        />
      </Modalize>
      <Modal hasBackdrop={true} isVisible={confirmDialog}>
        <ConfirmationModal
          onPressDecline={() => {
            setConfirmDialog(false);
          }}
          onPressConfirm={() => {
            setConfirmDialog(false);
            modalizeCancelRef?.current?.open();
          }}
        />
      </Modal>
    </SafeAreaView>
  );
};
