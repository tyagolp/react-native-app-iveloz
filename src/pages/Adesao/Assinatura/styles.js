import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, metrics } from '../../../styles';

export const Dock = styled.TouchableOpacity`
  border-bottom-color: ${colors.light};
  border-bottom-width: 1px;
  margin-bottom: ${metrics.baseMarginSC};
  align-items: center;
  min-height: 125px;
  padding: 0;
`;
export const DockImage = styled.Image`
  background-color: #ccc;
  height: 125px;
  width: 100%;
`;

export const DockImageNull = styled.View`
  background-color: ${colors.darkerTransparent};
  height: 125px;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const DockImageNullIcon = styled(Icon).attrs({
  size: 25,
  color: colors.white,
})``;

export const FormIcon = styled(Icon).attrs({
  size: 16,
  color: colors.success,
})``;

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const FormButtonSubmit = styled.TouchableOpacity`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.primary};
  border-radius: ${metrics.baseRadiusSC};
  padding: ${metrics.basePaddingSC};
  margin: ${metrics.baseMarginSC};
`;

export const FormButtonSubmitIcon = styled(Icon).attrs({
  color: colors.white,
  size: 16,
})``;
export const FormButtonSubmitText = styled.Text`
  flex: 1;
  font-size: 15px;
  color: ${colors.white};
  font-weight: bold;
  text-align: center;
`;

export const FormButtonClose = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;
  align-content: center;
  text-align: center;
  align-items: center;
  color: ${colors.white};
  padding: ${metrics.basePaddingSC};
  margin: ${metrics.baseMarginSC};
`;

export const FormButtonCloseIcon = styled(Icon).attrs({
  color: colors.primary,
  size: 16,
})``;
export const FormButtonCloseText = styled.Text`
  flex: 1;
  font-size: 15px;
  color: ${colors.primary};
  font-weight: bold;
  text-align: center;
`;
