import React, { Component } from 'react';
import { BackHandler } from 'react-native';
// import changeNavigationBarColor from 'react-native-navigation-bar-color';

import RNFS from 'react-native-fs';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Container,
  Signature,
  Footer,
  FormButtonFake,
  FormButtonSubmit,
  FormButtonClear,
  FormButtonClose,
  FormButtonIcon,
} from './styles';

import * as AdesaoActions from '../../store/modules/adesao/actions';

class TakeSignature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragged: false,
      viewMode: 'landscape',
    };
  }

  UNSAFE_componentWillMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick
    );
  }

  handleBackButtonClick = () => {
    this.setState({ viewMode: 'portrait' }, () => {
      const { navigation } = this.props;
      navigation.goBack();
    });
    return true;
  };

  handleClose = () => {
    this.setState({ viewMode: 'portrait' }, () => {
      const { navigation } = this.props;
      navigation.navigate('Signatute');
    });
  };

  saveSign = () => {
    this.refs.sign.saveImage();
  };

  resetSign = () => {
    this.refs.sign.resetImage();
    this.setState({ dragged: false });
  };

  onSaveEvent = async result => {
    const { navigation, setImageRequest } = this.props;
    this.setState({ viewMode: 'portrait' }, async () => {
      const imagePath = `${RNFS.CachesDirectoryPath}/signature.jpg`;

      RNFS.writeFile(imagePath, result.encoded, 'base64').then(() => {
        setImageRequest({
          uri: `file://${imagePath}`,
          name: 'signature.jpg',
          type: 'image/jpeg',
          local: 3,
          blob: true,
        });
        navigation.navigate('Signatute');
      });
    });
    // result.encoded - for the base64 encoded png
    // result.pathName - for the file path name
  };

  onDragEvent = () => {
    this.setState({ dragged: true });
  };

  render() {
    const { dragged, viewMode } = this.state;
    return (
      <Container>
        <Signature
          ref="sign"
          onSaveEvent={this.onSaveEvent}
          onDragEvent={this.onDragEvent}
          saveImageFileInExtStorage={false}
          showNativeButtons={false}
          showTitleLabel={false}
          viewMode={viewMode}
        />
        <Footer>
          <FormButtonClose onPress={this.handleClose}>
            <FormButtonIcon name="close" />
          </FormButtonClose>
          {dragged ? (
            <>
              <FormButtonClear onPress={this.resetSign}>
                <FormButtonIcon name="trash-o" />
              </FormButtonClear>
              <FormButtonSubmit visible={dragged} onPress={this.saveSign}>
                <FormButtonIcon name="check" />
              </FormButtonSubmit>
            </>
          ) : (
            <>
              <FormButtonFake>
                <FormButtonIcon name="check" />
              </FormButtonFake>
              <FormButtonFake>
                <FormButtonIcon name="check" />
              </FormButtonFake>
            </>
          )}
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  adesao: state.adesao,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AdesaoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TakeSignature);
