import React from 'react';
import { StatusBar } from 'react-native';
import { useAuth } from '../../context/AuthContext';

import { Text } from '../../components/Text';
import { useTheme } from 'styled-components';


import {
  Container,
  Header,
  WrapperImage,
  ImageProfile,
  WrapperIcon,
  IconExit,
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

    
      <ImageMain source={require('../../assets/images/cadastrarpedido.png')}/>


    </Container>
  );
}