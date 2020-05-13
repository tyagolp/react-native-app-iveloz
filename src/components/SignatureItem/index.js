import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';

import SignatureCapture from 'react-native-signature-capture';

import styles from './styles';

export default class SignatureItem extends Component {
  saveSign() {
    const pathImage = this.refs.sign.saveImage();
  }

  resetSign() {
    this.refs.sign.resetImage();
  }

  onSaveEvent(result) {
    // result.encoded - for the base64 encoded png
    // result.pathName - for the file path name
  }

  onDragEvent() {
    // This callback will be called when the user enters signature
  }

  render() {
    return (
      <View style={styles.component}>
        <SignatureCapture
          style={[{flex: 1}, styles.signature]}
          ref="sign"
          onSaveEvent={this.onSaveEvent}
          onDragEvent={this.onDragEvent}
          saveImageFileInExtStorage={false}
          showNativeButtons={false}
          showTitleLabel={false}
          viewMode="portrait"
        />
        <View style={styles.buttonComponent}>
          <TouchableHighlight
            style={[styles.button, styles.buttonComponentItem]}
            onPress={() => {
              this.saveSign();
            }}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={[styles.button, styles.buttonComponentItem]}
            onPress={() => {
              this.resetSign();
            }}>
            <Text style={styles.buttonText}>Limpar</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
