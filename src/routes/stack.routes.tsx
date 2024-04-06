import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from '../pages/Onboarding';
import Signin from '../pages/Signin';

import AuthRoutes from './tab.routes';
import Signup from '../pages/Signup';
import Institution from '../pages/Institution';

const stackRoutes = createNativeStackNavigator();

const StackRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <stackRoutes.Screen
        name="Onboarding"
        component={Onboarding}
    />
    <stackRoutes.Screen
        name="Signin"
        component={Signin}
    />
    <stackRoutes.Screen
        name="Signup"
        component={Signup}
    />
    <stackRoutes.Screen
        name="Home"
        component={AuthRoutes}
    />
    <stackRoutes.Screen
        name="Institution"
        component={Institution}
    />
  </stackRoutes.Navigator>
)

export default StackRoutes;


