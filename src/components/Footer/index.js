import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Footer extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  signOut = async () => {
    const { navigation } = this.props;
    navigation.navigate('Login');
  };

  handleHome = async () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
  };

  handleChat = async () => {
    const { navigation } = this.props;
    navigation.navigate('Chat');
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.containerInfo}
          onPress={this.handleHome}
        >
          <Icon name="home" size={16} style={styles.icon} />
          <Text style={styles.title}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containerInfo}
          onPress={this.handleChat}
        >
          <Icon name="comments-o" size={16} style={styles.icon} />
          <Text style={styles.title}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containerInfo}
          onPress={this.handleHome}
        >
          <Icon name="user-o" size={16} style={styles.icon} />
          <Text style={styles.title}>Perfil</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(Footer);
