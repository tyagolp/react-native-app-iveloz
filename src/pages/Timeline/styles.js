import { StyleSheet } from 'react-native';
import { colors, general, metrics } from '../../styles';

const styles = StyleSheet.create({
  ...general.formStyles,
  ...general.buttonStyles,

  container: {
    flex: 1,
    // backgroundColor: colors.primary,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 0,
  },

  viewTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },

  title: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
  },
  titleIcon: {
    color: colors.white,
    paddingRight: metrics.basePadding,
  },
  titleText: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

export default styles;
