import React, { useState } from 'react';
import { Container, Header, ImageSlider, Main, Logo, LogoView } from './styles';
import { Text } from '../../components/Text';
import { useTheme } from 'styled-components';

import { useNavigation } from '@react-navigation/native';
import { SceneName } from '../../routes/scene-name';

import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: '1',
    title: 'Cadastre seus pedidos.',
    description: 'De forma rápida e simples!',
    image: require('../../assets/images/one.png'),
  },
  {
    key: '2',
    title: 'Pedido chega na cozinha.',
    description: 'Será preparado de forma saborosa!',
    image: require('../../assets/images/two.png'),
  },

  {
    key: '3',
    title: 'Chega ao cliente.',
    description: 'Satisfação total com um hamburgão!',
    image: require('../../assets/images/three.png'),
  },
]

export function StartApp() {
  const [showHome, setShowHome] = useState(false);
  const navigation = useNavigation();
  const theme = useTheme();

  function handleItems({ item }) {
    return (
      <Container >
        <LogoView>
          <Logo source={require('../../assets/images/Logo.png')} />

        </LogoView>
        <Header>


          <ImageSlider
            source={item.image}
            style={{
              resizeMode: 'cover',
            }}

          />

        </Header>

        <Main>
          <Text size={24} fontFamily={theme.fonts.bold}>{item.title}</Text>

          <Text size={18} color={theme.colors.gray}>{item.description}</Text>
        </Main>

      </Container>
    )
  }

  return (
    <AppIntroSlider
      renderItem={handleItems}
      data={slides}
      indicatorStyle={'white'}
      dotStyle={{
        backgroundColor: '#1D1D2E',

      }}
      activeDotStyle={{
        backgroundColor: 'white',
        width: 30,

      }}
      renderNextButton={() => <Text size={20} style={{ marginTop: 8 }}>Próximo</Text>}
      renderDoneButton={() => <Text size={20} style={{ marginTop: 8 }}>Entrar</Text>}
      renderPrevButton={() => <Text size={20} style={{ marginTop: 8 }}>Voltar</Text>}
      showPrevButton={true}
      showNextButton={true}
      onDone={() => { navigation.navigate(SceneName.SignIn) }}

    />

  )
}