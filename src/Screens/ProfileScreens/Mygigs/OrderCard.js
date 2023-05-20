import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const OrderCard = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: wp('84'),
          backgroundColor: '#FFFFFF',
          borderColor: '#B7B7B7',
          borderWidth: wp('0.1'),
          marginTop: wp('4'),
          alignSelf: 'center',
          height: hp('21.6%'),
        }}>
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row', padding: wp('5')}}>
            <Image
              source={require('../../../assets/Profile.png')}
              style={{width: wp('20'), height: hp('9')}}
            />
            <View
              style={{
                flexDirection: 'column',
                width: wp('50'),
                marginLeft: wp('4'),
              }}>
              <Text
                style={{
                  fontSize: wp('5'),
                  color: 'black',

                  fontFamily: 'FilsonProRegular-Regular',
                }}
                numberOfLines={2}>
                I will be taking care of your child
              </Text>

              <View style={{flexDirection: 'row', marginTop: wp('1.5')}}>
                <Text
                  style={{
                    fontSize: wp('4.5'),
                    color: 'black',
                    fontFamily: 'FilsonProLight-Light',
                  }}>
                  Date
                </Text>
                <Text
                  style={{
                    fontSize: wp('4'),
                    color: 'grey',
                    marginLeft: wp('22'),
                    fontFamily: 'FilsonProLight-Light',
                  }}>
                  22-4-22
                </Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('DetailOrder')}
          style={{
            width: wp('75'),
            borderColor: '#9ED5E3',
            borderWidth: wp('0.1'),
            alignSelf: 'center',
            height: hp('5'),
            marginTop: wp('1'),
          }}>
          <Text
            style={{
              alignSelf: 'center',
              paddingTop: wp('2.8'),
              fontWeight: '500',
              color: '#9ED5E3',
              fontFamily: 'FilsonProRegular-Regular',
            }}>
            View details
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderCard;
