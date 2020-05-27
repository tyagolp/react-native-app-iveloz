import {StyleSheet} from 'react-native';

import {metrics, colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: metrics.basePadding / 2,
    margin: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  ContainerItem: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },

  ContainerRight: {
    flex: 5,
  },
  ContainerLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },

  info: {
    flexDirection: 'row',
    marginRight: metrics.baseMargin,
    alignItems: 'center',
  },
  infoIcon: {
    color: colors.primary,
  },
  infoText: {
    color: colors.darker,
    fontSize: 12,
  },
  infoFooter: {
    color: colors.darker,
    fontSize: 10,
    paddingLeft: 5,
  },
  infoFocus: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: metrics.baseMargin,
  },
});

export default styles;
