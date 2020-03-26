import { StyleSheet } from 'react-native';
import { colors, general } from '../../styles';

const styles = StyleSheet.create({
  ...general.formStyles,
  ...general.buttonStyles,

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 30,
  },

  viewTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    paddingLeft: 10,
    color: colors.white,
    textAlign: 'center',
  },
});

export default styles;
