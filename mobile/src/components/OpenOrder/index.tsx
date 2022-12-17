import React, { useState } from 'react';
import { Pressable } from 'react-native';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { SceneName } from '../../routes/scene-name';

import { Text } from '../Text'
import { Button } from '../Button';

import {
  Container,
  InputOrder,
  Main,
  WrapperInput,
  IconX,
  WrapperTitle,
  WrapperButton,
} from './styles';


interface IOpenOrder {
  setVisible: (value: boolean) => void;
}


export function OpenOrder({ setVisible }: IOpenOrder) {
  const theme = useTheme();
  const [numberOrder, setNumberOrder] = useState('');
  const navigation = useNavigation();


function handleDetailsOrder(){
  if(numberOrder === ''){
    return;
  }
  
  navigation.navigate(SceneName.OrderDetails, {orderNumber: numberOrder })
}

  return (
    <Container>
      <Main>
        <WrapperTitle>
          <Text size={20}>Novo pedido</Text>
          <Pressable
            onPress={() => setVisible(false)}
          >
            <IconX name="x" />
          </Pressable>
        </WrapperTitle>

        <WrapperInput>
          <InputOrder
            placeholder='Número da mesa'
            placeholderTextColor={theme.colors.white}
            keyboardType="numeric"
            value={numberOrder}
            onChangeText={setNumberOrder}
          />
        </WrapperInput>

        <WrapperButton>
        <Button 
          title="Abrir mesa"
          backgroundColor={theme.colors.primary}
          onPress={handleDetailsOrder}
          width={200}
          height={40}
          fontSize={18}
        />
        </WrapperButton>

  

      </Main>

    </Container>
  );
}