import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import Modal from 'react-native-modal';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {lightAccent, semiBold} from '../styles/styles';
const SucessModal = props => {
  return (
    <Modal isVisible={props.isVisible}>
      <View style={styles.modal}>
        <Text style={styles.text}>{props?.message?.slice(0, 31)}</Text>
        {/* <Text style={styles.text}>{props.message}</Text> */}
        <TouchableOpacity onPress={props.onPress} style={styles.button}>
          <Text style={{...styles.text, color: 'white'}}>Continue</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    height: hp('20'),
    width: wp('95'),
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    fontFamily: semiBold,
    alignSelf: 'center',
    color: 'black',
    fontSize: hp('2'),
  },
  button: {
    backgroundColor: lightAccent,
    height: hp('5'),
    width: wp('80%'),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: hp('2'),
  },
});

export default SucessModal;
