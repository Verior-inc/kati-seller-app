import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {FocusAwareStatusBar} from '../../components/Features/Statusbar';
import Design from '../../../assets/Design.svg';
import Design2 from '../../../assets/Design2.svg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {dardAccent, grey, Regular} from '../../components/styles/styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../components/Buttons/Button';
import {CommonActions, useNavigation} from '@react-navigation/native';
import SimpleCard from '../../components/cards/SimpleCard';
import Icon from 'react-native-vector-icons/Entypo';
const SignUpScreen = ({params}) => {
  const navigation = useNavigation();
  const [fields, setFields] = useState({
    name: null,
    email: null,
    password: null,
    phone: null,
  });

  const disable = () => {
    if (fields.name && fields.password && fields.email && fields.phone) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.container}>
          <FocusAwareStatusBar
            translucent={true}
            backgroundColor={'transparent'}
            barStyle={'dark-content'}
          />
          <View style={{marginLeft: hp('-3'), marginTop: hp('-5')}}>
            <Design width={150} height={200} fill={dardAccent} />
          </View>
          <View
            style={{position: 'absolute', bottom: -30, alignSelf: 'flex-end'}}>
            <Design2 width={150} height={200} fill={dardAccent} />
          </View>
          <View style={{marginTop: hp('2')}}>
            <TextInput
              style={styles.input}
              placeholder={'Name'}
              onChangeText={txt => {
                setFields({...fields, name: txt});
                //   setPassword(txt);
              }}
              placeholderTextColor={'#B7B7B7'}
            />
            <TextInput
              style={styles.input}
              placeholder={'Email'}
              onChangeText={txt => {
                setFields({...fields, email: txt});
              }}
              placeholderTextColor={'#B7B7B7'}
            />
            <TextInput
              style={styles.input}
              placeholder={'ID'}
              secureTextEntry
              keyboardType={'decimal-pad'}
              onChangeText={txt => {
                setFields({...fields, password: txt.replace(/[^0-9]/g, '')});
              }}
              placeholderTextColor={'#B7B7B7'}
            />
            <TextInput
              style={styles.input}
              placeholder={'Phone Number'}
              keyboardType={'decimal-pad'}
              onChangeText={txt => {
                setFields({...fields, phone: txt.replace(/[^0-9]/g, '')});
              }}
              placeholderTextColor={'#B7B7B7'}
            />
            <View style={{marginTop: hp('2')}}>
              <SimpleCard size={{height: hp('12'), width: wp('80')}}>
                <Icon
                  name="camera"
                  size={hp('5')}
                  color={grey}
                  style={{alignSelf: 'center'}}
                />
                <Text style={{...styles.text, marginTop: hp('2')}}>
                  Upload a photo
                </Text>
              </SimpleCard>
            </View>
          </View>
          <View
            style={{
              alignSelf: 'center',
              marginTop: hp('10'),
            }}>
            <Button
              onPress={() => {
                navigation.dispatch(
                  CommonActions.reset({
                    routes: [{name: 'ProfileCompletion'}],
                  }),
                );
              }}
              disable={disable()}
              label={'Sign Up'}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: hp('36'),
    color: 'black',
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    height: hp('5.5'),
    marginTop: hp('01'),
    borderWidth: 0.3,
    borderColor: '#B7B7B7',
    paddingLeft: hp('1'),
    marginTop: hp('2'),
  },
  text: {
    color: grey,
    fontFamily: Regular,
    fontSize: hp('3'),
    alignSelf: 'center',
  },
});
export default SignUpScreen;
