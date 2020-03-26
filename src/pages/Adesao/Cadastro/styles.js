import styled from 'styled-components/native';

import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, metrics } from '../../../styles';

export const Form = styled.View`
  display: flex;
  flex-direction: row;
  border-bottom-color: ${colors.light};
  border-bottom-width: 1px;
  margin-bottom: ${metrics.baseMarginSC};
  align-items: center;
  padding: 0;
`;

export const FormLabel = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.dark};
`;
export const FormInputMask = styled(TextInputMask).attrs({
  placeholderTextColor: colors.darkTransparent,
})`
  flex: 1;
  color: ${colors.dark};
  font-weight: bold;
  height: 35px;
  padding: 0;
`;
export const FormInputText = styled.TextInput.attrs({
  placeholderTextColor: colors.darkTransparent,
})`
  flex: 1;
  color: ${colors.dark};
  font-weight: bold;
  padding: 0;
`;

export const FormInputTextDisable = styled.Text`
  flex: 1;
  color: ${colors.darkTransparent};
  font-weight: bold;

  padding: 5px 0;
  margin: 0;
`;

export const FormLoading = styled.ActivityIndicator.attrs({
  size: 18,
  color: colors.primary,
})``;

export const FormIcon = styled(Icon).attrs({
  size: 16,
  color: colors.success,
})``;
