import React, {useState, useRef, useEffect} from 'react';
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
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Keyboard,
  BackHandler,
  Dimensions,
  FlatList,
} from 'react-native';
// import {TextInput} from 'react-native-paper';

import AudioCircle from '../../../assets/AudioCircle.svg';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useIsFocused} from '@react-navigation/native';
import {FocusAwareStatusBar} from '../../components/Features/Statusbar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {HeadingName} from './MsgSenderName';
import {lightAccent, dardAccent, grey} from '../../components/styles/styles';
import {useTranslation} from 'react-i18next';
import {API_KEY, BASE_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import {io} from 'socket.io-client';
const MsgScreen = ({route}) => {
  const [msg, setMsg] = useState('');
  const {otherParam} = route.params;
  const [message, setMessage] = useState([]);
  const [userId, setUserId] = useState('');
  const {t} = useTranslation();
  const socket = io(BASE_URL);
  socket.on('connection', socket => {
    console.log('this', socket.id); // x8WIv7-mJelg7on_ALbx
  });
  //id and type will be set automaticaly remove {id: Math.random(), type: 0,

  const sendMessage = async () => {
    // let userId = await AsyncStorage.getItem('userInfo');
    // let sellerId = await EncryptedStorage.getItem('id');
    // let Json = JSON.parse(userId);
    socket.emit('send-message', {
      text: msg,
      roomId: otherParam.roomId,
      sent_by: userId,
      sent_to: otherParam.sent_to,
      sellerId: userId,
      userId: otherParam.sent_to,
    });
    setMessage(pre => [
      ...pre,
      {id: Math.random(), sent_by: userId, message: msg},
    ]);
    setMsg('');
  };
  const getUserId = async () => {
    let userId = await AsyncStorage.getItem('userInfo');
    let Json = JSON.parse(userId);
    setUserId(Json._id);
  };
  useEffect(() => {
    getUserId();
    socket.on('message-recieved', msg => {
      alert(msg), console.log(msg);
    });

    socket.emit('get-messages', otherParam.roomId);
    socket.on('room-messages', msgs => {
      setMessage(msgs);
    });
    //   setMessage(pre => [...pre, {id: Math.random(), type: 0, text: msg}]),
    // );
  }, []);
  // console.log('username', otherParam.userName);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F9F9F9',
      }}>
      {/* \\\\\\\\\\\\\\\\\\\\Input View /////////////////////////// */}

      <FocusAwareStatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={{alignSelf: 'center'}}>
        <HeadingName user={otherParam.userName} />
      </View>
      <FlatList
        data={message}
        keyExtractor={item => item._id}
        contentContainerStyle={{paddingBottom: hp('10')}}
        renderItem={({item}) => {
          // console.log(item);
          return (
            <View
              style={{
                flex: 1,
              }}>
              {item.sent_by != userId ? (
                <>
                  <View style={{flexDirection: 'row', marginTop: hp('1')}}>
                    <View
                      style={{
                        height: hp('5.5'),
                        width: wp('11.5'),
                        marginLeft: wp('6'),
                        marginRight: wp('2'),
                        justifyContent: 'flex-end',
                      }}>
                      <Image
                        source={require('../../../assets/Profile.png')}
                        style={{
                          borderRadius: wp('100'),
                          height: hp('5.5'),
                          width: wp('11.5'),
                          // position: 'absolute',
                        }}
                      />
                    </View>
                    <View
                      style={{
                        backgroundColor: '#FFFFFF',
                        // width: wp('60'),
                        justifyContent: 'center',
                        // marginTop: hp('4'),
                        borderWidth: wp('0.1'),
                        borderColor: 'grey',
                        alignItems: 'center',
                        borderRadius: wp('2'),
                      }}>
                      <Text
                        style={{
                          // marginTop: hp('1'),
                          // alignSelf: 'center',
                          fontSize: 13,
                          color: 'black',
                          // width: wp('65'),
                          lineHeight: 18,
                          paddingLeft: hp('2'),
                          paddingRight: hp('2'),
                          // marginLeft: wp('4.5 '),
                          // textAlign: 'center',

                          fontFamily: 'FilsonProRegular-Regular',
                        }}>
                        {item.message}
                      </Text>
                    </View>
                  </View>

                  <View style={{flexDirection: 'column'}}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#B7B7B7',
                        alignSelf: 'flex-start',
                        marginLeft: hp('10'),
                        marginTop: hp('0.5'),
                        fontFamily: 'FilsonProRegular-Regular',
                      }}>
                      22:33
                    </Text>
                  </View>
                </>
              ) : (
                <View>
                  <View
                    style={{
                      justifyContent: 'center',
                      marginTop: hp('2'),
                      borderWidth: wp('0.1'),
                      alignItems: 'center',
                      alignSelf: 'flex-end',
                      padding: hp('2'),
                      backgroundColor: '#B7B7B7',
                      borderWidth: wp('0.1'),
                      borderColor: '#B7B7B7',
                      borderRadius: wp('2'),
                      marginRight: hp('2'),
                    }}>
                    <Text
                      style={{
                        // marginTop: hp('1'),
                        fontSize: 13,
                        // textAlignVertical: 'center',
                        // marginLeft: wp('5'),
                        // alignSelf: 'center',
                        color: 'black',
                        fontFamily: 'FilsonProRegular-Regular',
                      }}>
                      {item.message}
                    </Text>
                  </View>
                  <View style={{alignSelf: 'flex-end', marginRight: hp('2')}}>
                    <Text style={{color: '#B7B7B7', marginTop: hp('1')}}>
                      22:33
                    </Text>
                  </View>
                </View>
              )}
            </View>
          );
        }}
      />

      <View
        style={{
          position: 'absolute',
          bottom: hp('3'),
          flexDirection: 'row',
        }}>
        <View
          style={{
            backgroundColor: '#F9F9F9',
            flexDirection: 'row',
          }}>
          <Fontisto
            name="camera"
            size={hp('3')}
            color={'black'}
            style={{
              marginLeft: 10,
              alignSelf: 'center',
            }}
          />

          <Image
            source={require('../../../assets/app-store.png')}
            style={{
              height: hp('3.5'),
              alignSelf: 'center',
              marginLeft: 10,
              width: wp('8'),
            }}
          />
        </View>
        {/* <KeyboardAvoidingView> */}
        <View
          style={{
            marginLeft: 25,
            height: hp('5'),
            borderWidth: 0.3,
            backgroundColor: '#F9F9F9',
            borderRadius: 20,
            width: wp('67'),
            flexDirection: 'row',
          }}>
          <TextInput
            showSoftInputOnFocus={true}
            placeholder={t('common:Chat:input')}
            placeholderTextColor={'#B7B7B7'}
            value={msg}
            onChangeText={val => {
              setMsg(val);
            }}
            style={{
              // paddingTop: 10,
              width: wp('56'),
              paddingLeft: hp('2'),
              color: grey,
            }}
          />
          {msg.length > 0 ? (
            <TouchableOpacity
              onPress={() => {
                sendMessage();
              }}
              style={{justifyContent: 'center'}}>
              <Ionicons
                name="send"
                size={hp('3')}
                color={dardAccent}
                style={{alignSelf: 'center', left: hp('1')}}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        {/* </KeyboardAvoidingView> */}
      </View>
    </View>
  );
};

export default MsgScreen;
