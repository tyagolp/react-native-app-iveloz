import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ImagePicker from 'react-native-image-picker';
import {
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
import { Dock, DockImage, DockImageNull, DockImageNullIcon } from './styles';

import Backgroud from '../../../components/Background';

import * as AdesaoActions from '../../../store/modules/adesao/actions';

class Assinatura extends Component {
  handleNext = () => {
    const { navigation, setFinalRequest, adesao } = this.props;
    setFinalRequest(adesao.item);
    // navigation.navigate('Final');
  };

  handleClose = () => {
    const { navigation } = this.props;
    navigation.navigate('PhotoFront');
  };

  handleTakePhoto = () => {
    ImagePicker.showImagePicker(
      {
        title: 'Como deseja obter a imagem',
        cancelButtonTitle: 'Cancelar',
        takePhotoButtonTitle: 'Tirar uma foto',
        chooseFromLibraryButtonTitle: 'Selecionar uma imagem',
        customButtons: [{ name: 'customOptionKey', title: 'Escrever agora' }],
        noData: true,
        mediaType: 'photo',
      },
      response => {
        if (response.didCancel) {
        } else if (response.error) {
        } else if (response.customButton) {
          const { navigation } = this.props;
          navigation.navigate('TakeSignarute');
        } else {

          const { setImageRequest } = this.props;
          const { uri, fileName: name, type } = response;
          setImageRequest({
            uri,
            name,
            type,
            local: 3,
          });
        }
      }
    );
  };

  handleCloseModal = () => {
    const { setFinalErrorOk } = this.props;
    setFinalErrorOk();
  };

  render() {
    const { adesao } = this.props;
    return (
      <Backgroud>
        <Container>
          <Page>
            <PageIndex color />
            <PageIndex color />
            <PageIndex color />
            <PageIndex color />
            <PageIndex color />
            <PageIndex color />
            <PageIndex />
          </Page>
          <PageNumber>6/6</PageNumber>
          <Title>
            <TitleIcon name="user" />
            <TitleText>Assinatura</TitleText>
          </Title>
          <Dock
            onPress={() => {
              this.handleTakePhoto();
            }}
          >
            {adesao.item.signature ? (
              <DockImage source={{ uri: adesao.item.signature.url }} />
            ) : (
              <DockImageNull>
                <DockImageNullIcon name="pencil" />
              </DockImageNull>
            )}
          </Dock>

          <Footer>
            <FormButtonClose onPress={this.handleClose}>
              <FormButtonCloseIcon name="close" />
              <FormButtonCloseText>Voltar</FormButtonCloseText>
            </FormButtonClose>
            {adesao.item.signature ? (
              <FormButtonSubmit onPress={this.handleNext}>
                {adesao.loading ? (
                  <TitleIndication />
                ) : (
                  <FormButtonSubmitIcon name="check" />
                )}
                <FormButtonSubmitText>Concluir</FormButtonSubmitText>
              </FormButtonSubmit>
            ) : null}
          </Footer>
        </Container>
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
      </Backgroud>
    );
  }
}

const mapStateToProps = state => ({
  adesao: state.adesao,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AdesaoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Assinatura);
