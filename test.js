







import React from 'react';
import { View, Text} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import LoginScreen from './screens/SignInScreen';
import RegisterScreen from './screens/RegisterScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';

const AppStack = createStackNavigator({ 
  Home: HomeScreen, Details: DetailsScreen 
});
const AuthStack = createStackNavigator({ 
    SignIn: LoginScreen,
    Register: RegisterScreen,
    ResetPassword: ResetPasswordScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
      headerLeft: null
    }
  }
  
);
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
);

const AppNavigator = createStackNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
    SignIn: LoginScreen,
    Register: RegisterScreen,
    ResetPassword: ResetPasswordScreen,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default createAppContainer(AppNavigator);