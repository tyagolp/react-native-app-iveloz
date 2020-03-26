import styled from 'styled-components/native';
import { colors } from '../../../styles';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 50px 30px 20px;
`;

export const ContainerTitle = styled.View`
  flex: 6;
  color: ${colors.white};
`;

export const ImageTitle = styled.Image`
  width: 150px;
  height: 65px;
  margin: 50px 0;
`;
export const Title = styled.Text`
  font-size: 22px;
  font-weight: 500;
  color: ${colors.white};
`;

export const SubTitle = styled.Text`
  margin-top: 20px;
  font-size: 15px;
  color: ${colors.white};
`;

export const Botao = styled.TouchableOpacity`
  flex: 1;
`;
export const BotaoText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${colors.white};
`;
