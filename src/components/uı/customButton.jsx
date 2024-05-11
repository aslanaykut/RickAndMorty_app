//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../theme/colors';

// create a component
const CustomButton = props => {
  const {backColor, title, titleColor = Colors.BLACK} = props;
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: backColor}]}>
      <Text style={[styles.title, {color: titleColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GREEN,
    padding: 8,
    borderRadius: 20,
    margin: 5,
    flex: 1,
  },

  title: {
    fontSize: 18,
    color: Colors.WHITE,
  },
});

//make this component available to the app
export default CustomButton;
