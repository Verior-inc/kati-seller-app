import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {
  grey,
  lightAccent,
  semiBoldLegecy,
} from '../../components/styles/styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Regular} from '../../components/styles/styles';
import DatePicker from 'react-native-date-picker';

const MyModalizeView = props => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [fromDateOpen, setFromDateOpen] = useState(false);
  const [toDateOpen, setToDateOpen] = useState(false);

  // console.log('date', props.fromDate);
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={styles.headingTxt}>Rechedule</Text>
        <TouchableOpacity
          onPress={props.onPressClose}
          style={{position: 'absolute', right: hp('2'), top: hp('2')}}>
          <AntDesign name="close" size={hp('2.2')} />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.simpleHeading}>Select date</Text>
        <View>
          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={styles.dateCard}>
            <DatePicker
              minimumDate={new Date()}
              modal
              mode="date"
              open={open}
              date={props?.date}
              onConfirm={date => {
                setOpen(false);
                props?.getDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
            <Text style={{marginLeft: hp('1')}}>
              {props?.date?.toString()?.slice(0, 10)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* extra view for  flex direction row for from and to date */}
      <View>
        <Text style={styles.simpleHeading}>Timings</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              setFromDateOpen(true);
            }}
            style={{...styles.dateCard, width: wp('40%')}}>
            <DatePicker
              minimumDate={new Date()}
              modal
              mode="date"
              open={fromDateOpen}
              date={props?.fromDate}
              onConfirm={date => {
                setFromDateOpen(false);
                props?.getFromDate(date);
              }}
              onCancel={() => {
                setFromDateOpen(false);
              }}
            />
            <Text style={{marginLeft: hp('1')}}>
              From "{props?.fromDate?.toString().slice(0, 10)}"
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setToDateOpen(true);
            }}
            style={{...styles.dateCard, width: wp('40%')}}>
            <DatePicker
              minimumDate={new Date()}
              modal
              mode="date"
              open={toDateOpen}
              date={props?.toDate}
              onConfirm={date => {
                setToDateOpen(false);
                props?.getToDate(date);
              }}
              onCancel={() => {
                setToDateOpen(false);
              }}
            />
            <Text
              style={
                {
                  // ...styles.simpleHeading,
                }
              }>
              To "{props?.toDate?.toString().slice(0, 10)}"
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: hp('3')}}>
        <Text style={{...styles.simpleHeading}}>Specify Reason</Text>
        <TextInput
          style={{
            width: wp('87%'),
            height: hp('5'),
            borderRadius: 8,
            // marginTop: hp('1'),
            alignSelf: 'center',
            borderBottomWidth: 0.8,
          }}
          value={props?.value}
          onChangeText={t => {
            props?.getRescheduleReason(t);
          }}
        />
      </View>
      <View style={{height: hp('20')}}>
        <TouchableOpacity
          onPress={props.onPress}
          style={{
            alignSelf: 'center',
            marginTop: heightPercentageToDP('8'),
            backgroundColor: lightAccent,
            height: heightPercentageToDP('5'),
            width: widthPercentageToDP('80'),
            borderRadius: 8,
            justifyContent: 'center',
            position: 'absolute',
            bottom: 0,
          }}>
          <Text
            style={{
              ...styles.simpleText,
              color: 'black',
              alignSelf: 'center',
              marginTop: 0,
            }}>
            Rechedule
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingTxt: {
    fontSize: hp('3'),
    color: 'black',
    fontFamily: semiBoldLegecy,
    marginTop: hp('1'),
    // alignSelf: 'center',
    // textAlign: 'center',
  },
  simpleText: {
    fontSize: hp('2'),
    fontFamily: Regular,
    color: 'grey',
    marginTop: 5,
    alignSelf: 'center',
  },
  simpleHeading: {
    fontSize: hp('2'),
    color: 'black',
    fontFamily: semiBoldLegecy,
    // marginTop: hp('1'),
    marginLeft: hp('4'),
    marginTop: hp('4'),
  },
  dateCard: {
    height: hp('3'),
    width: wp('87%'),
    borderBottomWidth: 0.8,
    borderRadius: 8,
    marginLeft: hp('3'),
    marginTop: hp('2'),
  },
});

export default MyModalizeView;
