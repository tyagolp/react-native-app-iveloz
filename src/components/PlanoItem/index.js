import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const PlanoItem = ({ item, onSelectPlano }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={!item.flag ? onSelectPlano : () => {}}
    >
      <View style={styles.ContainerItem}>
        <View style={styles.ContainerLeft}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.infoText}>{item.description}</Text>
        </View>
        <View style={styles.ContainerRight}>
          <Text style={styles.infoFocus}>
            {`R$ ${parseFloat(item.price).toFixed(2)}`}
          </Text>
        </View>
      </View>
      {item.internet ? (
        <View style={styles.ContainerItem}>
          <View style={styles.ContainerRight}>
            <Icon name="download" size={10} style={styles.infoIcon} />
            <Text
              style={styles.infoFooter}
            >{`Download ${item.internet.download_desc}`}</Text>
          </View>
          <View style={styles.ContainerRight}>
            <Icon name="upload" size={10} style={styles.infoIcon} />
            <Text
              style={styles.infoFooter}
            >{`Upload ${item.internet.upload_desc}`}</Text>
          </View>
        </View>
      ) : null}
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
export default PlanoItem;
