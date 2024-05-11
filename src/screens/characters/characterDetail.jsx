//import liraries
import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import {screensStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  getSingleCharacter,
  resetData,
} from '../../store/actions/characterActions';
import Spinner from '../../components/uı/spinner';
import {charactersDetailStyle} from '../../styles/charactersStyle';
import {statusTypes} from '../../utils/constans';

// create a component
const CharacterDetail = ({route}) => {
  const {characterID} = route?.params;
  const {pendingSingleCharacter, singleCharacter} = useSelector(
    state => state.characters,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleCharacter(characterID));
    return () => {
      dispatch(resetData());
    };
  }, []);

  return (
    <View style={screensStyle.container}>
      {pendingSingleCharacter ? (
        <Spinner />
      ) : (
        <ScrollView>
          <View style={charactersDetailStyle.imageContainer}>
            <Image
              style={[
                charactersDetailStyle.image,
                singleCharacter.status == statusTypes.ALIVE
                  ? charactersDetailStyle.statusAliveContainer
                  : charactersDetailStyle.statusDeadContainer,
              ]}
              source={{
                uri: singleCharacter.image,
              }}
            />
            <View
              style={
                singleCharacter.status == statusTypes.ALIVE
                  ? charactersDetailStyle.aliveStatusContainer
                  : charactersDetailStyle.deadStatusContainer
              }>
              <Text style={charactersDetailStyle.status}>
                {singleCharacter.status}
              </Text>
            </View>
          </View>
          <View style={charactersDetailStyle.nameContainer}>
            <Text style={charactersDetailStyle.name}>
              {singleCharacter.name}
            </Text>
          </View>
          <View style={charactersDetailStyle.sectionContainer}>
            <Text style={charactersDetailStyle.sectionTitle}>PROPERTIES</Text>
            <View style={charactersDetailStyle.rowContainer}>
              <View style={charactersDetailStyle.infoContainer}>
                <Text>Gender</Text>
              </View>
              <View style={charactersDetailStyle.infoBox}>
                <Text>{singleCharacter.gender}</Text>
              </View>
            </View>
            <View style={charactersDetailStyle.rowContainer}>
              <View style={charactersDetailStyle.infoContainer}>
                <Text>Species</Text>
              </View>
              <View style={charactersDetailStyle.infoBox}>
                <Text>{singleCharacter.species}</Text>
              </View>
            </View>
            <View style={charactersDetailStyle.rowContainer}>
              <View style={charactersDetailStyle.infoContainer}>
                <Text>Status</Text>
              </View>
              <View style={charactersDetailStyle.infoBox}>
                <Text>{singleCharacter.status}</Text>
              </View>
            </View>
          </View>
          <View style={charactersDetailStyle.sectionContainer}>
            <Text style={charactersDetailStyle.sectionTitle}>WHEREABOUTS</Text>
          </View>
          <View style={charactersDetailStyle.rowContainer}>
            <View style={charactersDetailStyle.infoContainer}>
              <Text>Origin</Text>
            </View>
            <View style={charactersDetailStyle.infoBox}>
              <Text>{singleCharacter?.origin?.name}</Text>
            </View>
          </View>
          <View style={charactersDetailStyle.rowContainer}>
            <View style={charactersDetailStyle.infoContainer}>
              <Text>Location</Text>
            </View>
            <View style={charactersDetailStyle.infoBox}>
              <Text>{singleCharacter?.location?.name}</Text>
            </View>
          </View>
          <View style={charactersDetailStyle.sectionContainer}>
            <Text style={charactersDetailStyle.sectionTitle}>
              FEATURES CHAPTERS
            </Text>
          </View>
          <View style={charactersDetailStyle.rowContainer}>
            <View style={charactersDetailStyle.infoContainer}>
              <Text>Created</Text>
            </View>
            <View style={charactersDetailStyle.infoBox}>
              <Text>{singleCharacter.created}</Text>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default CharacterDetail;
