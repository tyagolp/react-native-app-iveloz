import React, { PureComponent } from 'react';
// import changeNavigationBarColor from 'react-native-navigation-bar-color';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/Ionicons';
import * as AdesaoActions from '../../store/modules/adesao/actions';

import styles from './styles';
import { colors } from '../../styles';

class TakeCamera extends PureComponent {
  // componentDidMount() {
  // changeNavigationBarColor('#000', false);
  // }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);

      const { setImageRequest, navigation, adesao } = this.props;

      if (navigation.state.params.local === 1) {
        setImageRequest({
          uri: data.uri,
          name: 'backDoc.jpg',
          type: 'image/jpeg',
          local: 1,
        });
        navigation.navigate('PhotoBack');
      } else if (navigation.state.params.local === 2) {
        setImageRequest({
          uri: data.uri,
          name: 'frontDoc.jpg',
          type: 'image/jpeg',
          local: 2,
        });
        navigation.navigate('PhotoFront');
      }
    }
  };

  handleClose = () => {
    const { navigation } = this.props;

    if (navigation.state.params.local === 1) navigation.navigate('PhotoBack');
    else if (navigation.state.params.local === 2)
      navigation.navigate('PhotoFront');
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={camera => {
            this.camera = camera;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permissão para usar a camera',
            message: 'Nos precisamos de sua permissão para usar a sua camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={this.handleClose.bind(this)}
            style={styles.close}
          >
            <Icon name="ios-arrow-back" color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}
          >
            <Icon name="ios-radio-button-on" color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.nothing} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  adesao: state.adesao,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AdesaoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TakeCamera);
