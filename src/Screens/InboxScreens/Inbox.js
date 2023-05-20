import React, {useEffect} from 'react';
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
  Platform,
  FlatList,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import InboxNotif from './InboxNotif';
import HeadingTxt from '../../components/Header/HeaderWobtn';

import {FocusAwareStatusBar} from '../../components/Features/Statusbar';
import {useTranslation} from 'react-i18next';
import Octicons from 'react-native-vector-icons/Octicons';
import {io} from 'socket.io-client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_KEY, BASE_URL} from '@env';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useState} from 'react';
import Chats from './Chats';

const Inbox = props => {
  const {t} = useTranslation();
  const [chatRooms, setChatRooms] = useState([]);
  const socket = io(BASE_URL);
  const [userInfo, setUserinfo] = useState({});
  const [search, setSearch] = useState('');
  socket.on('connection', socket => {
    console.log('this', socket.id); // x8WIv7-mJelg7on_ALbx
  });
  const getId = async () => {
    let id = await AsyncStorage.getItem('userInfo');
    let Json = JSON.parse(id);
    socket.emit('get-chatrooms', {type: 'seller', id: Json._id});
    socket.on('rooms', rooms => setChatRooms(rooms));
  };
  const getImage = async () => {
    let data = await AsyncStorage.getItem('userInfo');
    let info = JSON.parse(data);
    setUserinfo(info);
  };

  useEffect(() => {
    getId();
    getImage();
  }, []);
  const SearchFunction = text => {
    let filtered = chatRooms.filter(item => {
      return item.user.name.toLowerCase().includes(text.toLowerCase());
    });
    setChatRooms(filtered);
  };
  useEffect(() => {
    if (search.length > 3) {
      SearchFunction(search);
    } else {
      getId();
    }
  }, [search]);
  // console.log(chatRooms[0].user.name);

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      {/* <FocusAwareStatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      /> */}
      <View
        style={{
          width: '100%',
          height: Platform.OS == 'android' ? hp('15') : hp('15'),
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingTop: 20,
        }}>
        <Ionicons name="filter" color="grey" size={hp('3.5')} />
        <View
          style={{
            width: '75%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
            borderRadius: 30,
            height: hp('5'),
            backgroundColor: '#f3f3f3',
          }}>
          <Octicons name="search" color="grey" size={hp('2.5')} />
          <TextInput
            style={{
              flex: 1,
              paddingLeft: 10,
              fontSize: hp('2'),
              color: 'black',
            }}
            placeholder="Search"
            onChangeText={e => {
              setSearch(e);
            }}
            value={search}
            placeholderTextColor={'black'}
          />
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            props.navigation.navigate('ProfileScreensStack');
          }}>
          <Image
            source={{
              uri: BASE_URL + userInfo.profile,
              // uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
            }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 40 / 2,
            }}
          />
        </TouchableOpacity>
      </View>
      {chatRooms.length > 0 ? (
        <FlatList
          data={chatRooms}
          renderItem={({item}) => {
            return <Chats data={item} />;
          }}
        />
      ) : null}
      {/* <HeadingTxt name={t('common:Chat:Chat')} /> */}
      {/*       
      <ScrollView style={{flex: 1, marginTop: 20}}>
         <InboxNotif />
        <InboxNotif /> 
        
        <OldNotif /> 
      </ScrollView> */}
    </View>
  );
};

export default Inbox;
