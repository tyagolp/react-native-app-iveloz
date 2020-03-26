import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  baseMargin: 10,
  baseMarginSC: '10px',
  basePadding: 20,
  basePaddingSC: '20px',
  baseRadius: 3,
  baseRadiusSC: '3px',
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
