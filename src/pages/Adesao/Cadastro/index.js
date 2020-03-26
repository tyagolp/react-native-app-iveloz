import React, { Component } from 'react';
// import Geolocation from 'react-native-geolocation-service';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import dateFormat from 'dateformat';
import { TouchableOpacity } from 'react-native';
import api from '../../../services/api';
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
  TitleIndication,
  IvlzModel,
  IvlzModelFooter,
  IvlzModelView,
  IvlzModelText,
  IvlzModelButton,
  IvlzModelButtonText,
  Footer,
  FormButtonSubmit,
  FormButtonSubmitIcon,
  FormButtonSubmitText,
  FormButtonClose,
  FormButtonCloseIcon,
  FormButtonCloseText,
} from '../../../styles/default';

import {
  Form,
  FormLabel,
  FormInputMask,
  FormInputText,
  FormInputTextDisable,
  FormIcon,
  FormLoading,
} from './styles';

import * as AdesaoActions from '../../../store/modules/adesao/actions';

class Cadastro extends Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      cpf: '',
      rg: '',
      email: '',
      maxDate: new Date(new Date().getFullYear() - 18, 11, 31),
      minDate: new Date(1910, 0, 1),
      dataNasc: null,
      showDate: false,
      whatsapp: '',
      telefone: '',
      cep: '',
      numero: '',
      nomeInvalid: true,
      cpfInvalid: true,
      emailInvalid: true,
      whatsappInvalid: true,
      cepInvalid: true,
      numeroInvalid: true,
      endereco: null,
      complemento: '',
      loadCep: false,
      validErrorShow: false,
      validErrorMessage: null,
    };
  }

  handleNext = () => {
    const { setAdesaoRequest } = this.props;
    const {
      nome,
      cpf,
      rg,
      email,
      dataNasc,
      whatsapp,
      telefone,
      cep,
      numero,
      endereco,
      complemento,
      nomeInvalid,
      cpfInvalid,
      emailInvalid,
      whatsappInvalid,
      cepInvalid,
      numeroInvalid,
    } = this.state;

    if (nomeInvalid) {
      this.setState({
        validErrorShow: true,
        validErrorMessage: 'Preencha o nome corretamente!',
      });
      return;
    }
    if (dataNasc === null) {
      this.setState({
        validErrorShow: true,
        validErrorMessage: 'Preencha o data de nascimento!',
      });
      return;
    }
    if (cpfInvalid) {
      this.setState({
        validErrorShow: true,
        validErrorMessage: 'Preencha o cpf corretamente!',
      });
      return;
    }
    if (emailInvalid) {
      this.setState({
        validErrorShow: true,
        validErrorMessage: 'Preencha o email corretamente!',
      });
      return;
    }
    if (whatsappInvalid) {
      this.setState({
        validErrorShow: true,
        validErrorMessage: 'Preencha o whatsapp corretamente!',
      });
      return;
    }
    if (cepInvalid) {
      this.setState({
        validErrorShow: true,
        validErrorMessage: 'Preencha o cep corretamente!',
      });
      return;
    }
    if (numeroInvalid) {
      this.setState({
        validErrorShow: true,
        validErrorMessage: 'Preencha o cep corretamente!',
      });
      return;
    }

    setAdesaoRequest({
      nome,
      cpf,
      rg,
      email,
      dataNasc,
      whatsapp,
      telefone,
      cep,
      numero,
      endereco,
      complemento,
    });
  };

  handleClose = () => {
    const { navigation } = this.props;

    navigation.navigate('Main');
  };

  changeCep = async cep => {
    this.setState({ cep, endereco: null, cepInvalid: true }, async () => {
      if (cep.length === 9) {
        this.setState({ loadCep: true }, async () => {
          const cepFormat = cep.toString().replace('-', '');
          try {
            const result = await api.get(`correio/${cepFormat}`);
            if (result.data)
              this.setState({
                endereco: result.data,
                loadCep: false,
                cepInvalid: false,
              });
          } catch (error) {
            console.tron.warn(error);
          }
        });
      }
    });
  };

  validateEmail = email => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      this.setState({ email, emailInvalid: true });
      return false;
    }
    this.setState({ email, emailInvalid: false });
  };

  handleCloseModal = () => {
    const { setAdesaoErrorOk } = this.props;
    setAdesaoErrorOk();
  };

  handleCloseModalValid = () => {
    this.setState({ validErrorShow: false, validErrorMessage: null });
  };

  render() {
    const {
      nome,
      dataNasc,
      maxDate,
      minDate,
      cpf,
      rg,
      email,
      whatsapp,
      telefone,
      cep,
      numero,
      complemento,
      endereco,
      loadCep,
      showDate,
      nomeInvalid,
      cpfInvalid,
      emailInvalid,
      whatsappInvalid,
      cepInvalid,
      numeroInvalid,
      validErrorShow,
      validErrorMessage,
    } = this.state;
    const { adesao } = this.props;
    return (
      <Backgroud>
        <KeyboardASV>
          <Container>
            <Page>
              <PageIndex color />
              <PageIndex />
              <PageIndex />
              <PageIndex />
              <PageIndex />
              <PageIndex />
            </Page>
            <PageNumber>1/6</PageNumber>
            <Title>
              <TitleIcon name="user" />
              <TitleText>Dados Pessoais</TitleText>
            </Title>

            <>
              <FormLabel>Nome*</FormLabel>
              <Form>
                <FormInputText
                  value={nome}
                  onChangeText={text =>
                    this.setState({ nome: text, nomeInvalid: text.length < 5 })
                  }
                  keyboardType="default"
                  autoCapitalize="none"
                  maxLength={120}
                  placeholder="xxx"
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  returnKeyType="next"
                  onSubmitEditing={() => this.setState({ showDate: true })}
                />
                {!nomeInvalid ? <FormIcon name="check" /> : <></>}
              </Form>
              <FormLabel>Data Nascimento*</FormLabel>
              <Form>
                <TouchableOpacity
                  style={{ flex: 1 }}
                  onPress={() => this.setState({ showDate: true })}
                >
                  <FormInputText
                    value={dataNasc ? dateFormat(dataNasc, 'dd/mm/yyyy') : ''}
                    autoCapitalize="none"
                    editable={false}
                    maxLength={120}
                    placeholder="01/01/0001"
                    underlineColorAndroid="transparent"
                    returnKeyType="next"
                    ref={el => {
                      this.dateInput = el;
                    }}
                  />
                </TouchableOpacity>
                {showDate ? (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={dataNasc === null ? maxDate : dataNasc}
                    minimumDate={minDate}
                    maximumDate={maxDate}
                    locale="pt-BR"
                    mode="date"
                    display="spinner"
                    onChange={(event, value) => {
                      if (value) {
                        this.setState({ dataNasc: value, showDate: false });
                        this.cpfInput.getElement().focus();
                      }
                    }}
                  />
                ) : (
                  <></>
                )}
                {dataNasc !== null ? <FormIcon name="check" /> : <FormIcon />}
              </Form>
              <FormLabel>CPF*</FormLabel>
              <Form>
                <FormInputMask
                  type="cpf"
                  value={cpf}
                  onChangeText={text =>
                    this.setState({ cpf: text, cpfInvalid: text.length !== 14 })
                  }
                  autoCapitalize="none"
                  maxLength={14}
                  placeholder="999.999.999-99"
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  returnKeyType="next"
                  ref={el => {
                    this.cpfInput = el;
                  }}
                  onSubmitEditing={() => this.rgInput.focus()}
                />
                {!cpfInvalid ? <FormIcon name="check" /> : <></>}
              </Form>

              <FormLabel>RG</FormLabel>
              <Form>
                <FormInputText
                  value={rg}
                  onChangeText={text => this.setState({ rg: text })}
                  keyboardType="number-pad"
                  autoCapitalize="none"
                  maxLength={14}
                  placeholder="99.999.999-99"
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  returnKeyType="next"
                  ref={el => {
                    this.rgInput = el;
                  }}
                  onSubmitEditing={() => this.emailInput.focus()}
                />
                {email.length > 10 ? <FormIcon name="check" /> : <FormIcon />}
              </Form>

              <FormLabel>E-mail*</FormLabel>
              <Form>
                <FormInputText
                  value={email}
                  onChangeText={text => this.validateEmail(text)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholder="email@email.com"
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  returnKeyType="next"
                  ref={el => {
                    this.emailInput = el;
                  }}
                  onSubmitEditing={() =>
                    this.whatsappInput.getElement().focus()
                  }
                />
                {!emailInvalid ? <FormIcon name="check" /> : <></>}
              </Form>

              <FormLabel>Whatsapp*</FormLabel>
              <Form>
                <FormInputMask
                  type="cel-phone"
                  value={whatsapp}
                  onChangeText={text =>
                    this.setState({
                      whatsapp: text,
                      whatsappInvalid: text.length !== 15,
                    })
                  }
                  keyboardType="number-pad"
                  autoCapitalize="none"
                  placeholder="(11) 99999-9999"
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  returnKeyType="next"
                  ref={el => {
                    this.whatsappInput = el;
                  }}
                  onSubmitEditing={() => this.phoneInput.getElement().focus()}
                />
                {!whatsappInvalid ? <FormIcon name="check" /> : <></>}
              </Form>
              <FormLabel>Telefonel</FormLabel>
              <Form>
                <FormInputMask
                  type="cel-phone"
                  value={telefone}
                  onChangeText={text => this.setState({ telefone: text })}
                  keyboardType="number-pad"
                  autoCapitalize="none"
                  placeholder="(11) 99999-9999"
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  returnKeyType="next"
                  ref={el => {
                    this.phoneInput = el;
                  }}
                  onSubmitEditing={() => this.cepInput.getElement().focus()}
                />
                {telefone.length >= 14 ? (
                  <FormIcon name="check" />
                ) : (
                  <FormIcon />
                )}
              </Form>

              <FormLabel>CEP*</FormLabel>
              <Form>
                <FormInputMask
                  type="zip-code"
                  value={cep}
                  onChangeText={text => this.changeCep(text)}
                  autoCapitalize="none"
                  maxLength={9}
                  placeholder="99999-999"
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  returnKeyType="next"
                  ref={el => {
                    this.cepInput = el;
                  }}
                  onSubmitEditing={() => this.numeroInput.focus()}
                />
                {!loadCep ? (
                  !cepInvalid ? (
                    <FormIcon name="check" />
                  ) : (
                    <></>
                  )
                ) : (
                  <FormLoading />
                )}
              </Form>

              {endereco ? (
                <>
                  <FormLabel>Endereço</FormLabel>
                  <Form>
                    <FormInputTextDisable>
                      {`${endereco.logradouro_tipo} ${endereco.logradouro_titulo} ${endereco.logradouro}`}
                    </FormInputTextDisable>
                    <FormIcon name="check" />
                  </Form>
                  <FormLabel>Bairro</FormLabel>
                  <Form>
                    <FormInputTextDisable>
                      {endereco.bairro}
                    </FormInputTextDisable>
                    <FormIcon name="check" />
                  </Form>
                  <FormLabel>Cidade</FormLabel>
                  <Form>
                    <FormInputTextDisable>
                      {endereco.cidade}
                    </FormInputTextDisable>
                    <FormIcon name="check" />
                  </Form>
                  <FormLabel>Estado</FormLabel>
                  <Form>
                    <FormInputTextDisable>
                      {endereco.estado}
                    </FormInputTextDisable>
                    <FormIcon name="check" />
                  </Form>
                </>
              ) : null}

              <FormLabel>Numero*</FormLabel>
              <Form>
                <FormInputText
                  value={numero}
                  onChangeText={text =>
                    this.setState({
                      numero: text,
                      numeroInvalid: text.length === 0,
                    })
                  }
                  keyboardType="decimal-pad"
                  maxLength={20}
                  autoCapitalize="none"
                  placeholder="999"
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  returnKeyType="next"
                  ref={el => {
                    this.numeroInput = el;
                  }}
                  onSubmitEditing={() => this.complementoInput.focus()}
                />
                {!numeroInvalid ? <FormIcon name="check" /> : <></>}
              </Form>

              <FormLabel>Complemento</FormLabel>
              <Form>
                <FormInputText
                  value={complemento}
                  onChangeText={text => this.setState({ complemento: text })}
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
            </>

            <Footer>
              <FormButtonClose onPress={this.handleClose}>
                <FormButtonCloseIcon name="close" />
                <FormButtonCloseText>Voltar</FormButtonCloseText>
              </FormButtonClose>
              <FormButtonSubmit onPress={this.handleNext}>
                {adesao.loading ? (
                  <TitleIndication />
                ) : (
                  <FormButtonSubmitIcon name="check" />
                )}
                <FormButtonSubmitText>Continuar</FormButtonSubmitText>
              </FormButtonSubmit>
            </Footer>
          </Container>
        </KeyboardASV>
        <IvlzModel
          animationIn="slideInLeft"
          animationOut="slideOutRight"
          animationInTiming={500}
          isVisible={adesao.error}
        >
          <IvlzModelView>
            <IvlzModelText>{adesao.errorMessage}</IvlzModelText>
            <IvlzModelFooter>
              <IvlzModelButton title="OK" onPress={this.handleCloseModal}>
                <IvlzModelButtonText>Fechar</IvlzModelButtonText>
              </IvlzModelButton>
            </IvlzModelFooter>
          </IvlzModelView>
        </IvlzModel>
        <IvlzModel
          animationIn="slideInLeft"
          animationOut="slideOutRight"
          animationInTiming={500}
          isVisible={validErrorShow}
        >
          <IvlzModelView>
            <IvlzModelText>{validErrorMessage}</IvlzModelText>
            <IvlzModelFooter>
              <IvlzModelButton title="OK" onPress={this.handleCloseModalValid}>
                <IvlzModelButtonText>Fechar</IvlzModelButtonText>
              </IvlzModelButton>
            </IvlzModelFooter>
          </IvlzModelView>
        </IvlzModel>
      </Backgroud>
    );
  }
}

const mapStateToProps = state => ({
  adesao: state.adesao,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AdesaoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);
