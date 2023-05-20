import {AreaChart, Grid, XAxis, YAxis} from 'react-native-svg-charts';
import {View, Text} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Path} from 'react-native-svg';
import {lightAccent, dardAccent} from '../../../components/styles/styles';

export const Line = ({line}) => {
  return (
    <Path
      strokeWidth={wp('1')}
      key={'line'}
      d={line}
      stroke={dardAccent}
      fill={'none'}
    />
  );
};
export const ChartScreen = () => {
  const month = ['jan', 'fab', 'mar', 'apr', 'may', 'jun', 'july'];
  const data = [1, 1, 20, 40, 30, 55, 65, 70, 100];
  const contentInset = {top: 20, bottom: 20};

  return (
    <View style={{flexDirection: 'row'}}>
      <YAxis
        style={{marginLeft: hp('2')}}
        data={data}
        contentInset={contentInset}
        svg={{
          fill: 'grey',
          fontSize: 10,
        }}
        numberOfTicks={6}
        formatLabel={value => `$${value + 0}K`}
      />
      <AreaChart
        style={{height: 250, width: hp('35')}}
        data={data}
        gridMin={-120}
        gridMax={100}
        start={-100}
        contentInset={{top: 30, bottom: 30}}
        svg={{fill: dardAccent}}>
        <Grid />
        <Line />
      </AreaChart>
    </View>
  );
};
