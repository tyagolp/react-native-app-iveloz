import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },

  containerItems: {
    height: 54 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight() / 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
  },

  buttonPadding: {
    padding: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  titleDark: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },

  icon: {
    color: colors.white,
  },
  iconDark: {
    color: colors.primary,
  },
});

export default styles;
