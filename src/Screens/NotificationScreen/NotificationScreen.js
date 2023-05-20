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
  FlatList,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Notifications from '../../components/Features/Notifications';
import {HeadingWithBtn} from '../../components/Header/HeaderWbtn';
import {FocusAwareStatusBar} from '../../components/Features/Statusbar';
import {useTranslation} from 'react-i18next';
import axios from 'axios';
import {useEffect} from 'react';
import {API_KEY, BASE_URL} from '@env';
import {useState} from 'react';
const NotificationScreen = props => {
  const {t} = useTranslation();
  const [data, setData] = useState([]);
  const getNotification = async () => {
    const id = await AsyncStorage.getItem('userInfo');
    let temp = JSON.parse(id);

    const req = await axios({
      url: BASE_URL + 'notifications/get-notifications/' + `${temp._id}`,
    });
    if (req?.data.success === true) {
      // console.log('notfications', req.data.success);
      setData(req.data.data);
    }
  };

  useEffect(() => {
    getNotification();
  }, []);

  // console.log('data', props);

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      {/* <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      /> */}
      <View style={{height: hp('14')}}>
        <HeadingWithBtn name={t('common:Notification:Heading')} />
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Booking details order');
          }}
          style={{
            flexDirection: 'row',
            // marginLeft: wp('60'),
            // marginTop: wp('4'),
            position: 'absolute',
            right: hp('3'),
            bottom: hp('1'),
            // top: hp('5'),
          }}>
          <Ionicons
            name="checkmark-done-sharp"
            size={hp('2')}
            color={'#B7B7B7'}
          />
          <Text
            style={{
              alignSelf: 'center',
              marginLeft: wp('1'),
              color: '#B7B7B7',
              fontFamily: 'FilsonProRegular-Regular',
              fontSize: 13,
            }}>
            {t('common:Notification:Mark')}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        contentContainerStyle={{marginTop: hp('1'), paddingBottom: hp('2')}}
        renderItem={({item}) => {
          // console.log('item', item);
          return <Notifications data={item} color={'#000100'} />;
        }}
      />
      {/* <ScrollView style={{marginTop: hp('7')}}> */}
      {/* <Notifications data={data} color={'#000100'} />
        <Notifications color={'#B7B7B7'} /> */}
      {/* </ScrollView> */}
    </View>
  );
};

export default NotificationScreen;
