import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import dateFormat from 'dateformat';
import styles from './styles';
import {colors} from '../../styles';

const AdesaoItem = ({item, click}) => {
  return (
    <TouchableOpacity
      onPress={item.status === 3 ? () => click(item) : () => {}}
      style={styles.container}>
      <View style={styles.ContainerItem}>
        <View style={styles.ContainerLeft}>
          {
            {
              1: <Icon name="clock-o" color={colors.primary} size={26} />,
              2: <Icon name="check" color={colors.buttonGreen} size={26} />,
              3: <Icon name="close" color={colors.buttonRed} size={26} />,
            }[item.status]
          }
        </View>
        <View style={styles.ContainerRight}>
          <Text
            style={styles.title}>{`${item.adesaoid} - ${item.cliente}`}</Text>
          <Text style={styles.infoText}>{item.comboname}</Text>
          <Text style={styles.infoText}>
            {dateFormat(item.createdAt, 'dd/mm/yyyy')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
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
