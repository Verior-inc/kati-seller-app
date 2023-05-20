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
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const Chats = ({data}) => {
  const navigation = useNavigation();
  // console.log('data', data.user.name);
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <TouchableOpacity
        onPress={() =>
          navigation.push('MsgScreen', {
            otherParam: {
              roomId: data._id,
              sent_to: data.user._id,
              userName: data.user.name,
            },
          })
        }>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginLeft: wp('6'),
            marginTop: hp('5'),
          }}>
          <View>
            <Image
              source={require('../../../assets/Profile.png')}
              style={{
                borderRadius: wp('100'),
                height: hp('5.5'),
                width: wp('11.5'),
              }}
            />
            <View
              style={{
                backgroundColor:
                  data.user.status_code === 'ACTIVE' ? 'green' : 'red',
                height: hp('1'),
                width: hp('1'),
                borderRadius: 100,
                position: 'absolute',
                bottom: hp('0'),
                right: hp('0'),
              }}
            />
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                marginTop: wp('2'),
                marginLeft: wp('2'),
                color: 'black',
                fontFamily: 'FilsonProBook-Book',
              }}>
              {data.user.name}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                marginLeft: wp('2'),
                width: wp('45'),
                color: '#B7B7B7',
                fontFamily: 'FilsonProBook-Book',
              }}>
              This is insane to see you ansn
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Chats;
