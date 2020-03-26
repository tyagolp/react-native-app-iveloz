import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  ActivityIndicator,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import * as LoginActions from '../../store/modules/login/actions';
// import { requestLocationPermission } from '../../services/Permissions';

import Background from '../../components/Background';
import styles from './styles';
import logo from '../../../assets/iVelozWhite.png';
import { colors } from '../../styles';

class SignIn extends Component {
  constructor(props) {
    super(props);
    /* this.propTypes = {
      navigation: PropTypes.shape({
        navigate: PropTypes.func,
      }).isRequired,
    }; */
    this.state = {
      cpf: '391.485.758-79',
      password: '123456',
    };
  }

  /* async componentWillMount() {
    await requestLocationPermission();
  } */

  signIn = async () => {
    const { cpf, password } = this.state;
    const { getLoginRequest } = this.props;
    getLoginRequest({ cpf, password });
  };

  Register = async () => {
    const { navigation } = this.props;
    navigation.navigate('Register');
  };

  render() {
    const { cpf, password } = this.state;
    const { error, loading } = this.props.login;

    return (
      <Background>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={styles.container}
        >
          <View>
            <View style={styles.viewLogo}>
              <Image source={logo} style={styles.logo} />
            </View>

            <Text style={styles.label}>CPF</Text>
            <TextInputMask
              type="cpf"
              value={cpf}
              onChangeText={text => this.setState({ cpf: text })}
              style={styles.input}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              // autoFocus
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput
              value={password}
              onChangeText={text => this.setState({ password: text })}
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              returnKeyType="send"
              ref={el => {
                this.passwordInput = el;
              }}
              onSubmitEditing={() => this.signIn}
            />

            <TouchableOpacity onPress={this.signIn} style={styles.button}>
              {loading ? (
                <ActivityIndicator color={colors.primary} size={18} />
              ) : null}
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={this.Register} style={styles.button}>
              <Text style={styles.buttonText}>Registrar-se</Text>
              </TouchableOpacity> */}

            {error ? (
              <Text style={styles.label}>Usuario não encontrado!</Text>
            ) : null}
          </View>
        </KeyboardAvoidingView>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
