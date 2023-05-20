import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {lightAccent, Regular} from '../../components/styles/styles';
import {semiBoldLegecy} from '../../components/styles/styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const RescheduleCard = props => {
  return (
    <View
      style={{
        width: widthPercentageToDP('95'),
        marginTop: heightPercentageToDP('2'),
        // borderWidth: 0.4,
        alignSelf: 'center',
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View>
          <Text style={Styles.heading}>Rechedule</Text>
          <Text style={Styles.simpleText}>
            Want to reschedule your meeting?
          </Text>
        </View>
        <AntDesign size={heightPercentageToDP('7')} name="clockcircleo" />
      </View>
      <TouchableOpacity
        onPress={props.onPress}
        style={{
          alignSelf: 'center',
          marginTop: heightPercentageToDP('2'),
          backgroundColor: lightAccent,
          height: heightPercentageToDP('5'),
          width: widthPercentageToDP('80'),
          borderRadius: 8,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            ...Styles.simpleText,
            color: 'black',
            marginTop: 0,
          }}>
          Rechedule
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  simpleText: {
    fontSize: 15,
    fontFamily: Regular,
    color: 'grey',
    marginTop: 5,
    alignSelf: 'center',
  },
  heading: {
    fontSize: 18,
    fontFamily: semiBoldLegecy,
    color: 'black',
    // alignSelf: 'center',
  },
});

export default RescheduleCard;
