import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  borderColor,
  dardAccent,
  lightAccent,
  black,
  Heavy,
  light,
} from '../../../components/styles/styles';

export const DataCircles = props => {
  return (
    <View style={styles.container}>
      <View style={styles.outerC}>
        <View style={styles.innerC}>
          <Text style={styles.textCircle}>{props.number}</Text>
        </View>
      </View>
      <View style={styles.txtField}>
        <Text style={styles.circleText}>{props.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerC: {
    borderColor: lightAccent,
    borderWidth: wp('0.2'),
    borderRadius: 100,
    width: wp('18%'),
    alignSelf: 'center',
    justifyContent: 'center',
    height: hp('8.5%'),
  },
  innerC: {
    backgroundColor: dardAccent,
    height: hp('7.5%'),
    width: wp('16%'),
    borderRadius: wp('100%'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCircle: {
    fontSize: wp('4.2%'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontFamily: black,
  },
  container: {
    marginTop: wp('3%'),

    width: wp('30%'),
    height: hp('12%'),
    marginLeft: wp('2'),
  },
  txtField: {
    width: '100%',
    alignItems: 'center',
    // backgroundColor: 'lightblue',
    // marginLeft: wp('1%'),
  },
  circleText: {
    marginTop: wp('1%'),
    color: 'black',
    fontSize: 10,
    // marginLeft: hp('1'),

    // alignItems: 'center',
    // width: 120,
    alignSelf: 'center',
    fontFamily: light,
  },
});
