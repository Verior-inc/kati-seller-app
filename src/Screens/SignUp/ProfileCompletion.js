import React from 'react';
import {Text, View, StyleSheet, TextInput, Pressable} from 'react-native';
import {FocusAwareStatusBar} from '../../components/Features/Statusbar';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Design from '../../../assets/Design.svg';
import Design2 from '../../../assets/Design2.svg';
import {
  blackColor,
  dardAccent,
  grey,
  Regular,
  white,
} from '../../components/styles/styles';
import SimpleCard from '../../components/cards/SimpleCard';
import Icon from 'react-native-vector-icons/Entypo';
import Button from '../../components/Buttons/Button';
import {useState} from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';
const ProfileCompletion = ({params}) => {
  const [dropDown, setDropDown] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={{marginLeft: hp('-3'), marginTop: hp('-5')}}>
        <Design width={150} height={200} fill={dardAccent} />
      </View>
      <View style={{position: 'absolute', bottom: -30, alignSelf: 'flex-end'}}>
        <Design2 width={150} height={200} fill={dardAccent} />
      </View>

      <View style={{marginTop: hp('5')}}>
        <TextInput
          style={styles.input}
          placeholder={'Title of account'}
          onChangeText={txt => {
            // setFields({...fields, phone: txt.replace(/[^0-9]/g, '')});
          }}
          placeholderTextColor={'#B7B7B7'}
        />
        <TextInput
          style={{...styles.input, height: hp('10')}}
          multiline
          placeholder={'Description'}
          textAlignVertical="top"
          onChangeText={txt => {
            // setFields({...fields, phone: txt.replace(/[^0-9]/g, '')});
          }}
          placeholderTextColor={'#B7B7B7'}
        />

        <Pressable
          onPress={() => {
            setDropDown(!dropDown);
          }}
          style={{
            ...styles.input,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              ...styles.text,
              fontSize: hp('2'),
              alignSelf: 'center',
              marginLeft: hp('1'),
            }}>
            Location
          </Text>
          <Icon
            name="chevron-small-down"
            color={blackColor}
            style={{alignSelf: 'center', marginRight: hp('1')}}
          />
        </Pressable>
        {dropDown && (
          <Pressable
            onPress={() => {
              setDropDown(!dropDown);
            }}
            style={{
              width: hp('36'),
              backgroundColor: white,
              borderRadius: 8,
              borderWidth: 0.5,
              borderColor: blackColor,
              alignSelf: 'center',
              height: hp('5'),
              marginTop: hp('0.5'),
              justifyContent: 'center',
            }}>
            <Text
              style={{
                ...styles.text,
                fontSize: hp('2'),
                alignSelf: 'flex-start',
                marginLeft: hp('2'),
              }}>
              Pakistan
            </Text>
          </Pressable>
        )}

        <SimpleCard
          size={{
            height: hp('7'),
            width: hp('36'),
            marginTop: hp('2'),
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text style={{...styles.text, fontSize: hp('2')}}>
            Change profile picture
          </Text>
          <Icon
            name="camera"
            size={hp('4')}
            color={grey}
            style={{alignSelf: 'center'}}
          />
        </SimpleCard>
        <View style={{marginTop: hp('5')}}>
          <Button
            onPress={() => {
              navigation.dispatch(
                CommonActions.reset({
                  routes: [{name: 'HomeT'}],
                }),
              );
            }}
            label={'Continue'}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: grey,
    fontFamily: Regular,
    fontSize: hp('3'),
    alignSelf: 'center',
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
});

export default ProfileCompletion;
