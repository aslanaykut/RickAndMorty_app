//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import CustomButton from './customButton';
import {useDispatch} from 'react-redux';
import {removeItem} from '../store/actions/todoActions';

// create a component
const TodoItem = ({item}) => {
  const dispatch = useDispatch();
  const deleteItem = () => {
    Alert.alert('Sil ?', 'Bu elemanı silmek istediğine eminmisin?', [
      {
        text: 'Hayır',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Evet', onPress: () => dispatch(removeItem(item))},
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 2, justifyContent: 'center'}}>
        <Text style={{fontSize: 18, fontWeight: '600'}}>{item.title}</Text>
        <Text style={{fontSize: 14, color: 'gray'}}>id:{item.id}</Text>
      </View>
      <View style={{flex: 1}}>
        <CustomButton
          onPress={() => deleteItem()}
          title="Remove"
          color="#dc2928"
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    paddingVertical: 20,
    borderColor: '#cccccc',
    flexDirection: 'row',
  },
});

//make this component available to the app
export default TodoItem;
