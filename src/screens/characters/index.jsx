//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {screensStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeParams,
  getCharacterList,
  loadMoreCharacter,
} from '../../store/actions/characterActions';
import Spinner from '../../components/uı/spinner';
import CharacterCard from '../../components/characters/characterCard';

// create a component
const Characters = () => {
  const {characterList, pending, params} = useSelector(
    state => state.characters,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacterList(params));
  }, [params]);

  const handleLoadMore = () => {
    let page = params.page + 1;
    dispatch(changeParams({page: page}));
    dispatch(loadMoreCharacter({page: page}));
  };

  return (
    <View style={screensStyle.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          data={characterList}
          renderItem={({item}) => <CharacterCard item={item} />}
          // onEndReachedThreshold={(0, 5)}
          // onEndReached={handleLoadMore}
          // ListFooterComponent={<Spinner />}
        />
      )}
    </View>
  );
};
export default Characters;
