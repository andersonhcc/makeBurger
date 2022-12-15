import React from 'react';
import { StatusBar } from 'react-native';

import { useTheme } from 'styled-components';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import {
  Container,
  Header,
  Main,
} from './styles';


export function SignIn() {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />

      <Header>

      </Header>

      <Main>

        <Input
          iconName='email-outline'
          placeholder='E-mail'
          placeholderTextColor={theme.colors.gray}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          style={{ marginBottom: 20, color: `${theme.colors.gray}` }}
        />

        <Input
          iconName='lock-outline'
          placeholder='Senha'
          autoCapitalize="none"
          keyboardType="default"
          placeholderTextColor={theme.colors.gray}
          secureTextEntry
          style={{ color: `${theme.colors.gray}` }}

        />

        <Button
          title='Entrar'
          backgroundColor={theme.colors.primary}
          style={{ marginTop: 50 }}
        />

      </Main>





    </Container>
  );
}