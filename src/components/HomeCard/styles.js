import { StyleSheet } from 'react-native';

import { metrics, colors } from '../../styles';

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
    flex: 1,
  },
  infoIcon: {
    color: colors.primary,
    paddingRight: metrics.basePadding / 2,
  },
  infoText: {
    color: colors.primary,
    fontSize: 12,
    marginLeft: metrics.baseMargin,
  },
});

export default styles;
