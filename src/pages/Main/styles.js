import styled from 'styled-components/native';
import {PieChart} from 'react-native-svg-charts';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../styles';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ContainerCard = styled.View`
  margin: 0px 5px 10px;
  flex: 1;
`;
export const ContainerCardFooter = styled.View`
  margin: 10px 15px;
  flex: 2;
`;

export const CardHeader = styled.View`
  flex-direction: column;
  flex: 1;
`;

export const CardHeaderTitle = styled.View`
  flex: 2;
  padding: 0 10px;
`;
export const CardHeaderTitleText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  padding: 0 5px 0;
  color: ${colors.white};
`;
export const CardHeaderTitleButton = styled.TouchableOpacity``;
export const CardHeaderTitleButtonText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  padding: 0 5px 0;
  color: ${colors.white};
`;
export const CardHeaderTitleName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  padding: 10px 0 0;
  color: ${colors.white};
`;

export const CardHeaderButtons = styled.View`
  flex: 3;
  flex-direction: row;
`;

// Card chart ---------------
export const CardFooterContainer = styled.View`
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 5px;
  flex: 1;
`;
export const CardFooterTitle = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;
export const CardFooterTitleText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.primary};
`;
export const CardFooterTitleButton = styled.TouchableOpacity`
  background-color: ${colors.lighter};
  margin-left: 10px;
  border-radius: 20px;
  padding: 5px;
`;
export const CardFooterTitleButtonIcon = styled(Icon).attrs({
  name: 'refresh',
  color: colors.primary,
  size: 16,
})``;
export const CardFooterEmptyTitle = styled.Text`
  flex: 1;
  padding: 10px 0;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
`;
export const CardChart = styled.View`
  flex-direction: row;
  padding: 10px 20px;
  flex: 7;
`;
export const CardChartPie = styled(PieChart)`
  flex: 2;
  position: relative;
`;
export const CardChartLegend = styled.View`
  flex: 1;
  flex-direction: column;
`;
export const LegendList = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;
export const LegendItem = styled.TouchableOpacity`
  margin: 10px 0px 10px 5px;
  padding: 4px 3px;
  background-color: ${(props) => props.color};
  border-radius: 3px;
  flex-direction: row;
`;
export const LegendItemIcon = styled(Icon).attrs({
  color: colors.white,
  size: 14,
})`
  padding: 0 5px;
`;
export const LegendItemText = styled.Text`
  font-size: 11px;
  font-weight: bold;
  color: ${colors.white};
`;

export const HomeCardItem = styled.TouchableOpacity`
  background-color: ${colors.white};
  margin: 10px 10px 0;
  border-radius: 5px;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HomeCardItemText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${colors.primary};
`;
export const HomeCardItemIcon = styled(Icon).attrs({
  color: colors.primary,
  size: 40,
})``;
