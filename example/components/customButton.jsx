//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const CustomButton = props => {
  const {title, color} = props;
  return (
    <TouchableOpacity
      {...props}
      style={{
        backgroundColor: color,
        padding: 10,
        margin: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 18, color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
};

//make this component available to the app
export default CustomButton;
