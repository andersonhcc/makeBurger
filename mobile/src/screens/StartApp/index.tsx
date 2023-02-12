import React, { useState } from 'react';
import { Container, Header, ImageSlider, Main, Logo, LogoView } from './styles';
import { Text } from '../../components/Text';
import { useTheme } from 'styled-components';
import { copySlides } from '../../utils/copySlides';

import { useNavigation } from '@react-navigation/native';
import { SceneName } from '../../routes/scene-name';

import AppIntroSlider from 'react-native-app-intro-slider';


export function StartApp() {
  const [showHome] = useState(true);
  const navigation = useNavigation();
  const theme = useTheme();

  function handleItems({ item }) {
    return (
      <>
        {showHome &&
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
        }
      </>
    )
  }

  return (
    <>
        {showHome &&
      <AppIntroSlider
        renderItem={handleItems}
        data={copySlides}
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
}
    </>


  )
}