//import liraries
import React, {Component} from 'react';
import {Danger, Man, Woman} from 'iconsax-react-native';
import {genderTypes} from '../../utils/constans';
import Colors from '../../theme/colors';

// create a component
const GenderIcon = ({gender, size}) => {
  if (gender == genderTypes.MALE)
    return <Man size={size} color={Colors.BLACK} />;
  if (gender == genderTypes.FEMALE)
    return <Woman size={size} color={Colors.BLACK} />;
  if (gender == genderTypes.UNNKNOWN)
    return <Danger size={size} color={Colors.BLACK} />;
};

export default GenderIcon;
