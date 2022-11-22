import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {MainStackParamList} from '../Models/NavigationTypeModels';
import AddUserScreen from '../Screens/AddUserScreen/AddUserScreen';
import UserDetails from '../Screens/UsersDetailsScreen/UserDetails';
import UsersScreen from '../Screens/UsersScreen/UsersScreen';

const Main = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Main.Navigator>
      <Main.Screen
        name="Users"
        component={UsersScreen}
        options={{headerShown: true}}
      />
      <Main.Screen
        name="UserDetails"
        component={UserDetails}
        options={{headerShown: true}}
      />
      <Main.Screen
        name="AddUser"
        component={AddUserScreen}
        options={{headerShown: true}}
      />
    </Main.Navigator>
  );
};

export default MainStack;
