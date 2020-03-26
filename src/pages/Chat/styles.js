import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: metrics.baseMargin * 2,
    borderRadius: metrics.baseRadius,
    borderColor: colors.darkTransparent,
  },

  containerCard: {
    marginTop: metrics.baseMargin,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  containerItem: {
    width: '50%',
    height: 100,
  },
  containerItem2: {
    width: '50%',
    height: 200,
    flexShrink: 1,
  },
});

export default styles;
