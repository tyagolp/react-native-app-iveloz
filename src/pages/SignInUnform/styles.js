import { StyleSheet } from 'react-native';
import { colors, general, metrics } from '../../styles';

const styles = StyleSheet.create({
  ...general.formStyles,
  ...general.buttonStyles,

  container: {
    flex: 1,
    // backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 30,
  },

  title: {
    fontSize: 28,
    marginBottom: 20,
    color: colors.white,
    textAlign: 'center',
  },

  viewLogo: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: metrics.baseMargin,
  },

  logo: {
    width: 200,
    height: 90,
  },
});

export default styles;
