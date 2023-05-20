import React, {useState} from 'react';
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
  Switch,
} from 'react-native';
import {
  borderColor,
  lightAccent,
  Regular,
} from '../../components/styles/styles';
import {SettingLogo} from '../../components/SettingLogo/SettingLogo';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CheckBox} from '@rneui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FocusAwareStatusBar} from '../../components/Features/Statusbar';
import {useTranslation} from 'react-i18next';
const NotificationSettingsS = props => {
  const {t} = useTranslation();
  const [checked, setChecked] = useState({
    on: true,
    off: false,
  });
  const [Notif, setNotif] = useState({
    on: true,
    off: false,
  });

  const [Sound, setSound] = React.useState({
    on: true,
    off: false,
  });

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <SettingLogo onPress={() => props.navigation.goBack()} />

      <View
        style={{
          flexDirection: 'row',
          paddingTop: wp('9%'),
          marginLeft: wp('7%'),
        }}>
        <MaterialIcons
          color={'#B7B7B7'}
          name="notifications-none"
          size={wp('8')}
        />
        <Text style={styles.Heading}>
          {t('common:profile:settings:Notification:Heading')}
        </Text>
      </View>
      <View style={styles.Field}>
        <Text style={styles.font}>
          {t('common:profile:settings:Notification:switch1')}
        </Text>
        <View
          style={{
            // height: hp('5'),
            // width: wp('10'),
            // backgroundColor: 'grey',
            flexDirection: 'row',
            marginLeft: hp('0'),
          }}>
          <CheckBox
            center={true}
            title={t('common:common:on')}
            checked={Sound.on}
            checkedColor={lightAccent}
            style={{height: hp('2'), width: wp('10')}}
            onPress={() => {
              setSound({
                ...Sound,
                on: !Sound.on,
                off: !Sound.off,
                // BarF: checked.Bart === true ? false : true,
              });
              // setCheckedBarF({BarF: !checkedBarF.BarF});
            }}
          />
          <CheckBox
            center={true}
            title={t('common:common:off')}
            checked={Sound.off}
            checkedColor={lightAccent}
            style={{height: hp('2'), width: wp('10')}}
            onPress={() => {
              setSound({
                ...Sound,
                on: !Sound.on,
                off: !Sound.off,
                // BarF: checked.Bart === true ? false : true,
              });
              // setChecked({Bart: !checked.Bart});
            }}
          />
        </View>
      </View>
      <View style={styles.Field}>
        <Text style={styles.font}>
          {t('common:profile:settings:Notification:switch2')}
        </Text>
        <View
          style={{
            // height: hp('5'),
            // width: wp('10'),
            // backgroundColor: 'grey',
            flexDirection: 'row',
            marginLeft: hp('0'),
          }}>
          <CheckBox
            center={true}
            title={t('common:common:on')}
            checked={Notif.on}
            checkedColor={lightAccent}
            style={{height: hp('2'), width: wp('10')}}
            onPress={() => {
              setNotif({
                ...Notif,
                on: !Notif.on,
                off: !Notif.off,
                // BarF: checked.Bart === true ? false : true,
              });
              // setCheckedBarF({BarF: !checkedBarF.BarF});
            }}
          />
          <CheckBox
            center={true}
            title={t('common:common:off')}
            checked={Notif.off}
            checkedColor={lightAccent}
            style={{height: hp('2'), width: wp('10')}}
            onPress={() => {
              setNotif({
                ...Notif,
                on: !Notif.on,
                off: !Notif.off,
                // BarF: checked.Bart === true ? false : true,
              });
              // setChecked({Bart: !checked.Bart});
            }}
          />
        </View>
      </View>
      <View style={styles.Field}>
        <Text style={styles.font}>
          {t('common:profile:settings:Notification:switch3')}
        </Text>
        <View
          style={{
            // height: hp('5'),
            // width: wp('10'),
            // backgroundColor: 'grey',
            flexDirection: 'row',
            marginLeft: hp('0'),
          }}>
          <CheckBox
            center={true}
            title={t('common:common:on')}
            checked={checked.on}
            checkedColor={lightAccent}
            style={{height: hp('2'), width: wp('10')}}
            onPress={() => {
              setChecked({
                ...checked,
                on: !checked.on,
                off: !checked.off,
                // BarF: checked.Bart === true ? false : true,
              });
              // setCheckedBarF({BarF: !checkedBarF.BarF});
            }}
          />
          <CheckBox
            center={true}
            title={t('common:common:off')}
            checked={checked.off}
            checkedColor={lightAccent}
            style={{height: hp('2'), width: wp('10')}}
            onPress={() => {
              setChecked({
                ...checked,
                on: !checked.on,
                off: !checked.off,
                // BarF: checked.Bart === true ? false : true,
              });
              // setChecked({Bart: !checked.Bart});
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: wp('80'),
          position: 'absolute',
          height: hp('6.5'),
          bottom: hp('2'),
          backgroundColor: lightAccent,
          alignSelf: 'center',
          // marginTop: hp('5'),
          borderColor: borderColor,
          fontFamily: Regular,
          borderWidth: hp('0.1'),
          justifyContent: 'center',
          borderRadius: 6,
        }}>
        <Text
          style={{
            alignSelf: 'center',
            // marginTop: wp('3.9'),
            fontSize: 17,
            color: '#FFFFFF',
            fontFamily: Regular,
          }}>
          {t('common:common:savebutton')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Heading: {
    fontSize: wp('4%'),
    fontFamily: 'FilsonProBook-Book',
    marginLeft: wp('5%'),
    color: '#B7B7B7',
    marginTop: wp('1.5'),
  },
  font: {
    fontSize: wp('4'),
    marginLeft: wp('4'),
    color: '#B7B7B7',
    marginTop: hp('1'),
    width: wp('80%'),
  },
  Field: {
    marginTop: wp('5'),
    width: wp('100%'),

    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
});

export default NotificationSettingsS;
