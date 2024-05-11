//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../components/customButton';
import TodoItem from '../components/todoItem';
import {addItem} from '../store/actions/todoActions';

// create a component
const Todo = () => {
  const {todoList} = useSelector(state => state.todo);
  const [newTodo, setNewTodo] = useState('todo');
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <TextInput
          value={newTodo}
          onChangeText={text => setNewTodo(text)}
          placeholder="Todo title"
          plaace
          style={{
            backgroundColor: '#f2f2f2',
            height: 50,
            fontSize: 18,
            margin: 10,
            borderRadius: 5,
            paddingHorizontal: 5,
          }}
        />
        <CustomButton
          onPress={() =>
            dispatch(
              addItem({
                id: todoList.length + 1,
                title: `${newTodo} ${todoList.length + 1}`,
              }),
            )
          }
          title="Add Todo"
          color="#017ec7"
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={todoList}
          renderItem={({item}) => <TodoItem item={item} />}
          ListEmptyComponent={() => <Text>Todo List Empty</Text>}
        />
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default Todo;
