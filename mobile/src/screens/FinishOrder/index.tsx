import React from 'react';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import { SceneName } from '../../routes/scene-name';

import { IRequest } from '../OrderDetails';

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
  requests: IRequest[];
}


export function FinishOrder() {
  
  const { params } = useRoute();
  const { orderNumber, order_id, requests } = params as Props;
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

  function sumProducts(){
    console.log(requests);
    
    let {accs,amounts} = {accs:0,amounts:0}
    requests.map(it=>{
      if(it.acc) accs+=it.acc;
      if(it.amount) amounts+=Number(it.amount)
    })
    return {accs,amounts}
  }

  
  
  return (
    <Container>

      <Main>
        <WrapperIcon>
          <Done />
        </WrapperIcon>
        <Text size={30} fontFamily={theme.fonts.bold} color={theme.colors.primary}>Mesa {orderNumber}</Text>
        <Text size={30} fontFamily={theme.fonts.medium}>Finalizar Mesa</Text>
        <Text size={15} color={theme.colors.attention}>O valor total foi: {sumProducts()?.accs||''} R$
        </Text>
        <Text size={15} color={theme.colors.gray}>E a quantidade de produtos: {sumProducts()?.amounts||''} </Text>

        <WrapperButton>
        <Button
        backgroundColor={theme.colors.secondary}
        colorFont={theme.colors.background}
        onPress={handleFinishRequest}
        title="Finalizar mesa"
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