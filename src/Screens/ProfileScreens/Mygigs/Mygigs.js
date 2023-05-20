import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import noWifi from '../../../components/assests/noWifi.png';
import axios from 'axios';
import {FocusAwareStatusBar} from '../../../components/Features/Statusbar';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TickList from '../../../../assets/fonts/TickList.svg';
import Tick from '../../../../assets/fonts/Tick.svg';
import {MygigViewDetailCard} from './MygigViewDetailCard';
import NetInfo from '@react-native-community/netinfo';
import EncryptedStorage from 'react-native-encrypted-storage';
import {
  lightAccent,
  Regular,
  semiBold,
} from '../../../components/styles/styles';

import {useTranslation} from 'react-i18next';
import {useContext} from 'react';
import {AuthContext} from '../../../components/Authentication/AuthContext';
import {addgig} from '../../../components/redux/reducer';
import {API_KEY} from '@env';
import Loading from '../../../components/Loader/Loading';
export const Mygigs = props => {
  const {baseUrl} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const connection = NetInfo.useNetInfo();
  const [modalVisible, setModalVisible] = useState(false);
  const [modal, setModal] = React.useState(false);
  // const get = useSelector(state => {
  //   return state.gig?.map(item => {
  //     return item;
  //   });
  // });

  // const gigs = get?.map(item => {
  //   return item;
  // });
  // console.log(JSON.parse(gigs?.title));

  const getData = async () => {
    const temp = await EncryptedStorage.getItem('hashKey');
    const hashKey = JSON.parse(temp);
    // console.log(hashKey);
    setLoading(true);

    try {
      await axios({
        method: 'get',
        url: baseUrl + 'gigs/get-my-gigs/' + `${hashKey}`,
        params: {apikey: API_KEY},
      }).then(res => {
        // res.data;
        // console.log(res.data);
        res.data?.data?.map(item => {
          // dispatch(addgig(item));
          // console.log({item});
          return setData(item);
        });
        // setData(temp);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
      setModalVisible(true);
    }
  };

  useEffect(() => {
    getData();
    if (connection.isConnected === true) {
      setModalVisible(false);
    }
  }, [connection.isConnected]);

  const {t} = useTranslation();
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight =
    Platform.OS === 'ios'
      ? Dimensions.get('window').height
      : require('react-native-extra-dimensions-android').get(
          'REAL_WINDOW_HEIGHT',
        );

  return (
    <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <Modal
        onBackdropPress={() => {
          setModalVisible(false);
        }}
        isVisible={modalVisible}
        style={{justifyContent: 'center'}}>
        <View
          style={{
            alignSelf: 'center',
            height: hp('20'),
            width: wp('70%'),
            borderRadius: 12,
            backgroundColor: 'white',
            // justifyContent: 'center',
          }}>
          <Image
            source={require('../../../components/assests/noWifi.png')}
            style={{
              height: hp('10'),
              width: wp('20'),
              alignSelf: 'center',
              top: hp('0'),
            }}
          />
          <Text
            style={{alignSelf: 'center', color: 'red', fontFamily: Regular}}>
            Network issue
          </Text>
          <TouchableOpacity
            onPress={() => {
              getData();
              setModalVisible(false);
            }}
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              backgroundColor: lightAccent,
              height: hp('5'),
              width: wp('60%'),
              borderRadius: 8,
              position: 'absolute',
              bottom: hp('1'),
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontFamily: semiBold,
                fontSize: hp('2'),
                color: 'white',
              }}>
              Try again
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
          size={hp('2.5')}
          onPress={() => props.navigation.goBack()}
        />

        <Text
          style={{
            color: lightAccent,
            fontSize: hp('2.3%'),
            fontWeight: '500',
            fontFamily: 'FilsonProRegular-Regular',
            // marginLeft: hp('13'),
          }}>
          {t('common:profile:mygigs:Heading')}
        </Text>
        <View
          style={{
            height: hp('4'),
            // width: wp('25'),
            borderColor: '#B7B7B7',
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            borderWidth: wp('0.2'),
            alignSelf: 'baseline',
            position: 'absolute',
            top: hp('6'),
            right: hp('4'),
            // marginLeft: wp('2'),
            // marginTop: wp('12'),
          }}>
          <TouchableOpacity
            onPress={() => setModal(true)}
            style={{flexDirection: 'row', backgroundColor: '#FFFFFF'}}>
            <AntDesign
              name="filter"
              color={'#B7B7B7'}
              size={wp('6')}
              style={{
                marginTop: wp('1'),
                marginLeft: wp('2'),
                fontFamily: 'FilsonProThin-Thin',
              }}
            />
            <Text
              style={{
                alignSelf: 'center',
                color: '#B7B7B7',
                marginRight: hp('1'),
              }}>
              {t('common:profile:mygigs:Filterby')}
            </Text>
          </TouchableOpacity>
        </View>
        <Modal
          // isVisible={modal}
          deviceHeight={deviceHeight}
          deviceWidth={deviceWidth}
          backdropOpacity={0.7}
          animationIn={'slideInUp'}
          backdropColor={'black'}
          // transparent={true}
          hasBackdrop
          onBackdropPress={() => {
            setModal(false);
          }}
          isVisible={modal}>
          <View
            style={{
              position: 'absolute',
              overflow: 'hidden',
              backgroundColor: '#FFFFFF',
              // justifyContent: 'center',
              // width: hp('22'),

              borderWidth: 0.4,
              alignSelf: 'center',

              borderColor: '#B7B7B7',
            }}>
            <TouchableOpacity
              onPress={() => setModal(false)}
              style={styles.modalTab}>
              <Image
                style={{marginLeft: hp('1.2'), alignSelf: 'center'}}
                source={require('../../../../assets/list.png')}
              />
              <Text style={styles.modalText}>
                {t('common:profile:mygigs:ActiveGigs')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModal(false)}
              style={styles.modalTab}>
              <View
                style={{
                  // marginTop: hp('1'),
                  flexDirection: 'row',
                  marginLeft: hp('1.2'),
                  // height: hp('8'),

                  // alignSelf: 'center',
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    // marginLeft: hp('-2.5'),
                    alignSelf: 'center',
                  }}>
                  <View>
                    <Tick height={25} width={22} />
                  </View>
                  <TickList height={30} width={22} />
                </View>
              </View>

              <Text
                style={{
                  ...styles.modalText,
                  marginLeft: hp('4'),
                  alignSelf: 'center',
                }}>
                {t('common:profile:mygigs:DeletedGigs')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModal(false)}
              style={styles.modalTab}>
              <Image
                style={{marginLeft: hp('1'), marginTop: hp('1')}}
                source={require('../../../../assets/listX.png')}
              />
              <Text style={styles.modalText}>
                {t('common:profile:mygigs:PendingGigs')}
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
        <ScrollView style={{marginTop: hp('5')}}>
          <MygigViewDetailCard data={data} />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  modalTab: {
    height: hp('5'),
    backgroundColor: '#FFFFFF',
    borderWidth: 0.3,
    borderColor: '#B7B7B7',
    flexDirection: 'row',
    // marginRight: hp('2'),
  },
  modalText: {
    marginLeft: hp('1.5'),
    // marginTop: hp('1.5'),
    marginRight: hp('1'),
    fontFamily: 'FilsonProThin-Thin',
    fontSize: 13,
    alignSelf: 'center',
    color: 'black',
  },
});
