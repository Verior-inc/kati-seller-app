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
  FlatList,
  Platform,
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
} from '../../components/styles/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Heading} from './HomeUiComp/Heading';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import InAppLoading from '../../components/Loader/InappLoader';
import {DataCircles} from './HomeUiComp/DataCircle';
import {FocusAwareStatusBar} from '../../components/Features/Statusbar';
import {useTranslation} from 'react-i18next';
import EncryptedStorage from 'react-native-encrypted-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useContext} from 'react';
import {AuthContext} from '../../components/Authentication/AuthContext';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {API_KEY, BASE_URL} from '@env';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import {useEffect} from 'react';
import {useState} from 'react';
const Home = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const {msg} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [success, setSuccess] = useState(false);
  const [userInfo, setUserinfo] = useState('');
  const DashBoardInfo = async () => {
    // const hashkey = await EncryptedStorage.getItem('hashKey');
    try {
      const id = await EncryptedStorage.getItem('id');
      let info = await AsyncStorage.getItem('userInfo');
      setLoading(true);
      let response = await axios({
        method: 'get',
        // timeout: 1000 * 10,
        url: BASE_URL + `sellers/get-dashboard/${id}`,
        params: {apikey: API_KEY},
      });
      setData(response.data.data);
      setSuccess(true);
      setLoading(false);
      setUserinfo(JSON.parse(info));
      // .then(res => {
      //   console.log('request', res.data.data);
      //   setData(res);
      // })
      // .catch(e => {
      //   console.log(e);
      // });
    } catch (error) {
      setLoading(false);
      setSuccess(false);
      console.log('dashBoard api Error', error);
    }
  };
  // console.log('data', userInfo.sellerName);
  const CATEGORIES_DATA = [
    {
      title: 'Booking Requests',
      quantity: data?.requestedCount,
      color: '#63BF94',
      icon: (
        <MaterialIcons name="pending-actions" color="white" size={hp('5')} />
      ),
      onPress: () => {
        navigation.navigate({
          name: 'Order',
          params: {post: 'Requests'},
          merge: true,
        });
      },
    },
    {
      title: 'Completed Bookings',
      color: '#D9A404',
      quantity: data?.completedCount,
      icon: <AntDesign name="calendar" color="white" size={hp('4')} />,
      onPress: () => {
        navigation.navigate({
          name: 'Order',
          params: {post: 'Completed'},
          merge: true,
        });
      },
    },
    {
      title: 'Cancelled Bookings',
      color: '#A6033F',
      quantity: data?.cancelledCount,
      icon: (
        <MaterialCommunityIcons
          name="table-cancel"
          color="white"
          size={hp('4.5')}
        />
      ),
      onPress: () => {
        navigation.navigate({
          name: 'Order',
          params: {post: 'Cancelled'},
          merge: true,
        });
      },
    },
    {
      title: 'Ongoing Bookings',
      color: '#2E3C8C',
      quantity: data?.activeCount,
      icon: (
        <FontAwesome name="calendar-check-o" color="white" size={hp('4')} />
      ),
      onPress: () => {
        navigation.navigate({
          name: 'Order',
          params: {post: 'Active'},
          merge: true,
        });
      },
    },
    {
      title: 'Total Earnings',
      color: '#4F37A6',
      quantity: data?.totalEarnings,
      icon: <MaterialIcons name="attach-money" color="white" size={hp('4')} />,
      onPress: () => {
        navigation.navigate('ProfileScreensStack');
      },
    },
    {
      title: 'New Updates',
      color: '#FF6F61',
      quantity: data?.updates,
      icon: <Entypo name="notification" color="white" size={hp('4')} />,
      onPress: () => {
        navigation.navigate('Notifications');
      },
    },
    {
      title: 'Analytics',
      color: '#DD4124',
      quantity: data?.totalEarnings,
      icon: <Ionicons name="analytics" color="white" size={hp('4')} />,
      onPress: () => {
        navigation.navigate('ProfileScreensStack');
      },
    },
  ];

  const del = async () => {
    const test = await EncryptedStorage.clear();
    const test2 = await AsyncStorage.clear();
    test;
    test2;

    return navigation.navigate('Login');
  };

  useEffect(() => {
    DashBoardInfo();
  }, []);

  const CategoryComponent = ({data}) => {
    return (
      <View
        style={{
          width: '45%',
          height: hp('22'),
          backgroundColor: data?.color,
          borderRadius: 10,
          margin: 10,
        }}>
        <TouchableOpacity
          onPress={data.onPress}
          style={{
            width: 40,
            height: 40,
            borderWidth: 1,
            borderColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 40 / 2,
            alignSelf: 'flex-end',
            margin: 15,
            backgroundColor: 'white',
          }}>
          <AntDesign name="arrowright" color="black" size={hp('2')} />
        </TouchableOpacity>
        <View
          style={{
            margin: 10,
            bottom: 20,
          }}>
          {data?.icon}
          <View style={{marginTop: hp('0.5')}}>
            <Text
              style={{
                fontSize: hp('2'),
                color: 'white',
                fontFamily: 'FilsonProRegular-Regular',
              }}>
              {data?.title}
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: hp('4'),
            left: 10,
            bottom: 10,
            fontFamily: semiBoldLegecy,
            color: 'white',
            position: 'absolute',
            bottom: 0,
          }}>
          {data?.quantity}
        </Text>
      </View>
    );
  };
  // const Tab = () => {
  //   return (
  //     <View>

  //     </View>
  //   )
  // }

  return (
    <View
      style={{flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center'}}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      {loading == true ? (
        <View style={{alignSelf: 'center', justifyContent: 'center'}}>
          <InAppLoading />
        </View>
      ) : success === true ? (
        <>
          <View
            style={{
              width: '100%',
              height: Platform.OS == 'android' ? hp('10') : hp('10'),
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,

              elevation: 2,
              backgroundColor: 'white',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingTop: 10,
              marginTop: hp('2'),
            }}>
            <Ionicons name="ios-home-outline" color="black" size={hp('3.5')} />
            <Text
              style={{
                fontSize: hp('2.5'),
                color: 'black',
                fontFamily: 'FilsonProLight-Light',
              }}>
              Dashboard
            </Text>
            <View>
              <Ionicons
                name="notifications-outline"
                color="black"
                size={hp('3.5')}
              />
              <View
                style={{
                  width: 14,
                  height: 14,
                  borderWidth: 1,
                  borderRadius: 14 / 2,
                  backgroundColor: 'red',
                  borderColor: 'red',
                  position: 'absolute',
                  bottom: 3,
                }}
              />
            </View>
          </View>
          <View style={{margin: hp('2')}}>
            <Text
              style={{fontFamily: Regular, fontSize: hp('2'), color: 'black'}}>
              Welcome back,
            </Text>
            <Text
              style={{fontFamily: Regular, fontSize: hp('2'), color: 'black'}}>
              Good Morning {userInfo.sellerName}
            </Text>
          </View>

          <FlatList
            // style={{marginBottom: hp('10')}}
            contentContainerStyle={{marginBottom: hp('25')}}
            numColumns={2}
            data={CATEGORIES_DATA}
            renderItem={({item}) => <CategoryComponent data={item} />}
          />
          <TouchableOpacity
            onPress={() => {
              del();
            }}>
            <Text style={{color: 'black', alignSelf: 'center'}}>
              logout will delete this in future{' '}
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        //if the requent failed
        <View style={{alignSelf: 'center', justifyContent: 'center'}}>
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
              DashBoardInfo();
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
                fontSize: hp('1.5'),
                color: 'black',
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
  CirclesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: hp('13%'),
  },
  text: {
    marginLeft: wp('5.5%'),
    marginTop: wp('8%'),
    fontSize: wp('3.2%'),
    color: 'black',
    fontFamily: 'FilsonProLight-Light',
  },
  CurrencyTxt: {
    marginTop: wp('8%'),
    fontSize: hp('2.8%'),

    color: lightAccent,
    marginRight: wp('5%'),
    fontFamily: semiBoldLegecy,
  },
  thinTxt: {
    marginTop: hp('4%'),
    fontSize: wp('3.5%'),
    color: lightAccent,

    fontFamily: 'FilsonProRegular-Regular',
  },
});

