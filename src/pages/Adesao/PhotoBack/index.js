import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';
import {
  Container,
  Page,
  PageIndex,
  PageNumber,
  Title,
  TitleText,
  TitleIcon,
  Footer,
  IvlzModel,
  IvlzModelFooter,
  IvlzModelView,
  IvlzModelText,
  IvlzModelButton,
  IvlzModelButtonText,
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

class PhotoBack extends Component {
  handleNext = () => {
    const { navigation } = this.props;
    navigation.navigate('PhotoFront');
  };

  handleClose = () => {
    const { navigation } = this.props;

    navigation.navigate('Financeiro');
  };

  handleTakePhoto = () => {
    ImagePicker.showImagePicker(
      {
        title: 'Como deseja obter a imagem',
        cancelButtonTitle: 'Cancelar',
        takePhotoButtonTitle: 'Tirar uma foto',
        chooseFromLibraryButtonTitle: 'Selecionar uma imagem',
        noData: true,
        mediaType: 'photo',
      },
      response => {
        if (response.didCancel) {
        } else if (response.error) {
        } else if (response.customButton) {
        } else {

          const { setImageRequest } = this.props;
          const { uri, fileName: name, type } = response;

          ImageResizer.createResizedImage(uri, 600, 800, 'JPEG', 100).then(resizedImageUri => {
            setImageRequest({
              uri: resizedImageUri.uri,
              name,
              type,
              local: 1,
            });
          }).catch((err) => {
            const { setImageError } = this.props;
            setImageError({data: {description:'Falha ao reduzir o tamanho do arquivo!'}})
            // Oops, something went wrong. Check that the filename is correct and
            // inspect err to get more details.
          });
        }
      }
    );
  };

  handleCloseModal = () => {
    const { setAdesaoErrorOk } = this.props;
    setAdesaoErrorOk();
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
            <PageIndex />
            <PageIndex />
          </Page>
          <PageNumber>4/6</PageNumber>
          <Title>
            <TitleIcon name="user" />
            <TitleText>Foto do verso do RG/CNH</TitleText>
          </Title>

          <Dock onPress={this.handleTakePhoto}>
            {adesao.item.photoBack ? (
              <DockImage source={{ uri: adesao.item.photoBack.url }} />
            ) : (
              <DockImageNull>
                <DockImageNullIcon name="camera" />
              </DockImageNull>
            )}
          </Dock>
          <Footer>
            <FormButtonClose onPress={this.handleClose}>
              <FormButtonCloseIcon name="close" />
              <FormButtonCloseText>Voltar</FormButtonCloseText>
            </FormButtonClose>
            {adesao.item.photoBack ? (
              <FormButtonSubmit onPress={this.handleNext}>
                <FormButtonSubmitIcon name="check" />
                <FormButtonSubmitText>Continuar</FormButtonSubmitText>
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

export default connect(mapStateToProps, mapDispatchToProps)(PhotoBack);
