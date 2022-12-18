import React from 'react';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

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
import { Alert } from 'react-native';
import { api } from '../../service/api';

interface Props {
  orderNumber: string;
  order_id: string;
}


export function FinishOrder() {
  
  const { params } = useRoute();
  const { orderNumber, order_id } = params as Props;
  const theme = useTheme();
  const navigation = useNavigation();

  async function handleFinishRequest(){
    try {
    const response = await api.put('/order/send', {
      order_id: order_id,
    })      
    navigation.navigate(SceneName.Dashboard)

    } catch (error) {
      
      console.log(error);
      Alert.alert('Não foi possível finalizar pedido');
    }
    
  
  
  }
  
  return (
    <Container>

      <Main>
        <WrapperIcon>
          <Done />
        </WrapperIcon>
        <Text size={30} fontFamily={theme.fonts.bold} color={theme.colors.primary}>Mesa {orderNumber}</Text>
        <Text size={30} fontFamily={theme.fonts.medium}>Pedido finalizado</Text>
        <Text size={15} color={theme.colors.gray}>O valor total foi: 200R$</Text>
        <Text size={15} color={theme.colors.gray}>E a quantidade de produtos: 10</Text>

        <WrapperButton>
        <Button
        backgroundColor={theme.colors.secondary}
        colorFont={theme.colors.background}
        onPress={handleFinishRequest}
        title="Finalizar pedido"
        icon={true}
        width={150}
        height={40}
        fontSize={14}
        fontTitle={theme.fonts.medium}
        />
      </WrapperButton>


      </Main>

  

    </Container>
  );
}