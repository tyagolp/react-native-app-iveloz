import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors, metrics} from '../../../styles';

export const List = styled.FlatList``;

export const ButtonTitle = styled.TouchableOpacity`
  background-color: ${colors.white};
  border-radius: 16px;
  padding: 7px 8px;
  border: 2px solid #783872;
`;
export const ButtonTitleIcon = styled(Icon).attrs({
  size: 16,
  color: colors.primary,
})``;

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
  flex: 1;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.dark};
`;
export const FormInput = styled.Picker`
  flex: 1;
  color: ${colors.dark};
  font-weight: bold;
  padding: 0;
`;
