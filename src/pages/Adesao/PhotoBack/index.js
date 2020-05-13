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
          setImageRequest({
            uri,
            name,
            type,
            local: 1,
          });
        }
      }
    );
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
