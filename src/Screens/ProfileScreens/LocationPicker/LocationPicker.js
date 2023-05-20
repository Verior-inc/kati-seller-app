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
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import {ExpandableListView} from 'react-native-expandable-listview';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useTranslation} from 'react-i18next';

export const LocationPicker = () => {
  const {t} = useTranslation();
  const [CurrentCountry, setCurrentCountry] = React.useState({
    country: {
      id: 1,
      name: 'Pakistan',
      icon: require('../../../components/assests/download.png'),
    },
  });

  const [currentState, setCurrentState] = useState({
    state: {
      id: 1,
      name: 'Sindh',
    },
  });
  const [currentCity, setCurrentCity] = useState({
    City: {
      id: 1,
      name: 'HYDERABAD',
    },
  });

  // if(CurrentCountry.country=="Pakistan"){
  //   // fetch paskitan states
  // }else{
  //   // fetch india state
  // }

  const list = {
    country: [
      {
        id: 1,
        name: 'Pakistan',
        icon: require('../../../components/assests/download.png'),
      },
      {
        id: 2,
        name: 'India',
        icon: require('../../../components/assests/images.png'),
      },
    ],
    state: [
      {id: 1, name: 'Sindh'},
      {id: 2, name: 'Punjab'},
      {id: 3, name: 'Balouchistan'},
      {id: 4, name: 'KPK'},
    ],
    city: [
      {id: 1, name: 'HYDERABAD'},
      {id: 2, name: 'KARACHI'},
      {id: 3, name: 'MIRPURKHAS'},
    ],
  };

  // const data = {
  //   country: {
  //     name: 'Pakistan',
  //     //
  //   },
  //   state: ['Sindh', 'Punjab', 'Kpk'],
  //   city: ['Hyd', 'Khi', 'Isb'],
  // };
  const Country = [
    {
      id: '11',
      categoryName: CurrentCountry.country.name,

      subCategory: [
        {
          // id: '1',
          // name: 'Lorem Ipsum is simply dummy text of the printing and',
          customInnerItem: (
            <FlatList
              data={list.country}
              keyExtractor={(item, index) => index}
              // key={list.country.id}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setCurrentCountry({
                        country: {
                          icon: item.icon,
                          name: item.name,
                          id: item.id,
                        },
                      });
                    }}
                    style={{
                      height: hp('4'),
                      justifyContent: 'center',
                      borderWidth: 0.3,
                      borderRadius: 2,
                      width: wp('75%'),
                      borderWidth: 0.2,
                      borderColor: '#B7B7B7',
                      backgroundColor: '#FFFFFF',
                      // flexDirection: 'row',
                      // flexDirection: 'column',
                    }}>
                    <Image
                      style={{
                        height: hp('3'),
                        width: wp('5'),
                        position: 'absolute',
                        alignSelf: 'center',
                        left: hp('4'),
                      }}
                      source={item.icon}
                    />
                    <Text
                      style={{...styles.modalfiledTxt, alignSelf: 'center'}}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          ),
        },
      ],
    },
  ];
  const State = [
    {
      id: '11',
      categoryName: currentState.state.name,

      subCategory: [
        {
          // id: '1',
          // name: 'Lorem Ipsum is simply dummy text of the printing and',
          customInnerItem: (
            <FlatList
              data={list.state}
              keyExtractor={(item, index) => index}
              // key={list.country.id}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setCurrentState({
                        state: {
                          name: item.name,
                          id: item.id,
                        },
                      });
                    }}
                    style={{
                      height: hp('4'),
                      justifyContent: 'center',
                      borderWidth: 0.3,
                      borderRadius: 2,
                      width: wp('75%'),
                      borderWidth: 0.2,
                      borderColor: '#B7B7B7',
                      backgroundColor: '#FFFFFF',
                      // flexDirection: 'row',
                      // flexDirection: 'column',
                    }}>
                    <Text
                      style={{...styles.modalfiledTxt, alignSelf: 'center'}}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          ),
        },
      ],
    },
  ];
  const City = [
    {
      id: '11',
      categoryName: currentCity.City.name,

      subCategory: [
        {
          // id: '1',
          // name: 'Lorem Ipsum is simply dummy text of the printing and',
          customInnerItem: (
            <FlatList
              data={list.city}
              keyExtractor={(item, index) => index}
              // key={list.country.id}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setCurrentCity({
                        City: {
                          name: item.name,
                          id: item.id,
                        },
                      });
                    }}
                    style={{
                      height: hp('4'),
                      justifyContent: 'center',
                      borderWidth: 0.3,
                      borderRadius: 2,
                      width: wp('75%'),
                      borderWidth: 0.2,
                      borderColor: '#B7B7B7',
                      backgroundColor: '#FFFFFF',

                      // flexDirection: 'row',
                      // flexDirection: 'column',
                    }}>
                    {/* <Image
                      style={{
                        height: hp('3'),
                        width: wp('5'),
                        position: 'absolute',
                        alignSelf: 'center',
                        left: hp('4'),
                      }}
                      source={item.icon}
                    /> */}
                    <Text
                      style={{...styles.modalfiledTxt, alignSelf: 'center'}}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          ),
        },
      ],
    },
  ];

  return (
    <View
      style={{
        alignSelf: 'center',
        marginTop: hp('2'),
        // backgroundColor: 'grey',
      }}>
      <Text
        style={{
          ...styles.modalfiledTxt,
          marginLeft: hp('3'),
          color: '#B7B7B7',
          marginTop: hp('2'),
        }}>
        {t('common:profile:settings:Location:country')}
      </Text>
      <ExpandableListView
        ExpandableListViewStyles={{
          width: wp('80%'),
          alignSelf: 'center',
          // justifyContent: 'center',
          // marginTop: hp('0'),
          // backgroundColor: '#FFFFFF',
          // borderWidth: 0.2,
        }}
        innerItemContainerStyle={{
          borderRadius: 2,
          alignSelf: 'center',

          // marginTop: hp('-23.3'),
        }}
        itemContainerStyle={{
          alignSelf: 'center',
          width: wp('75'),
          backgroundColor: '#FFFFFF',
          borderWidth: 0.3,
          borderColor: '#B7B7B7',
          height: hp('5'),
          marginTop: hp('1'),
          borderRadius: 5,
        }}
        // animated={false}

        itemImageIndicatorStyle={{
          height: hp('2'),
          width: wp('5'),
          position: 'absolute',
          right: hp('2'),
        }}
        // customChevron={require('../../components/assests/downArrow.png')}
        innerItemLabelStyle={styles.modalfiledTxt}
        // itemLabelStyle={{fontFamily: 'FilsonProBook-Book'}}
        itemLabelStyle={{...styles.modalfiledTxt, marginLeft: hp('5')}}
        // innerItemContainerStyle={{}}
        // chevronColor={}
        // chevronColor="white"
        data={Country}
      />
      <View
        style={{
          // backgroundColor: 'grey',
          height: hp('2'),
          width: wp('6'),
          position: 'absolute',
          alignSelf: 'center',
          // justifyContent: 'center',
          top: 62,
          left: 30,
        }}>
        <Image
          style={{height: '100%', width: '100%'}}
          source={CurrentCountry.country.icon}
        />
      </View>
      <Text
        style={{
          ...styles.modalfiledTxt,
          marginLeft: hp('3'),
          color: '#B7B7B7',
          marginTop: hp('2'),
        }}>
        {t('common:profile:settings:Location:state')}
      </Text>
      {/* |||||||||||||||||||||||||||||||||||||||||||||||||STATE||||||||||||||||||||||||||||||||||||| */}
      <ExpandableListView
        ExpandableListViewStyles={{
          width: wp('80%'),
          alignSelf: 'center',
          marginTop: hp('0'),
          // backgroundColor: '#FFFFFF',
          // borderWidth: 0.2,
        }}
        innerItemContainerStyle={{
          borderRadius: 2,
          alignSelf: 'center',

          // marginTop: hp('-23.3'),
        }}
        itemContainerStyle={{
          alignSelf: 'center',
          width: wp('75'),
          backgroundColor: '#FFFFFF',
          borderWidth: 0.3,
          borderColor: '#B7B7B7',
          height: hp('5'),
          marginTop: hp('1'),
          borderRadius: 5,
        }}
        // animated={false}

        itemImageIndicatorStyle={{
          height: hp('2'),
          width: wp('5'),
          position: 'absolute',
          right: hp('2'),
        }}
        // customChevron={require('../../components/assests/downArrow.png')}
        innerItemLabelStyle={styles.modalfiledTxt}
        // itemLabelStyle={{fontFamily: 'FilsonProBook-Book'}}
        itemLabelStyle={{...styles.modalfiledTxt, marginLeft: hp('5')}}
        // innerItemContainerStyle={{}}
        // chevronColor={}
        // chevronColor="white"
        data={State}
      />
      <Text
        style={{
          ...styles.modalfiledTxt,
          marginLeft: hp('3'),
          color: '#B7B7B7',
          marginTop: hp('2'),
        }}>
        {t('common:profile:settings:Location:city')}
      </Text>
      {/* |||||||||||||||||||||||||||||||||||||||||||||||||City||||||||||||||||||||||||||||||||||||| */}
      <ExpandableListView
        ExpandableListViewStyles={{
          width: wp('80%'),
          alignSelf: 'center',
          marginTop: hp('1'),
          // backgroundColor: '#FFFFFF',
          // borderWidth: 0.2,
        }}
        innerItemContainerStyle={{
          borderRadius: 2,
          alignSelf: 'center',

          // marginTop: hp('-23.3'),
        }}
        itemContainerStyle={{
          alignSelf: 'center',
          width: wp('75'),
          backgroundColor: '#FFFFFF',
          borderWidth: 0.3,
          borderColor: '#B7B7B7',
          height: hp('5'),
          marginTop: hp('1'),
          borderRadius: 5,
        }}
        // animated={false}

        itemImageIndicatorStyle={{
          height: hp('2'),
          width: wp('5'),
          position: 'absolute',
          right: hp('2'),
        }}
        // customChevron={require('../../components/assests/downArrow.png')}
        innerItemLabelStyle={styles.modalfiledTxt}
        // itemLabelStyle={{fontFamily: 'FilsonProBook-Book'}}
        itemLabelStyle={{...styles.modalfiledTxt, marginLeft: hp('5')}}
        // innerItemContainerStyle={{}}
        // chevronColor={}
        // chevronColor="white"
        data={City}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Heading: {
    fontSize: wp('5%'),
    fontFamily: 'FilsonProBook-Book',
    marginLeft: wp('3%'),
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
    height: hp('4.8'),
    backgroundColor: '#FFFFFF',
  },
  font: {
    fontSize: wp('4.5'),
    marginLeft: wp('4.9'),
    color: '#B7B7B7',
    fontFamily: 'FilsonProBook-Book',
  },
  modalFiled: {
    alignSelf: 'center',
    width: wp('75'),
    backgroundColor: '#FFFFFF',
    borderWidth: 0.3,
    borderColor: '#B7B7B7',
    height: hp('5'),
    marginTop: hp('1'),
    borderRadius: 5,
  },
  modalfiledTxt: {
    fontFamily: 'FilsonProBook-Book',
    fontSize: hp('1.5'),
    color: 'black',
    // marginTop: hp('2'),
  },
});
