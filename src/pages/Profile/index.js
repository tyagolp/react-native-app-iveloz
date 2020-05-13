import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import Backgroud from '../../components/Background';

import {
  KeyboardASV,
  Container,
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
} from '../../styles/default';

import {
  Form,
  FormLabel,
  FormInputText,
  FormInputTextDisable,
  FormIcon,
  HeaderImagemContainer,
  HeaderImagem,
  HeaderImagemDefault,
  HeaderIconContainer,
  HeaderIcon,
} from './styles';
import { general } from '../../styles';

import * as UserActions from '../../store/modules/user/actions';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      oldPassword: '',
      password: '',
      confirmPassword: '',
      error:false,
      errorMsg:''
    };
  }

  handleSubmit = () => {
    const { setUserRequest } = this.props;
    const { oldPassword, password, confirmPassword } = this.state;
    setUserRequest({ oldPassword, password, confirmPassword });
  };

  handleClose = () => {
    const { navigation } = this.props;

    navigation.navigate('Main');
  };

  handleCloseModalLocal = () => {
    this.setState({ error:false, errorMsg:'' });
  };
  handleCloseModal = () => {
    const { setUserErrorOk } = this.props;
    setUserErrorOk();
  };

  handleTakePhoto = () => {
          try {
    ImagePicker.showImagePicker(
      {
        title: 'Como deseja obter a imagem',
        cancelButtonTitle: 'Cancelar',
        takePhotoButtonTitle: 'Tirar uma foto',
        chooseFromLibraryButtonTitle: 'Selecionar uma imagem',
        noData: true,
        mediaType: 'photo',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      },
      response => {
        if (response.didCancel) {
          console.tron.log('User cancelled image picker');
        } else if (response.error) {
          console.tron.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.tron.log('custom button: ', response.customButton);
        } else {
          console.tron.log('Response = ', response);
              const { setImageRequest } = this.props;
              const { uri, fileName: name, type } = response;
              setImageRequest({
                uri,
                name,
                type,
              });

        }
      }
    );
          } catch (error) {
              this.setState({error:true,errorMsg:error.messagem });
          }
  };

  render() {
    const { oldPassword, password, confirmPassword, error, errorMsg } = this.state;
    const { context } = this.props;
    return (
      <Backgroud>
        <KeyboardASV>
          <Container>
            {context.item.avatar ? (
              <HeaderImagemContainer style={general.formStyles.sombra}>
                <HeaderImagem source={{ uri: context.item.avatar.url }} />
                <HeaderIconContainer onPress={this.handleTakePhoto}>
                  <HeaderIcon name="camera" />
                </HeaderIconContainer>
              </HeaderImagemContainer>
            ) : (
              <HeaderImagemContainer
                style={[
                  general.formStyles.sombra,
                  { backgroundColor: '#fcfcfc' },
                ]}
              >
                <HeaderImagemDefault name="user" />
                <HeaderIconContainer onPress={this.handleTakePhoto}>
                  <HeaderIcon name="camera" />
                </HeaderIconContainer>
              </HeaderImagemContainer>
            )}

            <Title>
              <TitleIcon name="user" />
              <TitleText>Perfil</TitleText>
            </Title>
            <FormLabel>Nome</FormLabel>
            <FormInputTextDisable>{context.item.name}</FormInputTextDisable>
            <FormLabel>Email</FormLabel>
            <FormInputTextDisable>{context.item.email}</FormInputTextDisable>
            <FormLabel>CPF</FormLabel>
            <FormInputTextDisable>{context.item.cpf}</FormInputTextDisable>

            <FormLabel>Senha Antiga</FormLabel>
            <Form>
              <FormInputText
                value={oldPassword}
                onChangeText={text => this.setState({ oldPassword: text })}
                keyboardType="default"
                autoCapitalize="none"
                secureTextEntry
                maxLength={30}
                placeholder="******"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                returnKeyType="next"
                ref={el => {
                  this.oldPasswordInput = el;
                }}
                onSubmitEditing={() => this.passwordInput.focus()}
              />
              {oldPassword.length >= 6 ? (
                <FormIcon name="check" />
              ) : (
                <FormIcon />
              )}
            </Form>

            <FormLabel>Nova Senha</FormLabel>
            <Form>
              <FormInputText
                value={password}
                onChangeText={text => this.setState({ password: text })}
                keyboardType="default"
                autoCapitalize="none"
                secureTextEntry
                maxLength={30}
                placeholder="******"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                returnKeyType="next"
                ref={el => {
                  this.passwordInput = el;
                }}
                onSubmitEditing={() => this.confirmPasswordInput.focus()}
              />
              {password.length >= 6 ? <FormIcon name="check" /> : <FormIcon />}
            </Form>

            <FormLabel>Confirmar Senha</FormLabel>
            <Form>
              <FormInputText
                value={confirmPassword}
                onChangeText={text => this.setState({ confirmPassword: text })}
                keyboardType="default"
                autoCapitalize="none"
                secureTextEntry
                maxLength={30}
                placeholder="******"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                returnKeyType="send"
                ref={el => {
                  this.confirmPasswordInput = el;
                }}
                onSubmitEditing={this.handleSubmit}
              />
              {confirmPassword.length === password ? (
                <FormIcon name="check" />
              ) : (
                <FormIcon />
              )}
            </Form>

            <Footer>
              <FormButtonClose onPress={this.handleClose}>
                <FormButtonCloseIcon name="close" />
                <FormButtonCloseText>Voltar</FormButtonCloseText>
              </FormButtonClose>
              <FormButtonSubmit onPress={this.handleSubmit}>
                {context.loading ? (
                  <TitleIndication />
                ) : (
                  <FormButtonSubmitIcon name="check" />
                )}
                <FormButtonSubmitText>Salvar</FormButtonSubmitText>
              </FormButtonSubmit>
            </Footer>
          </Container>
        </KeyboardASV>
        <IvlzModel
          animationIn="slideInLeft"
          animationOut="slideOutRight"
          animationInTiming={500}
          isVisible={context.error}
        >
          <IvlzModelView>
            <IvlzModelText>{context.errorMessage}</IvlzModelText>
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
          isVisible={error}
        >
          <IvlzModelView>
            <IvlzModelText>{errorMsg}</IvlzModelText>
            <IvlzModelFooter>
              <IvlzModelButton title="OK" onPress={this.handleCloseModalLocal}>
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
  context: state.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
