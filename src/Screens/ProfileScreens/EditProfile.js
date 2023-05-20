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
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  lightAccent,
  semiBold,
  Regular,
  screenBackground,
  borderColor,
} from '../../components/styles/styles';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Pencil from '../../components/assests/Pencil.svg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FocusAwareStatusBar} from '../../components/Features/Statusbar';

import {useTranslation} from 'react-i18next';
import {SettingLogo} from '../../components/SettingLogo/SettingLogo';
const EditProfile = props => {
  const {t} = useTranslation();
  return (
    // <KeyboardAwareScrollView
    //   contentContainerStyle={{flex: 1, backgroundColor: '#F9F9F9'}}
    //   enableOnAndroid={true}
    //   scrollEnabled={true}>
    <ScrollView
      style={{backgroundColor: screenBackground}}
      // contentContainerStyle={{backgroundColor: screenBackground}}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
        <FocusAwareStatusBar
          translucent={true}
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
        />
        <SettingLogo onPress={() => props.navigation.goBack()} />

        <View
          style={{
            marginTop: hp('5'),
            flexDirection: 'row',
            paddingTop: wp('1%'),
            marginLeft: hp('2'),
          }}>
          <Pencil />
          {/* <MaterialCommunityIcons
            name="pencil-outline"
            size={wp('7')}
            color={'#B7B7B7'}
            style={{alignSelf: 'center'}}
          /> */}
          <Text style={styles.Heading}>
            {t('common:profile:settings:editprofile:Heading')}
          </Text>
        </View>

        <View>
          <View style={styles.Field}>
            <Text style={styles.font}>
              {t('common:profile:settings:editprofile:name')}
            </Text>
            <TextInput
              placeholderTextColor={'black'}
              placeholder="joshau23"
              style={styles.input}
            />
          </View>
          <View style={styles.Field}>
            <Text style={styles.font}>
              {t('common:profile:settings:editprofile:email')}
            </Text>
            <TextInput
              placeholder="josau23@gamil.com"
              placeholderTextColor={'black'}
              style={styles.input}
            />
          </View>
          <View style={styles.Field}>
            <Text style={styles.font}>
              {t('common:profile:settings:editprofile:phone')}
            </Text>
            <TextInput
              maxLength={11}
              keyboardType={'number-pad'}
              placeholder="0334285142"
              placeholderTextColor={'black'}
              style={styles.input}
            />
          </View>
          <View style={styles.Field}>
            <Text style={styles.font}>
              {t('common:profile:settings:editprofile:Categories')}
            </Text>
            <TextInput
              textAlignVertical="top"
              numberOfLines={2}
              ellipsizeMode="tail"
              maxLength={50}
              style={{
                borderWidth: wp('0.1'),
                marginTop: wp('3'),
                width: wp('90'),
                alignSelf: 'center',
                paddingLeft: hp('2'),
                backgroundColor: '#FFFFFF',
                borderColor: '#B7B7B7',
                height: hp('10'),
              }}
            />
          </View>
          <View style={styles.Field}>
            <Text style={styles.font}>
              {t('common:profile:settings:editprofile:dateofbirth')}
            </Text>
            <TextInput
              placeholderTextColor={'black'}
              placeholder="12/3/1998"
              style={styles.input}
            />
          </View>
        </View>
        {/* <View style={{backgroundColor: 'grey'}}> */}
        <TouchableOpacity
          style={{
            width: wp('80'),
            height: hp('6.5'),
            backgroundColor: lightAccent,
            alignSelf: 'center',
            // position: 'absolute',
            marginTop: hp('1.5'),
            borderColor: borderColor,
            fontFamily: Regular,
            borderWidth: hp('0.1'),
            justifyContent: 'center',
            // top: hp('3'),
            // bottom: hp('0'),
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
        {/* </View> */}
      </View>
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  Heading: {
    marginLeft: wp('7%'),
    fontSize: wp('4%'),
    fontFamily: 'FilsonProBook-Book',
    marginLeft: wp('3%'),
    color: '#B7B7B7',
  },
  Field: {
    marginTop: wp('5'),
  },
  input: {
    borderWidth: wp('0.1'),
    marginTop: wp('3'),
    width: wp('90'),
    alignSelf: 'center',
    height: hp('6'),
    backgroundColor: '#FFFFFF',
    borderColor: '#B7B7B7',
    paddingLeft: hp('2'),
  },
  font: {
    fontSize: wp('3.5'),
    marginLeft: wp('4.9'),
    color: '#B7B7B7',
    fontFamily: 'FilsonProBook-Book',
  },
});
