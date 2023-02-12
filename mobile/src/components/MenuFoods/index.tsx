import React from 'react';
import { FlatList } from 'react-native';

import { Text } from '../Text';

import { useTheme } from 'styled-components';

import { IProductSelected } from '../../screens/OrderDetails/types';

import {
  Container,
  Header,
  Main,
  ButtonSelect,
  SeparatorComponent,
  WrapperInfo,
  ImageFood,
} from './styles';

import { Props } from './types';

export function MenuFoods({
  product,
  setProductSelected,
  setVisibleMenu
} : Props) {

  const theme = useTheme();
  
  function handleProduct(item: IProductSelected){
    setProductSelected({
      name: item.name,
      id: item.id,
      description: item.description,
      price: item.price,
    })
    setVisibleMenu();
  }

  return (  
    <Container>
      <Header> 
        <Text size={25}>Escolha o seu produto</Text>
      </Header>

      <Main>
        <FlatList 
         data={product}
         keyExtractor={item => item.id}
         renderItem={({ item }) => (
          
          <ButtonSelect onPress={() => handleProduct(item)}>
           <ImageFood source={{ uri: `${item.banner}`}}/>
            
            <WrapperInfo>
            <Text size={20} color={theme.colors.primary}>{item.name}</Text>
            <Text size={16} color={theme.colors.gray}>{item.description}</Text>
            <Text size={15} color={theme.colors.attention}>R$ {item.price}</Text>
            </WrapperInfo>
   
          
          </ButtonSelect>
         
          )}
          ItemSeparatorComponent={() => (
            <SeparatorComponent />
          )}
        
        />

      </Main>

    </Container>
  );
}

