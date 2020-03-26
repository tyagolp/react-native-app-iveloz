import React from 'react';

import { createAppContainer } from 'react-navigation';
import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CustomizeDrawer from './components/CustomizeDrawer';

// import Icon from 'react-native-vector-icons/FontAwesome';
// import { colors } from './styles';

import Header from './components/Header';

import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Main from './pages/Main';
import RelatorioAdesao from './pages/Relatorios/Adesao';
import Plano from './pages/Adesao/Plano';
import Cadastro from './pages/Adesao/Cadastro';
import Financeiro from './pages/Adesao/Financeiro';
// import Chat from './pages/Chat';
// import Timeline from './pages/Timeline';
import Signatute from './pages/Adesao/Assinatura';
import PhotoBack from './pages/Adesao/PhotoBack';
import PhotoFront from './pages/Adesao/PhotoFront';
// import TakeCamera from './pages/TakeCamera';
import TakeSignarute from './pages/TakeSignature';
import Final from './pages/Adesao/Final';
import Profile from './pages/Profile';

const stackAdesao = createStackNavigator(
  {
    Main,
    Adesao: Cadastro,
    RelatorioAdesao,
    Plano,
    Financeiro,
    Signatute,
    PhotoBack,
    PhotoFront,
    Profile,
    Final: {
      screen: Final,
      navigationOptions: {
        headerShown: false,
      },
    },
    TakeSignarute: {
      screen: TakeSignarute,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    headerMode: 'screen',
    defaultNavigationOptions: {
      header: () => <Header title="" />,
    },
  }
);

const drawer = createDrawerNavigator(
  {
    stackAdesao,
  },
  {
    contentComponent: CustomizeDrawer,
  }
);

export default (isSigned = false) =>
  createAppContainer(
    createStackNavigator(
      {
        Login: SignIn,
        Register,
        Home: drawer,
      },
      {
        defaultNavigationOptions: {
          headerShown: false,
        },
        initialRouteName: isSigned ? 'Home' : 'Login',
      }
    )
    /* ,
     */
  );
