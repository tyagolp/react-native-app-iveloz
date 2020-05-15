import {StyleSheet} from 'react-native';
import {colors, general, metrics} from '../../../styles';

const styles = StyleSheet.create({
  ...general.formStyles,
  ...general.buttonStyles,

  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 0,
  },

  containerView: {},

  title: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    paddingTop: metrics.basePadding / 2,
    paddingBottom: metrics.basePadding / 2,
  },
  titleIcon: {
    color: colors.white,
    paddingRight: metrics.basePadding,
  },
  titleText: {
    fontSize: 14,
    color: colors.white,
    fontWeight: 'bold',
  },

  form: {
    margin: metrics.baseMargin,
    padding: metrics.basePadding,
  },

  formInput: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    marginBottom: metrics.basePadding,
    color: colors.white,
  },
  formSelect: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    marginBottom: metrics.basePadding,
    color: colors.white,
  },
  formButton: {
    width: 150,
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    shadowColor: colors.darkTransparent,
  },
  formButtonText: {
    flex: 1,
    fontSize: 15,
    color: colors.primary,
    fontWeight: 'bold',
  },
});

export default styles;
