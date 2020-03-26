import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, metrics } from '../../../styles';

export const Dock = styled.TouchableOpacity`
  min-height: 250px;
  border-bottom-color: ${colors.light};
  border-bottom-width: 1px;
  margin-bottom: ${metrics.baseMarginSC};
  align-items: center;
  padding: 0;
`;
export const DockImage = styled.Image`
  background-color: #ccc;
  height: 250px;
  width: 100%;
`;

export const DockImageNull = styled.View`
  background-color: ${colors.darkerTransparent};
  height: 250px;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const DockImageNullIcon = styled(Icon).attrs({
  size: 25,
  color: colors.white,
})``;
