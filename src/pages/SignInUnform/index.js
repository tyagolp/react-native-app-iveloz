import React, { useRef } from 'react';
import {
  Text,
  KeyboardAvoidingView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Form } from '@unform/mobile';
import Background from '../../components/Background';
import Input from '../../components/Unform/Input';
import InputMask from '../../components/Unform/InputMask';

import styles from './styles';
import logo from '../../../assets/iVelozWhite.png';

export default function SignIn() {
  const formRef = useRef(null);
  function handleSubmit(data) {
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
  }
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
          <Form ref={formRef} onSubmit={handleSubmit}>
            <InputMask
              label="CPF"
              labelStyle={styles.label}
              name="cpf"
              type="cpf"
              style={styles.input}
              // keyboardType="number-pad"
              // autoCapitalize="none"
              // autoCorrect={false}
              // underlineColorAndroid="transparent"
            />
            <Input
              label="Senha"
              name="password"
              type="password"
              labelStyle={styles.label}
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
            />

            <TouchableOpacity
              onPress={() => formRef.current.submitForm()}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </Form>
        </View>
      </KeyboardAvoidingView>
    </Background>
  );
}
