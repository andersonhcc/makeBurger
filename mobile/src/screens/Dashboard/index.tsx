import React from 'react';
import { StatusBar } from 'react-native';
import { useAuth } from '../../context/AuthContext';

import { Text } from '../../components/Text';
import { useTheme } from 'styled-components';

import { Button } from '../../components/Button';

import {
  Container,
  Header,
  WrapperImage,
  ImageProfile,
  WrapperIcon,
  IconExit,
  Main,
  ImageMain,
} from './styles';

export function Dashboard() {
  const { signOut, user } = useAuth();
  const theme = useTheme();

  return (
    <Container>

      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />

      <Header>
        <WrapperImage>
          <ImageProfile source={{ uri: `https://ui-avatars.com/api/?background=FFC859&name=${user.name}&color=101026` }} />
        </WrapperImage>

        <Text size={20}>Olá, {user.name} </Text>

        <WrapperIcon onPress={signOut}>
          <IconExit />
        </WrapperIcon>
      </Header>


      <Main>
        <Text
        size={20}
        >
          Que tal abrir um novo pedido?
        </Text>
        
        <ImageMain source={require('../../assets/images/Waiters.gif')} />

        <Button
          title="Abrir pedido"
          backgroundColor={theme.colors.primary}
          width={250}
          height={45}
          fontSize={16}
        />
      </Main>


    </Container>
  );
}