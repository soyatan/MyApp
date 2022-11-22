import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Colors} from '../../Constants/colors';
import {MainStackParamList} from '../../Models/NavigationTypeModels';
import styles from './styles';

type AddUserScreenProps = {
  navigation: NativeStackNavigationProp<MainStackParamList, 'AddUser'>;
  route: RouteProp<MainStackParamList, 'AddUser'>;
};
export default function AddUserScreen({navigation, route}: AddUserScreenProps) {
  const [id, setId] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [maidenName, setmaidenName] = useState('');
  const [age, setage] = useState('');
  const [gender, setgender] = useState('');
  const [email, setEmail] = useState('');
  const [hair, setHair] = useState('');

  const UserDetailInputItem = ({
    state,
    setState,
    title,
  }: {
    state: any;
    setState: any;
    title: string;
  }) => {
    return (
      <View style={styles.addUserListItem}>
        <Text style={{flex: 0.3}}>{title}:</Text>
        <View style={styles.inputStyle}>
          <TextInput
            onChangeText={setState}
            value={state}
            placeholder={`Please enter ${title}`}
            keyboardType="numeric"
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.secondContainer}>
        <UserDetailInputItem state={id} setState={setId} title={'ID'} />
        <UserDetailInputItem
          state={firstName}
          setState={setfirstName}
          title={'First Name'}
        />
        <UserDetailInputItem
          state={maidenName}
          setState={setmaidenName}
          title={'Maiden Name'}
        />
        <UserDetailInputItem
          state={lastName}
          setState={setlastName}
          title={'Last Name'}
        />
        <UserDetailInputItem state={age} setState={setage} title={'Age'} />
        <UserDetailInputItem
          state={gender}
          setState={setgender}
          title={'Gender'}
        />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.goBack()}
          title="Add"
          color={Colors.blueIcon}
          accessibilityLabel="Press to add more users"
        />
      </View>
    </SafeAreaView>
  );
}
