import {StyleSheet} from 'react-native';
import Colors from '../theme/colors';
import {Status} from 'iconsax-react-native';

const charactersDetailStyle = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  image: {
    width: 160,
    height: 150,
    borderRadius: 300,
    borderWidth: 3,
  },
  name: {
    marginVertical: 15,
    fontSize: 22,
    fontWeight: '700',
    color: Colors.BLACK,
  },
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  aliveStatusContainer: {
    backgroundColor: Colors.GREEN,
    borderRadius: 5,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: -15,
    alignSelf: 'center',
  },
  deadStatusContainer: {
    backgroundColor: Colors.RED,
    borderRadius: 5,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: -15,
    alignSelf: 'center',
  },
  status: {
    color: Colors.WHITE,
    margin: 5,
    fontSize: 16,
    fontWeight: '600',
  },
  statusAliveContainer: {
    borderColor: Colors.GREEN,
  },
  statusDeadContainer: {
    borderColor: Colors.RED,
  },
  sectionTitle: {
    color: Colors.BROWN,
    textAlign: 'center',
    marginVertical: 10,
  },
  sectionContainer: {
    margin: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  infoContainer: {backgroundColor: '#e5ded1', padding: 10, flex: 1},
  infoBox: {
    backgroundColor: '#e5ded1',
    padding: 10,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
});

export {charactersDetailStyle};
