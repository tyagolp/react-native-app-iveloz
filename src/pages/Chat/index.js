import React, { Component } from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Background from '../../components/Background';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './styles';

const TabIcon = ({ tintColor }) => (
  <Icon name="comments-o" size={20} color={tintColor} />
);

export default class Chat extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  render() {
    return (
      <Background>
        <Header title="Chat" />
        <View style={styles.container} />
        <Footer />
      </Background>
    );
  }
}
