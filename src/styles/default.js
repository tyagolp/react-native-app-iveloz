import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, metrics } from '.';

export const KeyboardASV = styled(KeyboardAwareScrollView)``;

export const IvlzModel = styled(Modal)`
  flex: 1;
`;

export const IvlzModelView = styled.View`
  background-color: ${colors.white};
  justify-content: center;
  padding: 20px;
`;
export const IvlzModelTitle = styled.Text`
  color: ${colors.buttonRed};
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  padding-bottom: 10px;
`;
export const IvlzModelText = styled.Text`
  color: ${colors.dark};
  text-align: center;
  padding: 10px 0;
`;

export const IvlzModelFooter = styled.View`
  flex-direction: row;
`;
export const IvlzModelButton = styled.TouchableOpacity`
  background-color: ${colors.primary};
  flex: 1;
  padding: 10px;
  margin: 5px;
`;
export const IvlzModelButtonText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  text-align: center;
  font-size: 18px;
`;
export const IvlzModelButtonIcon = styled(Icon).attrs({
  color: colors.white,
  size: 16,
})``;

export const Container = styled.View`
  margin: 10px 0 0;
  background-color: white;
  border-radius: 15px;

  padding: ${metrics.basePaddingSC};
`;

export const Page = styled.View`
  display: flex;
  flex-direction: row;
`;
export const PageIndex = styled.View`
  flex: 1;
  border: 2px solid
    ${props => (props.color ? colors.primary : colors.transparent)};
`;

export const PageNumber = styled.Text`
  color: ${colors.primary};
  font-weight: bold;
`;
export const Title = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;
export const TitleText = styled.Text`
  flex: 1;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.primary};
`;
export const TitleIcon = styled(Icon).attrs({
  size: 24,
  color: colors.primary,
})`
  padding-right: 10px;
`;
export const TitleIndication = styled.ActivityIndicator.attrs({
  size: 24,
  color: colors.white,
})`
  padding-right: 10px;
`;

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
  border: 1px solid ${colors.primary};
  border-radius: ${metrics.baseRadiusSC};
  background-color: ${colors.white};
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
