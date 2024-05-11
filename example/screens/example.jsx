//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../components/customButton';
import { decrementCount,incrementCount,resetCount } from '../store/actions/couterActions';

// create a component
const Example = () => {
  const {count} = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 150,
              height: 150,
              borderRadius: 200,
              backgroundColor: '#b2b2b2',
            }}>
            <Text style={{fontSize: 50, fontWeight: '600'}}>{count}</Text>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end', padding: 10}}>
          <CustomButton
          onPress={()=>dispatch(incrementCount())}
          title="INCREMENT" color="blue" />
          <CustomButton
          onPress={()=>dispatch(decrementCount())}
          title="DECREMENT" color="orange" />
          <CustomButton
          onPress={()=>dispatch(resetCount(0))}
          title="RESET" color="red" />
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
});

//make this component available to the app
export default Example;
