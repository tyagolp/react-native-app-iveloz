import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import dateFormat from 'dateformat';
import styles from './styles';
import { colors } from '../../styles';

const AdesaoItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.ContainerItem}>
        <View style={styles.ContainerLeft}>
          {
            {
              1: <Icon name="clock-o" color={colors.primary} size={25} />,
              2: <Icon name="check" color={colors.buttonGreen} size={25} />,
              3: <Icon name="close" color={colors.buttonRed} size={25} />,
              4: <Icon name="close" color={colors.secundary} size={25} />,
            }[item.status]
          }
        </View>
        <View style={styles.ContainerRight}>
          <Text style={styles.title}>{`${item.id} - ${item.cliente}`}</Text>
          <Text style={styles.infoText}>{item.combo.name}</Text>
          <Text style={styles.infoText}>
            {dateFormat(item.createdAt, 'dd/mm/yyyy')}
          </Text>
        </View>
      </View>
    </View>
  );
};

/* PlanoItem.protoType = {
  item: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    download: PropTypes.string,
    upload: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
}; */
export default AdesaoItem;
