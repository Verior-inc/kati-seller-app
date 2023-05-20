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
} from 'react-native';
import {
  borderColor,
  lightAccent,
  Regular,
} from '../../components/styles/styles';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FocusAwareStatusBar} from '../../components/Features/Statusbar';

import {useTranslation} from 'react-i18next';
import {SettingLogo} from '../../components/SettingLogo/SettingLogo';
import {useState} from 'react';
import {API_KEY, BASE_URL} from '@env';
import axios from 'axios';
import {useEffect} from 'react';
import SucessModal from '../../components/Dialog/SucessModal';
const PasswordScreen = props => {
  const {t} = useTranslation();
  const [disable, setDisable] = useState(true);
  const [successDialog, setSuccessDialog] = useState(false);
  const [message, setMessage] = useState('');
  const [inputs, setInputs] = useState({
    email: '',
    oldPassword: '',
    newPassword: '',
  });
  const changePassword = async () => {
    await axios({
      url: BASE_URL + 'user/changepassword',
      method: 'post',
      data: {
        email: inputs.email.toLocaleLowerCase(),
        oldpassword: inputs.oldPassword,
        newpassword: inputs.newPassword,
      },
    })
      .then(res => {
        console.log(res.data);
        if (res.data.success == true) {
          setSuccessDialog(true);
          setMessage(res.data.message);
        }
      })
      .catch(e => {
        console.log('password api', e);
        setSuccessDialog(true);
        setMessage('Please Enter correct Validations');
      });
  };

  useEffect(() => {
    if (
      inputs.email.length > 1 &&
      inputs.newPassword.length > 3 &&
      inputs.oldPassword.length > 4
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [inputs]);

  return (
    <ScrollView
      style={{}}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <SucessModal
        isVisible={successDialog}
        message={message}
        onPress={
          message == 'Please Enter correct Validations'
            ? () => setSuccessDialog(false)
            : () => {
                props?.navigation?.goBack();
              }
        }
      />
      <View style={{flex: 1}}>
        <SettingLogo onPress={() => props.navigation.goBack()} />
        <View
          style={{
            flexDirection: 'row',
            paddingTop: wp('9%'),
            marginLeft: wp('7%'),
          }}>
          <Foundation color={'#B7B7B7'} name="shield" size={wp('8')} />
          <Text style={styles.Heading}>
            {t('common:profile:settings:Passwordandsecurity:Heading')}
          </Text>
        </View>

        <View style={styles.Field}>
          <Text style={styles.font}>
            {' '}
            Email
            {/* {t('common:profile:settings:Passwordandsecurity:CP')} */}
          </Text>
          <TextInput
            value={inputs.email}
            onChangeText={t => {
              setInputs({...inputs, email: t});
            }}
            placeholder="johnabrahim@123.com"
            placeholderTextColor={'#B7B7B7'}
            // secureTextEntry
            style={styles.input}
          />
        </View>
        <View style={styles.Field}>
          <Text style={styles.font}>
            Old Password
            {/* {t('common:profile:settings:Passwordandsecurity:NP')} */}
          </Text>
          <TextInput
            value={inputs.oldPassword}
            onChangeText={t => {
              setInputs({...inputs, oldPassword: t});
            }}
            placeholder="************"
            placeholderTextColor={'#B7B7B7'}
            secureTextEntry
            style={styles.input}
          />
        </View>
        <View style={styles.Field}>
          <Text style={styles.font}>
            {t('common:profile:settings:Passwordandsecurity:NP')}
          </Text>
          <TextInput
            onChangeText={t => {
              setInputs({...inputs, newPassword: t});
            }}
            value={inputs.newPassword}
            placeholder="************"
            placeholderTextColor={'#B7B7B7'}
            secureTextEntry
            style={styles.input}
          />
        </View>
      </View>
      <View
        style={{
          height: hp('30%'),
          justifyContent: 'flex-end',
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          disabled={disable}
          onPress={() => {
            changePassword();
          }}
          style={{
            width: wp('80'),
            height: hp('6.5'),
            backgroundColor: disable ? 'grey' : lightAccent,
            alignSelf: 'center',
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
    </ScrollView>
  );
};

export default PasswordScreen;

const styles = StyleSheet.create({
  Heading: {
    fontSize: wp('4%'),
    fontFamily: 'FilsonProBook-Book',
    marginLeft: wp('5%'),
    color: '#B7B7B7',
    marginTop: wp('1.5'),
  },
  Field: {
    marginTop: wp('8'),
  },
  input: {
    borderWidth: wp('0.1'),
    marginTop: wp('3'),
    width: wp('90'),
    alignSelf: 'center',
    height: hp('6'),
    backgroundColor: '#FFFFFF',
    marginLeft: wp('1'),
    borderColor: 'grey',
    paddingLeft: hp('1'),
    color: 'black',
    // color: 'black',
  },
  font: {
    fontSize: wp('3.5'),
    marginLeft: wp('5.5'),
    color: '#B7B7B7',
    fontFamily: 'FilsonProBook-Book',
  },
});
