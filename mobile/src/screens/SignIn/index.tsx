import React from 'react';
import { StatusBar } from 'react-native';

import { useTheme } from 'styled-components';

import { Button } from '../../components/Button';

import { Container } from './styles';


export function SignIn() {
  const theme = useTheme();
 
  return (
    <Container>
      <StatusBar 
      barStyle='light-content'
      translucent
      backgroundColor='transparent'
      />
{/* '
    <Button 
      title='Entrar'
      backgroundColor={theme.colors.primary}
      style={{marginTop: 50}}
    />' */}


    </Container>
  );
}