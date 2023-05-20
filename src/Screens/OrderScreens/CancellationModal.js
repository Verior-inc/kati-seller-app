import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  lightAccent,
  Regular,
  semiBoldLegecy,
} from '../../components/styles/styles';
const CancellationModal = props => {
  return (
    <View style={{justifyContent: 'space-between', flex: 1}}>
      <View style={{padding: hp('3'), width: wp('95%'), alignSelf: 'center'}}>
        <Text
          style={{
            fontSize: hp('2'),
            color: 'black',
            fontFamily: semiBoldLegecy,
            // marginTop: hp('1'),
          }}>
          Reason for Cancelation ?
        </Text>
        <TextInput
          value={props.value}
          onChangeText={props.onChangeText}
          style={{
            height: hp('5'),
            width: wp('87'),
            borderBottomWidth: 0.8,
            borderRadius: 8,
            alignSelf: 'center',
          }}
        />
      </View>

      {/* <View style={{height: hp('23')}}> */}
      <TouchableOpacity
        disabled={props?.disable.length < 5 ? true : false}
        onPress={props.onPress}
        style={{
          alignSelf: 'center',
          marginTop: hp('5'),

          backgroundColor: lightAccent,
          height: hp('5'),
          width: wp('87'),
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
      {/* </View> */}
    </View>
  );
};

export default CancellationModal;
