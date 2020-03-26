import { StyleSheet } from 'react-native';
import { colors, general, metrics } from '../../styles';

export default StyleSheet.create({
  ...general.formStyles,
  ...general.buttonStyles,

  component: {
    flex: 1,
    flexDirection: 'column',
  },

  signature: {
    flex: 1,
    borderWidth: 1,
    borderRadius: metrics.baseRadius,
    marginHorizontal: metrics.baseMargin,
  },

  buttonComponent: {
    flex: 1,
    flexDirection: 'row',
    padding: metrics.basePadding,
  },
  buttonComponentItem: {
    flex: 1,
    marginHorizontal: metrics.baseMargin,
  },
});
