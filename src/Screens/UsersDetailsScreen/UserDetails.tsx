import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {MainStackParamList} from '../../Models/NavigationTypeModels';
import styles from './styles';

type UserDetailsProps = {
  navigation: NativeStackNavigationProp<MainStackParamList, 'UserDetails'>;
  route: RouteProp<MainStackParamList, 'UserDetails'>;
};
export default function UserDetails({navigation, route}: UserDetailsProps) {
  const {user} = route.params;
  const DisplayDetail = ({text, title}: {text: string; title: string}) => {
    return (
      <View style={styles.userDetailItem}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text>{text}</Text>
      </View>
    );
  };

  const DisplaAddressDetail = ({text, title}: {text: any; title: string}) => {
    console.log(text.address);
    return (
      <View style={styles.userAddressDetailItem}>
        <Text style={styles.textTitle}>{title}</Text>

        <Text>{text.address}</Text>
        <Text>{text.city}</Text>
        <Text>{text.state}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.secondContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri: user.image}} style={styles.image} />
        </View>
        <DisplayDetail text={user.firstName} title={'First Name'} />
        <DisplayDetail text={user.lastName} title={'Last Name'} />
        <DisplayDetail text={user.age.toString()} title={'Age'} />
        <DisplaAddressDetail
          text={user.company.address}
          title={'Company Details'}
        />
        <DisplaAddressDetail text={user.address} title={'Address'} />
      </ScrollView>
    </SafeAreaView>
  );
}
