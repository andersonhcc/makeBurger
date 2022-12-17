import React, { useState } from 'react';
import { Modal, Alert } from 'react-native';

import { Text } from '../../components/Text';
import { Button } from '../../components/Button';

import { useTheme } from 'styled-components';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { SceneName } from '../../routes/scene-name';

import { api } from '../../service/api';

import {
  Container,
  Header,
  Main,
  ButtonCancel,
  IconDelete,
  BoxNameIcon,
  ButtonFoods,
  Foods,
  IconFeather,
  IconMaterial,
  WrapperOptions,
  WrapperQuantity,
  InputQuantity,
  InputMore,
  Footer,
} from './styles';

interface Props {
  orderNumber: string;
  order_id: string;
}

export function OrderDetails() {
  const theme = useTheme();
  const { params } = useRoute();
  const navigation = useNavigation();
  const { orderNumber, order_id } = params as Props;
  const [visible, setVisible] = useState(false);


  async function handleDeleteOrder() {
    try {
    const response = await api.delete('/order', {
      params: {
        order_id: order_id,
      }
    })
      navigation.goBack();
    } catch (error) {
        console.log(error);
        Alert.alert("Não foi possível fechar a mesa.")
    }
  }

  function finishRequest(){
    navigation.navigate(SceneName.FinishOrder);
  }

  return (
    <Container>
      <Header>

        <Text size={22}>Aberta a mesa {orderNumber}</Text>

        <ButtonCancel onPress={handleDeleteOrder}>
          <IconDelete name="trash" />
        </ButtonCancel>

      </Header>


      <Main>
        <WrapperOptions>
          <Text size={18}>Selecione a categoria do produto 👇🏼</Text>

          <ButtonFoods onPress={() => setVisible(true)}>
            <BoxNameIcon>
              <IconMaterial name='restaurant-menu' />
              <Foods>Burger</Foods>
            </BoxNameIcon>
            <IconFeather name="chevron-down" />
          </ButtonFoods>
        </WrapperOptions>


        <WrapperOptions>
          <Text size={18}>Selecione qual é o produto 🍔 </Text>

          <ButtonFoods onPress={() => setVisible(true)}>
            <BoxNameIcon>
              <IconMaterial name='fastfood' />
              <Foods>X-Tudo</Foods>
            </BoxNameIcon>
            <IconFeather name="chevron-down" />
          </ButtonFoods>
        </WrapperOptions>


        <WrapperQuantity>
          <Text size={18}>Quantidade : </Text>
          <InputQuantity
            keyboardType='numeric'

          />
        </WrapperQuantity>

        <InputMore>
          <Text size={22}>+</Text>
        </InputMore>
      </Main>

      <Footer>
        <Button 
          title="Finalizar pedido"
          onPress={finishRequest}
          backgroundColor={theme.colors.primary}
          width={200}
          fontSize={17}
          icon={true}
        />
      </Footer>

      <Modal
        visible={false}
        presentationStyle="pageSheet"
        animationType='fade'
        onRequestClose={() => setVisible(false)}
      >

      </Modal>

    </Container>
  );
}