import React from 'react';
import {Text, View, Animated} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';
const InAppLoading = () => {
  // const [progress, setProgress] = useState(new Animated.Value(0));
  let progress = new Animated.Value(0);
  function load() {
    progress.setValue(0);
    Animated.timing(progress, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => load());
  }
  return (
    <LottieView
      source={require('../../../assets/loader/mP4KJsZOlU.json')}
      // imageAssetsFolder
      imageAssetsFolder={'lottie/images'}
      autoPlay
      progress={load()}
      style={{
        backgroundColor: 'transaprent',
        alignSelf: 'center',
        width: wp('100%'),
        height: hp('35'),
        marginRight: hp('0.5'),
      }}
      autoSize
      speed={1}
      loop
    />
  );
};

export default InAppLoading;
