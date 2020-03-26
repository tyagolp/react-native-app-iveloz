import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, metrics } from '../../../styles';

export const Toogle = styled.View`
  flex-direction: row;
`;
export const ToogleButton = styled.TouchableHighlight`
  flex: 1;
  background-color: ${props =>
    props.selected ? colors.primary : colors.secundary};
  align-items: center;
  padding: 5px;
  margin: 20px 5px 0;
  border-radius: 5px;
`;
export const ToogleText = styled.Text`
  color: ${colors.white};
  font-size: 14px;
`;

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
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.dark};
`;
export const FormInputText = styled.TextInput.attrs({
  placeholderTextColor: colors.darkTransparent,
})`
  flex: 1;
  color: ${colors.dark};
  font-weight: bold;
  height: 35px;
  padding: 0;
`;
