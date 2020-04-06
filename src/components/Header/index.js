import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import * as LoginAction from '../../store/modules/login/actions';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  signOut = async () => {
    const { setLogoffSuccess } = this.props;
    setLogoffSuccess();
  };

  handleMenu = async () => {
    const { navigation } = this.props;
    navigation.openDrawer();
  };

  handleHome = async () => {
    const { navigation } = this.props;
    navigation.navigate('Main');
  };

  render() {
    const { title, dark } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.containerItems}>
          <TouchableOpacity onPress={this.handleMenu}>
            <Icon
              name="navicon"
              size={18}
              style={dark ? styles.iconDark : styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleHome}>
            <Text style={dark ? styles.titleDark : styles.title}>{title}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.signOut}>
            <Icon
              name="power-off"
              size={18}
              style={dark ? styles.iconDark : styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// export default withNavigation(Header);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(Header));
