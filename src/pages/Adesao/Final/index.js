import React, { Component } from 'react';
import {
  Container,
  ContainerTitle,
  ImageTitle,
  Title,
  SubTitle,
  Botao,
  BotaoText,
} from './styles';

import logo from '../../../../assets/iVelozWhite.png';
import Background from '../../../components/Background';

export default class Final extends Component {
  static navigationOptions = {
    headerMode: 'none',
  };

  handleClick = () => {
    const { navigation } = this.props;
    navigation.navigate('Main');
  };

  render() {
    return (
      <Background>
        <Container>
          <ContainerTitle>
            <ImageTitle source={logo} />
            <Title>TUDO CERTO!</Title>
            <SubTitle>SOLICITAÇÃO EFETUADA COM SUCESSO.</SubTitle>
            <SubTitle>Encaminhamos os dados para análise interna!</SubTitle>
          </ContainerTitle>
          <Botao onPress={this.handleClick}>
            <BotaoText>Ok, obrigado</BotaoText>
          </Botao>
        </Container>
      </Background>
    );
  }
}
