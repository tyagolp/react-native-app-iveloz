import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ActionLogin from '../../store/modules/login/actions';

import {
  Container,
  HeaderContainer,
  HeaderTitle,
  HeaderText,
  ScreenContainer,
  ScreenStyle,
  ScreenTextStyle,
  ScreenIcon,
  HeaderImagem,
  HeaderImagemDefault,
  HeaderImagemContainer,
  Line,
} from './styles';

import { general } from '~/styles';


class CustomizeDrawer extends Component {
  navigateToScreen = route => () => {
    const { navigate } = NavigationActions;
    const { navigation } = this.props;

    const navigateAction = navigate({ routeName: route });
    navigation.dispatch(navigateAction);
  };

  handleLogof = () => {
    const { setLogoffSuccess } = this.props;
    setLogoffSuccess();
  };

  render() {
    const { context } = this.props;
    return (
      <Container>
        <HeaderContainer>
          <HeaderText>Ola novamente</HeaderText>
          <HeaderTitle>{context.item.name}</HeaderTitle>

          {context.item.avatar ? (
            <HeaderImagemContainer style={general.formStyles.sombra}>
              <HeaderImagem source={{ uri: context.item.avatar.url }} />
            </HeaderImagemContainer>
          ) : (
            <HeaderImagemContainer
              style={[
                { backgroundColor: '#fcfcfc' },
                general.formStyles.sombra,
              ]}
            >
              <HeaderImagemDefault name="user" />
            </HeaderImagemContainer>
          )}
        </HeaderContainer>

        <ScreenContainer>
          <ScreenStyle onPress={this.navigateToScreen('Main')}>
            <ScreenIcon name="home" />
            <ScreenTextStyle>Home</ScreenTextStyle>
          </ScreenStyle>
          <ScreenStyle onPress={this.navigateToScreen('Adesao')}>
            <ScreenIcon name="plus-circle" />
            <ScreenTextStyle>Nova Adesão</ScreenTextStyle>
          </ScreenStyle>
          <ScreenStyle onPress={this.navigateToScreen('Adesao')}>
            <ScreenIcon name="pie-chart" />
            <ScreenTextStyle>Grafico</ScreenTextStyle>
          </ScreenStyle>
          <ScreenStyle onPress={this.navigateToScreen('RelatorioAdesao')}>
            <ScreenIcon name="th-list" />
            <ScreenTextStyle>Relatorio Adesao</ScreenTextStyle>
          </ScreenStyle>
          <Line />
          <ScreenStyle onPress={this.navigateToScreen('Profile')}>
            <ScreenIcon name="user" />
            <ScreenTextStyle>Perfil</ScreenTextStyle>
          </ScreenStyle>
          <ScreenStyle onPress={this.handleLogof}>
            <ScreenIcon name="power-off" />
            <ScreenTextStyle>Sair</ScreenTextStyle>
          </ScreenStyle>
        </ScreenContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  context: state.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionLogin, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CustomizeDrawer);
