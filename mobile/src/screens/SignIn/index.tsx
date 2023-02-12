import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import { useTheme } from 'styled-components';
import { useAuth } from '../../context/AuthContext';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import {
  Container,
  Logo,
} from './styles';

export function SignIn() {
  const theme = useTheme();
  const { signIn, loadingAuth } = useAuth();
  const [email, setEmail] = useState('teste@teste.com');
  const [password, setPassword] = useState('123123');

  async function handleLogin(){
    if(email === '' || password === ''){
      return;
    }
    await signIn({email, password});
  }

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />

      <Logo source={require('../../assets/images/Logo.png')} />

      <Input
        iconName='email-outline'
        placeholder='E-mail'
        placeholderTextColor={theme.colors.gray}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        style={{ marginBottom: 20, color: `${theme.colors.gray}` }}
        value={email}
        onChangeText={setEmail}
      />

      <Input
        iconName='lock-outline'
        placeholder='Senha'
        autoCapitalize="none"
        keyboardType="default"
        placeholderTextColor={theme.colors.gray}
        secureTextEntry
        style={{ color: `${theme.colors.gray}` }}
        value={password}
        onChangeText={setPassword}

      />

      <Button
        title='Entrar'
        backgroundColor={theme.colors.primary}
        style={{ marginTop: 30 }}
        onPress={handleLogin}
        isLoading={loadingAuth}
      />

    </Container>
  );
}