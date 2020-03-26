import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import {EvilIcons, FontAwesome} from 'react-native-vector-icons';
import LinearGradient from 'react-native-linear-gradient';

import {colors} from '../../styles';

export const Container = styled(LinearGradient).attrs({
  colors: [colors.white, colors.lighter],
})`
  flex: 1;
`;

export const HeaderContainer = styled(LinearGradient).attrs({
  colors: [colors.primary, colors.primary2],
})`
  position: relative;
  height: 150px;
  padding: 10px;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  padding: 0 10px;
  text-transform: uppercase;
`;
export const HeaderText = styled.Text`
  color: #fff8f8;
`;

export const HeaderImagemContainer = styled.View`
  position: absolute;
  top: 75px;
  left: 60px;
  height: 150px;
  width: 150px;
  border-radius: 75px;
  z-index: 2;
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

export const ScreenContainer = styled.ScrollView`
  padding-top: 100px;
`;

export const ScreenStyle = styled.TouchableOpacity`
  padding: 12px 0 12px 20px;
  flex-direction: row;
  align-items: center;
`;

export const ScreenTextStyle = styled.Text`
  font-size: 16px;
  margin-left: 20px;
  text-align: center;
  color: ${colors.secundary};
`;

export const ScreenIcon = styled(Icon).attrs({
  size: 18,
  color: colors.secundary,
})``;

export const Line = styled.View`
  border: 1px solid ${colors.darkTransparent};
  margin: 10px;
`;
