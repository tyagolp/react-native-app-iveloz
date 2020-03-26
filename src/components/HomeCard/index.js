import React from 'react';

import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

const HomeCard = ({ styleSheet, title, icon, onNavigate }) => (
  <TouchableOpacity style={styleSheet} onPress={onNavigate}>
    <Icon style={styles.infoIcon} size={20} name={icon} />
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

export default HomeCard;
