import React from 'react';
import { View } from 'react-native';

import Background from '../../components/Background';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './styles';

export default function Timeline() {
  return (
    <Background>
      <Header title="Timeline" />
      <View style={styles.container} />
      <Footer />
    </Background>
  );
}
