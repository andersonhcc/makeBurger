import React, { useState } from 'react';
import { Pressable, Alert } from 'react-native';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { SceneName } from '../../routes/scene-name';

import { api } from '../../service/api';

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
  visible: boolean;
  setVisible: (value: boolean) => void;
}


export function OpenOrder({ setVisible, visible }: IOpenOrder) {
  const theme = useTheme();
  const [numberOrder, setNumberOrder] = useState('');
  const navigation = useNavigation();


async function handleDetailsOrder(){
  if(numberOrder === ''){
    return;
  }

  try {
    const response = await api.post('/order', {
      table: Number(numberOrder),
    })
    setVisible(false)
    navigation.navigate(SceneName.OrderDetails, {orderNumber: numberOrder, order_id: response.data.id })

  } catch (error) {
      console.log(error);
      Alert.alert('Abrir mesa', 'Não foi possível abrir a mesa, tente novamente.')
  }

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