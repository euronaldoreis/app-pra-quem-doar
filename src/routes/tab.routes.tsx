import React from 'react'
import { Platform } from 'react-native';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../styles/colors';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Profile from '../pages/Profile';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.heading,
        style: {
          alignItems: 'center',
          justifyContent: 'center',
          height: Platform.OS === 'ios' ? 90 : 60,
        },
        labelStyle: {
          fontSize: 14,
          marginBottom: 5,
        },
        headerShown: false
      }}
    >
      <AppTab.Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: (({ size, color}) => (
              <MaterialIcons
                  name="home-filled"
                  size={size}
                  color={color}
              />
          ))
        }}
      />
      <AppTab.Screen 
        name="Instituições"
        component={Search}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons 
              name="favorite"
              size={size}
              color={color}
            />
          ))
        }}
      />
      <AppTab.Screen 
        name="Meu Perfil"
        component={Profile}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="person"
              size={size}
              color={color}
            />
          ))
        }}
      />
    </AppTab.Navigator>
  )
}

export default AuthRoutes;
