import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Backgroud from '../../../components/Background';
import {
  KeyboardASV,
  Container,
  Page,
  PageIndex,
  PageNumber,
  Title,
  TitleText,
  TitleIcon,
  Footer,
  FormButtonSubmit,
  FormButtonSubmitIcon,
  FormButtonSubmitText,
  FormButtonClose,
  FormButtonCloseIcon,
  FormButtonCloseText,
} from '../../../styles/default';

import {
  Toogle,
  ToogleButton,
  ToogleText,
  Form,
  FormLabel,
  FormInputText,
} from './styles';

import PlanoItem from '../../../components/PlanoItem';

import * as AdesaoActions from '../../../store/modules/adesao/actions';

class Financeiro extends Component {
  state = {
    diaVenc: 1,
    obs: '',
  };

  componentDidMount() {
    const { adesao } = this.props;

    if (adesao.item.diaVenc) {
      this.setState({ diaVenc: adesao.item.diaVenc, obs: adesao.item.obs });
    }
  }

  handleNext = () => {
    const { diaVenc, obs } = this.state;
    const { navigation, setFinanceiroRequest } = this.props;
    setFinanceiroRequest({ diaVenc, obs });
    navigation.navigate('PhotoBack');
  };

  handleClose = () => {
    const { navigation } = this.props;

    navigation.navigate('Plano');
  };

  handleToogle = (event, value) => {
    this.setState({ diaVenc: parseInt(value) });
  };

  render() {
    const { diaVenc, obs } = this.state;
    const { adesao } = this.props;
    return (
      <Backgroud>
        <KeyboardASV>
          <Container>
            <Page>
              <PageIndex color />
              <PageIndex color />
              <PageIndex color />
              <PageIndex />
              <PageIndex />
              <PageIndex />
            </Page>
            <PageNumber>3/6</PageNumber>
            <Title>
              <TitleIcon name="tag" />
              <TitleText>Dados Financeiros</TitleText>
            </Title>

            <PlanoItem item={adesao.item.plano} />

            <FormLabel>Dia de Vencimento</FormLabel>
            <Toogle>
              <ToogleButton
                selected={diaVenc === 1}
                onPress={event => {
                  this.handleToogle(event, 1);
                }}
              >
                <ToogleText>1</ToogleText>
              </ToogleButton>
              <ToogleButton
                selected={diaVenc === 5}
                onPress={event => {
                  this.handleToogle(event, 5);
                }}
              >
                <ToogleText>5</ToogleText>
              </ToogleButton>
              <ToogleButton
                selected={diaVenc === 10}
                onPress={event => {
                  this.handleToogle(event, 10);
                }}
              >
                <ToogleText>10</ToogleText>
              </ToogleButton>
              <ToogleButton
                selected={diaVenc === 15}
                onPress={event => {
                  this.handleToogle(event, 15);
                }}
              >
                <ToogleText>15</ToogleText>
              </ToogleButton>
              <ToogleButton
                selected={diaVenc === 20}
                onPress={event => {
                  this.handleToogle(event, 20);
                }}
              >
                <ToogleText>20</ToogleText>
              </ToogleButton>
            </Toogle>

            <FormLabel>Observação</FormLabel>
            <Form>
              <FormInputText
                value={obs}
                onChangeText={text => this.setState({ obs: text })}
                keyboardType="default"
                autoCapitalize="none"
                placeholder="..."
                autoCorrect={false}
                underlineColorAndroid="transparent"
                returnKeyType="send"
                ref={el => {
                  this.complementoInput = el;
                }}
                onSubmitEditing={this.handleNext}
              />
            </Form>

            <Footer>
              <FormButtonClose onPress={this.handleClose}>
                <FormButtonCloseIcon name="close" />
                <FormButtonCloseText>Voltar</FormButtonCloseText>
              </FormButtonClose>
              <FormButtonSubmit onPress={this.handleNext}>
                <FormButtonSubmitIcon name="check" />
                <FormButtonSubmitText>Continuar</FormButtonSubmitText>
              </FormButtonSubmit>
            </Footer>
          </Container>
        </KeyboardASV>
      </Backgroud>
    );
  }
}

const mapStateToProps = state => ({
  adesao: state.adesao,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AdesaoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Financeiro);
