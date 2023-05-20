import React, {useState, useEffect} from 'react';

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
  TouchableWithoutFeedback,
  Dimensions,
  FlatList,
  Pressable,
} from 'react-native';
import Tick from '../../../assets/fonts/Tick.svg';
import EncryptedStorage from 'react-native-encrypted-storage';
import TickList from '../../../assets/fonts/TickList.svg';
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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {HeadingWithBtn} from '../../components/Header/HeaderWbtn';
import {ExpandableListView} from 'react-native-expandable-listview';
import {FocusAwareStatusBar} from '../../components/Features/Statusbar';
import {BookingCard} from './BookingCard';
import {useTranslation} from 'react-i18next';
import axios from 'axios';
import {API_KEY, BASE_URL} from '@env';

import InAppLoading from '../../components/Loader/InappLoader';
import {useNavigation} from '@react-navigation/native';

const OrderCategories = [
  {
    text: 'Requests',
  },
  {
    text: 'Active',
  },
  {
    text: 'Cancelled',
  },
  {
    text: 'Completed',
  },
];

const OrderScreen = ({props, route}) => {
  const deviceWidth = Dimensions.get('window').width;
  const [selectedState, setSelectedState] = useState('Requests');
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cards, setCard] = useState([]);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (route.params) {
      setSelectedState(route.params.params);
      console.log(route.params);
    }
  }, [route.params]);
  const getBookings = async () => {
    setLoading(true);
    const id = await EncryptedStorage.getItem('id');
    console.log('id', id);
    try {
      axios({
        url: BASE_URL + 'bookings/get-my-bookings',
        params: {apikey: API_KEY},
        method: 'post',
        data: {
          accountType: 'seller',
          accountId: id,
        },
      })
        .then(res => {
          setLoading(false);
          if (res.data.success == true) {
            // console.log('cards', res.data.data);
            setBookings(res?.data?.data);
            // console.log(res.data.data);
            if (selectedState === 'Cancelled') {
              bookingFilter('REQUEST_CANCELLED');
            }
            if (selectedState === 'Active') {
              bookingFilter('ACTIVE');
            }
            if (selectedState == 'Requests') {
              bookingFilter('REQUESTED');
            }
            if (selectedState == 'Completed') {
              bookingFilter('COMPLETED');
            }
            setSuccess(true);
          }
          // console.log('runggnig', res.data);
        })
        .catch(e => {
          console.log('catch error', e);
          setLoading(false);
          setSuccess(false);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSuccess(false);
    }
  };

  // console.log('bookings', bookings);
  const deviceHeight =
    Platform.OS === 'ios'
      ? Dimensions.get('window').height
      : require('react-native-extra-dimensions-android').get(
          'REAL_WINDOW_HEIGHT',
        );
  const [modal, setModal] = React.useState(false);
  const {t} = useTranslation();
  useEffect(() => {
    getBookings();
  }, []);
  useEffect(() => {
    if (selectedState === 'Cancelled') {
      bookingFilter('REQUEST_CANCELLED');
    }
    if (selectedState === 'Active') {
      bookingFilter('ACTIVE');
    }
    if (selectedState == 'Requests') {
      bookingFilter('REQUESTED');
    }
    if (selectedState == 'Completed') {
      bookingFilter('COMPLETED');
    }
    if (selectedState == undefined) {
      setSelectedState('Requests');
    }
  }, [selectedState, bookings]);
  // console.log(selectedState);
  const bookingFilter = status => {
    // if (status === 'REQUESTED') {
    //   getBookings();
    // }
    setCard(
      bookings.filter(bookings => {
        return bookings.status_code === status;
      }),
    );
  };
  // console.log(
  //   bookings?.map(item => {
  //     return 'data', item.isRescheduled;
  //   }),
  // );
  const callBookingsSecondTime = state => {
    setSelectedState(state);
    getBookings();
  };
  return (
    <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
      {/* <FocusAwareStatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      /> */}

      <View
        style={{
          width: '100%',
          height: hp('15'),

          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            paddingHorizontal: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: hp('5'),
          }}>
          <TouchableOpacity activeOpacity={1}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
              }}
              style={{
                width: 35,
                height: 35,
                borderRadius: 35 / 2,
              }}
            />
          </TouchableOpacity>
          <Image
            source={require('../../../assets/Images/icon.png')}
            style={{
              width: 50,
              height: 50,
              alignSelf: 'center',
            }}
          />
          <AntDesign name="customerservice" color="grey" size={hp('3')} />
        </View>

        <FlatList
          horizontal
          contentContainerStyle={{
            alignSelf: 'center',
            marginTop: hp('3'),
            left: hp('2'),
            width: '100%',
            position: 'absolute',
            bottom: 0,
          }}
          data={OrderCategories}
          keyExtractor={item => item.text}
          renderItem={({item}) => (
            <Pressable
              onPress={() => {
                item?.text == 'Requests'
                  ? callBookingsSecondTime(item?.text)
                  : setSelectedState(item?.text);
              }}
              style={{
                borderBottomWidth: selectedState == item?.text ? 3 : 0,
                borderColor: lightAccent,
                paddingBottom: 10,
              }}>
              <Text
                style={{
                  fontSize: hp('2'),
                  marginHorizontal: 10,
                  fontFamily: selectedState == item?.text ? Heavy : light,

                  color: selectedState == item?.text ? lightAccent : 'grey',
                }}>
                {item?.text}
              </Text>
            </Pressable>
          )}
        />
      </View>

      {loading == true ? (
        <View style={{justifyContent: 'center', alignSelf: 'center'}}>
          <InAppLoading />
        </View>
      ) : success == true ? (
        <FlatList
          // style={{flex: 1, marginTop: hp('1')}}
          scrollEnabled
          contentContainerStyle={{marginTop: hp('1')}}
          data={cards}
          renderItem={({item}) => {
            {
              // console.log('item', item);
            }
            return (
              <BookingCard getBookings={() => getBookings()} data={item} />
            );
          }}
        />
      ) : (
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: hp('30'),
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: Regular,
              fontSize: hp('1.5'),
              marginBottom: hp('2'),
              color: 'black',
            }}>
            Something went wrong
          </Text>
          <TouchableOpacity
            onPress={() => {
              getBookings();
            }}
            style={{
              height: hp('5'),
              width: wp('22'),
              backgroundColor: lightAccent,
              justifyContent: 'center',
              borderRadius: 8,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: Regular,
                color: 'black',
                fontSize: hp('1.5'),
              }}>
              Try Again
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  modalTab: {
    // height: '34%',
    width: hp('22'),
    height: hp('4.5'),
    borderWidth: 0.4,
    backgroundColor: '#FFFFFF',
    // borderWidth: 0.5,
    borderColor: '#B7B7B7',
    // justifyContent: 'center',
    flexDirection: 'row',
    // alignSelf: 'center',
    // marginRight: hp('1'),
    // marginTop: hp('0.5'),
  },
  modalText: {
    // marginLeft: hp('1.5'),
    // marginTop: hp('1.5'),
    fontFamily: 'FilsonProRegular-Regular',
    fontSize: 14,
    color: '#B7B7B7',
    alignSelf: 'center',
    marginLeft: hp('1'),
    // position: 'absolute',
    // left: hp('3'),
    // height: hp('1'),
  },
  iconView: {
    // backgroundColor: 'grey',
    height: '100%',
    width: '20%',
    justifyContent: 'center',
  },
});

export default OrderScreen;
