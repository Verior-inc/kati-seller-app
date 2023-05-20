import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

const SimpleCard = ({size, children}) => (
  <Pressable style={[styles.container, size]}>{children}</Pressable>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default SimpleCard;
