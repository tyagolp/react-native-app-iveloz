import styled from 'styled-components/native';

// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { EvilIcons, FontAwesome } from 'react-native-vector-icons';
import {colors, metrics} from '../../styles';

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

export const HeaderImagemContainer = styled.View`
  position: relative;
  margin: auto;
  height: 150px;
  width: 150px;
  border-radius: 75px;
`;
export const HeaderImagem = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 75px;
`;
export const HeaderImagemDefault = styled(Icon).attrs({
  size: 150,
  color: colors.primary,
})`
  top: 14px;
`;

export const HeaderIconContainer = styled.TouchableOpacity`
  position: absolute;
  bottom: 7px;
  right: 7px;
  height: 28px;
  width: 28px;
  border-radius: 15px;
  background-color: ${colors.secundary};
  align-items: center;
  justify-content: center;
`;

export const HeaderIcon = styled(Icon).attrs({
  color: colors.white,
  size: 14,
})``;