export default Home;
//removed

//  <Heading margin={hp('7')} name={t('common:home:Bookinginfo')} />
//       <View style={styles.CirclesContainer}>
//         <DataCircles text={t('common:home:BookingCompleted')} number={'34'} />
//         <DataCircles text={t('common:home:ActiveBooking')} number={'34'} />
//         <DataCircles text={t('common:home:BookingCancelled')} number={'34'} />
//       </View>
//       <Heading margin={hp('3')} name={t('common:home:YourResponce')} />
//       {/* 2ndCircle */}
//       <View style={styles.CirclesContainer}>
//         <DataCircles text={t('common:home:Responcerate')} number={'82%'} />
//         <DataCircles
//           text={t('common:home:Coustumersresponce')}
//           number={'78%'}
//         />
//         <DataCircles text={t('common:home:reviews')} number={'34'} />
//       </View>

//       <Heading margin={hp('2')} name={t('common:home:earning')} />
//       <View>
//         <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//           <Text style={styles.text}>{t('common:home:IncomeEarned')}</Text>
//           <Text style={styles.CurrencyTxt}>$2300</Text>
//         </View>
//         <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//           <Text style={styles.text}>{t('common:home:IncomePending')}</Text>
//           <Text style={styles.CurrencyTxt}>$300</Text>
//         </View>
//         <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//           <Text style={styles.text}>{t('common:home:IncomeCancelled')}</Text>
//           <Text style={styles.CurrencyTxt}>$50</Text>
//         </View>
//       </View>
//       <Heading margin={hp('3%')} name={t('common:home:ProfileStatics')} />
//       <View style={{flexDirection: 'row'}}>
//         <Text style={styles.text}>{t('common:home:ProfileViews')}</Text>
//         <MaterialCommunityIcons
//           name="arrow-up-thin"
//           size={hp('2.4%')}
//           style={{
//             marginLeft: wp('54%'),
//             marginTop: hp('4%'),

//             color: lightAccent,
//           }}
//         />
//         <Text style={styles.thinTxt}>28%</Text>
//       </View>
//       <View
//         style={{
//           borderWidth: 4,
//           width: wp('50'),
//           alignSelf: 'center',
//           marginTop: hp('5%'),
//         }}>
//         <TouchableOpacity
//           onPress={() => {
//             del();
//           }}>
//           <Text style={{color: 'black'}}>
//             temperory logout ill remove it after testing
//           </Text>
//         </TouchableOpacity>
//       </View>
