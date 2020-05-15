import React, {useEffect} from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native-svg';
import dateFormat from 'dateformat';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Backgroud from '../../components/Background';

import * as ActionAdesao from '../../store/modules/adesao/actions';

import {
  Container,
  ContainerCard,
  ContainerCardFooter,
  CardHeader,
  CardHeaderTitle,
  CardHeaderTitleText,
  CardHeaderTitleName,
  CardHeaderButtons,
  HomeCardItem,
  HomeCardItemText,
  HomeCardItemIcon,
  CardFooterContainer,
  CardFooterTitle,
  CardFooterTitleButton,
  CardFooterTitleButtonIcon,
  CardFooterTitleText,
  CardFooterEmptyTitle,
  CardChart,
  CardChartPie,
  CardChartLegend,
  LegendList,
  LegendItem,
  LegendItemText,
  LegendItemIcon,
} from './styles';
import {general, colors} from '../../styles';

const Main = ({navigation, user, adesao, totalAdesao, getChartDataRequest}) => {
  useEffect(() => {
    async function load() {
      const {month, year, chartPendent} = adesao;
      if (chartPendent === true) getChartDataRequest({month, year});
    }
    load();
  }, [adesao, getChartDataRequest]);

  function handlerRefreshChart() {
    const {month, year, chartPendent} = adesao;
    if (chartPendent === true) getChartDataRequest({month, year});
  }

  function handleNavigation(local) {
    navigation.navigate(local);
  }

  function handleChartLabel(item) {
    if (item)
      navigation.navigate('RelatorioAdesao', {
        item,
      });
    else navigation.navigate('RelatorioAdesao');
  }

  const Labels = ({slices, height, width}) => {
    return slices.map((slice, index) => {
      const {labelCentroid, pieCentroid, data} = slice;
      return (
        <Text
          key={index}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill="white"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize={24}
          stroke="black"
          strokeWidth={0.2}>
          {data.label}
        </Text>
      );
    });
  };

  const pieData = adesao.dataChart.map((item) => ({
    value: item.value,
    label: item.value,
    svg: {
      fill: item.color,
      onPress: () => handleChartLabel(item),
    },
    key: `pie-${item.key}`,
  }));

  return (
    <Backgroud>
      <Container>
        <ContainerCard>
          <CardHeader>
            <CardHeaderTitle>
              <CardHeaderTitleText>Bem Vindo</CardHeaderTitleText>
              <CardHeaderTitleName>{user.name}</CardHeaderTitleName>
            </CardHeaderTitle>
            <CardHeaderButtons>
              <HomeCardItem
                onPress={() => handleNavigation('Adesao')}
                style={[general.formStyles.sombra]}>
                <HomeCardItemIcon name="plus-circle" />
                <HomeCardItemText>Nova Adesão</HomeCardItemText>
              </HomeCardItem>
              <HomeCardItem
                onPress={() => handleNavigation('RelatorioAdesao')}
                style={[general.formStyles.sombra]}>
                <HomeCardItemIcon name="table" />
                <HomeCardItemText>Relatório</HomeCardItemText>
              </HomeCardItem>
              <HomeCardItem
                onPress={() => handleNavigation('Profile')}
                style={[general.formStyles.sombra]}>
                <HomeCardItemIcon name="user" />
                <HomeCardItemText>Perfil</HomeCardItemText>
              </HomeCardItem>
            </CardHeaderButtons>
          </CardHeader>
        </ContainerCard>
        <ContainerCardFooter>
          <CardFooterContainer style={[general.formStyles.sombra]}>
            <CardFooterTitle>
              <CardFooterTitleText>Venda do Mes</CardFooterTitleText>
              <CardFooterTitleButton onPress={() => handlerRefreshChart()}>
                <CardFooterTitleButtonIcon />
              </CardFooterTitleButton>
            </CardFooterTitle>
            {!adesao.chartPendent && (
              <>
                {totalAdesao ? (
                  <CardChart>
                    <CardChartPie data={pieData}>
                      <Labels />
                    </CardChartPie>
                    <CardChartLegend>
                      <LegendList>
                        <LegendItem
                          key="all"
                          color={colors.primary}
                          onPress={() => handleChartLabel(null)}>
                          <LegendItemIcon name="circle" />
                          <LegendItemText>Total - {totalAdesao}</LegendItemText>
                        </LegendItem>
                        {adesao.dataChart.map((item) => (
                          <LegendItem
                            key={item.key}
                            color={item.color}
                            onPress={() => handleChartLabel(item)}>
                            {
                              {
                                1: <LegendItemIcon name="clock-o" />,
                                2: <LegendItemIcon name="check" />,
                                3: <LegendItemIcon name="close" />,
                              }[item.key]
                            }
                            <LegendItemText>
                              {item.label} - {item.value}
                            </LegendItemText>
                          </LegendItem>
                        ))}
                      </LegendList>
                    </CardChartLegend>
                  </CardChart>
                ) : (
                  <CardFooterEmptyTitle>
                    Este mes não houve vendas ainda
                  </CardFooterEmptyTitle>
                )}
              </>
            )}
          </CardFooterContainer>
        </ContainerCardFooter>
      </Container>
    </Backgroud>
  );
};

// import { Container } from './styles';

const mapStateToProps = (state) => ({
  user: state.user.item,
  adesao: state.adesao,
  totalAdesao: Object.values(state.adesao.dataChart).reduce(
    (r, {value}) => r + value,
    0,
  ),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ActionAdesao, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
