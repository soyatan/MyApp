import {StyleSheet} from 'react-native';
import {Colors} from '../../Constants/colors';
import {width} from '../../Constants/metrics';

const styles = StyleSheet.create({
  imageContainer: {
    // width: '100%',
    //height: height * 0.1,
  },
  addUserListItem: {
    flexDirection: 'row',
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    backgroundColor: Colors.whiteMain,
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 5,
    borderWidth: 1,
    marginLeft: 5,
    paddingVertical: 5,
  },
  buttonContainer: {
    elevation: 100,
    zIndex: 100,
    position: 'absolute',
    bottom: 25,
    width: width * 0.4,
    backgroundColor: 'blue',
    alignSelf: 'center',
    borderRadius: 95,
  },
  container: {flex: 1},
  secondContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
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
