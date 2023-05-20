import axios from 'axios';
import React, {createContext} from 'react';
import {useState} from 'react';
import {Alert, Animated, Text, View} from 'react-native';
import {API_KEY, BASE_URL} from '@env';
import EncryptedStorage from 'react-native-encrypted-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
export const AuthContext = React.createContext({});
const AuthProvider = ({children}) => {
  // const baseUrl = 'https://kati-backend.herokuapp.com/';
  const [msg, setMsg] = useState();

  const [isLoading, setLoading] = React.useState(false);
  const [err, setErr] = useState();

  // const navigation = useNavigation();
  const login = async ({email, password}) => {
    // setLoading(true);
    try {
      if (email == undefined || password == undefined) {
        setErr({
          errEmail: 'Please enter email',
          errPass: 'Please enter Password',
        });
      } else {
        setLoading(true);
        setErr();
        let response = await axios({
          method: 'post',
          url: BASE_URL + 'user/login-seller',
          params: {apikey: API_KEY},
          data: {
            email,
            password,
            isWeb: false,
          },
        });

        if (response.status == 200) {
          setMsg(response.data.message);
          console.log('gggg', response.data.data);
          await AsyncStorage.setItem(
            'userInfo',
            JSON.stringify(response.data.data),
          );
          await EncryptedStorage.setItem(
            'token',
            JSON.stringify(response.data.token),
          );

          await EncryptedStorage.setItem(
            'hashKey',
            JSON.stringify(response.data.key),
          );
          // // seller id
          await EncryptedStorage.setItem('id', response.data.data._id);
          // setMsg('');
          setLoading(false);
          setErr();

          // token();
        } else {
          setErr({
            //         // errEmail: 'invalid Email',
            errPass: 'invalid Email or Password',
          });
          setLoading(false);
        }
      }
    } catch (e) {
      Alert.alert('Network connectivity error');
      setLoading(false);
      console.log('error', e);
    }
    // setLoading(false);
  };

  return (
    <AuthContext.Provider value={{login, isLoading, err, msg, BASE_URL}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
