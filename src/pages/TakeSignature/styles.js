import styled from 'styled-components/native';

import SignatureCapture from 'react-native-signature-capture';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, metrics } from '../../styles';

export const Container = styled.View`
  background-color: ${colors.white};
  flex: 1;
  flex-direction: column;
`;

export const Signature = styled(SignatureCapture)`
  flex: 4;
  border-width: 1px;
  border-radius: ${metrics.baseRadiusSC};
  border: 1px solid #000;
  margin: 0 10px;
`;

export const Footer = styled.View`
  flex: 1;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  padding: 0 10px 10px;
`;

export const FormButtonFake = styled.TouchableOpacity`
  padding: 10px 25px;
  border-radius: 50px;
  align-items: center;
`;

export const FormButtonSubmit = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${colors.primary};
  border-radius: 50px;
  padding: 10px 25px;
`;

export const FormButtonClose = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${colors.buttonRed};
  border-radius: 50px;
  padding: 10px 25px;
`;

export const FormButtonClear = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${colors.darker};
  border-radius: 50px;
  padding: 10px 25px;
`;

export const FormButtonIcon = styled(Icon).attrs({
  color: colors.white,
  size: 16,
})``;
