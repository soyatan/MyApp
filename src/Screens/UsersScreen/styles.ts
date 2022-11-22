import {StyleSheet} from 'react-native';

import {Colors} from '../../Constants/colors';
import {height, width} from '../../Constants/metrics';

const styles = StyleSheet.create({
  container: {
    //flex: 1,

    paddingVertical: width * 0.0001,
    paddingHorizontal: height * 0.0001,
    color: Colors.redText,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 25,
    width: width * 0.4,
    backgroundColor: 'blue',
    alignSelf: 'center',
    borderRadius: 95,
  },
  buttonText: {
    color: Colors.whiteMain,
  },
  textWhite: {
    color: Colors.whiteMain,
  },
  flatListContainer: {},
  listItemContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.blackMain,
    flex: 1,
    borderWidth: 1,
    marginHorizontal: 15,
    marginVertical: 10,

    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  imageContainer: {
    // width: '100%',
    //height: height * 0.1,
  },
  image: {
    borderRadius: 10,

    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default styles;
