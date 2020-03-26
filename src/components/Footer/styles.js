import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: metrics.basePadding,
  },

  containerInfo: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  title: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.white,
  },

  icon: {
    color: colors.white,
  },
});

export default styles;
