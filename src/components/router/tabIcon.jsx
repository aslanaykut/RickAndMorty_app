//import liraries
import React, {Component} from 'react';
import {CHARACTERS, EPISODES, LOCATIONS, SETTINGS} from '../../utils/routes';
import {
  Book1,
  LocationTick,
  PresentionChart,
  Setting2,
} from 'iconsax-react-native';

// create a component
const TabIcon = ({screenName, color, focused, size}) => {
  if (screenName == CHARACTERS)
    return (
      <Book1 size={size} color={color} variant={focused ? 'Bold' : 'Outline'} />
    );
  if (screenName == EPISODES)
    return (
      <PresentionChart
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  if (screenName == LOCATIONS)
    return (
      <LocationTick
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  if (screenName == SETTINGS)
    return (
      <Setting2
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
};

export default TabIcon;
