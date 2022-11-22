import {StyleSheet} from 'react-native';
import {Colors} from '../../Constants/colors';

const styles = StyleSheet.create({
  imageContainer: {
    // width: '100%',
    //height: height * 0.1,
  },
  container: {flex: 1},
  secondContainer: {
    flex: 1,
    alignItems: 'center',
  },
  textTitle: {
    fontWeight: 'bold',
  },
  image: {
    borderRadius: 10,

    width: 100,
    height: 100,
    marginBottom: 10,
  },
  userDetailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    backgroundColor: Colors.grayLight,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  userAddressDetailItem: {
    flexDirection: 'column',

    width: '90%',
    backgroundColor: Colors.grayLight,
    marginHorizontal: 5,
    marginVertical: 10,
  },
});

export default styles;
