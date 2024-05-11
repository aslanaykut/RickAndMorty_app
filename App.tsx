//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import Example from './example/screens/example';
// import {Provider} from 'react-redux';
// import store from './example/store';
// import Todo from './example/screens/todo';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/router/tabRouter';
import RootNavigator from './src/router/rootNavigator';
import {Provider} from 'react-redux';
import store from './src/store';
// create a component
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <Example /> */}
        {/* <Todo/> */}
        {/* Rest of your app code */}
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default App;
