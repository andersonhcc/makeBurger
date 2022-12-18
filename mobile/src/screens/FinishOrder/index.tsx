import React from 'react';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { SceneName } from '../../routes/scene-name';

import { Button } from '../../components/Button';
import { Text } from '../../components/Text';

import Done from '../../assets/images/Done.svg';

import {
  Container,
  Main,
  WrapperIcon,
  WrapperButton,
} from './styles';


export function FinishOrder() {
  const theme = useTheme();
  const navigation = useNavigation();
  
  return (
    <Container>

      <Main>
        <WrapperIcon>
          <Done />
        </WrapperIcon>

        <Text size={30} fontFamily={theme.fonts.medium}>Mesa finalizada</Text>
        <Text size={15} color={theme.colors.gray}>Agora é só encaminhar para o pagamento do valor de 200R$</Text>

        <WrapperButton>
        <Button
        backgroundColor={theme.colors.primary}
        onPress={() => navigation.navigate(SceneName.Dashboard)}
        title="Voltar"
        width={100}
        height={40}
        fontSize={15}
        />
      </WrapperButton>


      </Main>

  

    </Container>
  );
}