import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {dardAccent, grey, semiBoldLegecy} from '../../components/styles/styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const ConfirmationModal = props => {
  return (
    <View
      style={{
        width: wp('80%'),
        height: hp('20'),
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 8,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: semiBoldLegecy,
          alignSelf: 'center',
          color: 'black',
          alignSelf: 'center',
        }}>
        Are you sure you want to cancel?
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: hp('3'),
        }}>
        <TouchableOpacity
          onPress={props.onPressDecline}
          style={{
            backgroundColor: 'white',
            height: hp('4'),
            width: wp('20'),
            justifyContent: 'center',
            borderWidth: 0.8,
            borderColor: grey,
            borderRadius: 8,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: semiBoldLegecy,

              alignSelf: 'center',
              color: 'black',
              alignSelf: 'center',
            }}>
            Decline
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.onPressConfirm}
          style={{
            backgroundColor: dardAccent,
            height: hp('4'),
            width: wp('20'),
            borderWidth: 0.8,
            borderColor: grey,
            justifyContent: 'center',
            borderRadius: 8,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: semiBoldLegecy,

              alignSelf: 'center',
              color: 'white',
              alignSelf: 'center',
            }}>
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmationModal;
