import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {MainStackParamList} from '../../Models/NavigationTypeModels';
import {UserListItemModel} from '../../Models/UserTypeModel';
import {useAppDispatch, useAppSelector} from '../../Redux/store';
import {GetAllUsersDataRequest} from '../../Redux/usersActions';

import {Colors} from '../../Constants/colors';
import styles from './styles';

type UsersScreenProps = {
  navigation: NativeStackNavigationProp<MainStackParamList, 'Users'>;
};
const UsersScreen = ({navigation}: UsersScreenProps) => {
  const [data, setData] = useState<UserListItemModel[]>([]);
  const {users} = useAppSelector(state => state.users);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (users && users !== null && users.length > 0) {
      setData(users as UserListItemModel[]);
    }
  }, [users]);

  useEffect(() => {
    dispatch(GetAllUsersDataRequest());
  }, []);

  const onPressUserItem = (user: UserListItemModel) => {
    navigation.navigate('UserDetails', {
      user,
    });
  };

  const onPressAddUser = () => {
    navigation.navigate('AddUser');
  };

  const UserListItem = (data: {user: UserListItemModel}) => {
    const userInList = data.user;

    return (
      <Pressable
        style={styles.listItemContainer}
        onPress={() => onPressUserItem(userInList)}>
        <View style={styles.imageContainer}>
          <Image source={{uri: userInList.image}} style={styles.image} />
        </View>
        <Text style={styles.textWhite}>
          {userInList.firstName}, {userInList.age.toString()}
        </Text>
      </Pressable>
    );
  };

  const renderUserListItem = useCallback(
    ({item}: {item: UserListItemModel}) => {
      return <UserListItem user={item} />;
    },
    [],
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: 'white',
        }}>
        <FlatList
          numColumns={2}
          data={data}
          renderItem={renderUserListItem}
          contentContainerStyle={styles.flatListContainer}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={onPressAddUser}
            title="Add"
            color={Colors.whiteMain}
            accessibilityLabel="Press to add more users"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UsersScreen;
