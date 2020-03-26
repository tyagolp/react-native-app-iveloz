import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import api from '~/services/api';

import {
  View,
  Text,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';

import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../components/Background';

import styles from './styles';
// import img from '../../../assets/iVelozWhite.png';

export default class SignIn extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    name: '',
    docUser: '',
    email: '',
    password: '',
    passwordConfim: '',
    loading: false,
    error: false,
    message: '',
  };

  componentDidMount() {
    this.setState({ loading: true });
  }

  signIn = async () => {
    const { name, docUser, email, password, passwordConfim } = this.state;
    const { navigation } = this.props;

    try {
      if (password !== passwordConfim) {
        this.setState({
          loading: false,
          error: true,
          message: 'Confirmação de senha invalida',
        });
        return;
      }

      // this.setState({ loading: false });
      // await this.checkUserExists(docUser);

      navigation.navigate('Login');
    } catch (error) {
      this.setState({ loading: false, error: true });
    }
  };

  render() {
    const {
      name,
      docUser,
      email,
      password,
      passwordConfim,
      loading,
      error,
    } = this.state;
    return (
      <Background>
        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={styles.container}
          >
            <View style={styles.viewTitle}>
              <Icon name="person-add" size={26} color="#fff" />
              <Text style={styles.title}>Cadastro</Text>
            </View>

            <Text style={styles.label}>Apelido</Text>
            <TextInput
              value={name}
              onChangeText={text => this.setState({ name: text })}
              style={styles.input}
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              // autoFocus
              returnKeyType="next"
              onSubmitEditing={() => this.cpfInput.getElement().focus()}
            />

            <Text style={styles.label}>CPF</Text>
            <TextInputMask
              type="cpf"
              value={docUser}
              onChangeText={text => this.setState({ docUser: text })}
              style={styles.input}
              keyboardType="numeric"
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              returnKeyType="next"
              ref={el => {
                this.cpfInput = el;
              }}
              onSubmitEditing={() => this.emailInput.focus()}
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
              value={email}
              onChangeText={text => this.setState({ email: text })}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              returnKeyType="next"
              ref={el => {
                this.emailInput = el;
              }}
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
              returnKeyType="next"
              ref={el => {
                this.passwordInput = el;
              }}
              onSubmitEditing={() => this.passwordConfirmInput.focus()}
            />

            <Text style={styles.label}>Confirmar Senha</Text>
            <TextInput
              value={passwordConfim}
              onChangeText={text => this.setState({ passwordConfim: text })}
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              returnKeyType="send"
              ref={el => {
                this.passwordConfirmInput = el;
              }}
              onSubmitEditing={() => this.signIn}
            />

            <TouchableOpacity onPress={this.signIn} style={styles.button}>
              <Icon name="check" size={20} style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </Background>
    );
  }
}
