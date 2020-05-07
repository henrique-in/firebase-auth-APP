import React, {Component}from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Login from './src/Login';
import Home from './src/Home';
import Cadastro from './src/Cadastro';

const Navegador = createStackNavigator({
  Login:{
    screen: Login
  },
  Home:{
    screen: Home
  },
  Cadastro:{
    screen: Cadastro
  }
},{
  initialRouteName:'Login'
}

);

const AppContainer = createAppContainer(Navegador);
export default AppContainer;