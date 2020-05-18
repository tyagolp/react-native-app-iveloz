import {StyleSheet} from 'react-native';

import {metrics, colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: metrics.basePadding / 2,
    // marginHorizontal: metrics.baseMargin / 2,
    marginVertical: metrics.baseMargin / 2,
    // borderRadius: metrics.baseRadius * 2,
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

  ContainerLeft: {
    flex: 3,
  },
  Container2: {
    flex: 1,
  },
  ContainerRight: {
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
