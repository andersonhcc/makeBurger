import React from 'react';
import { FlatList } from 'react-native';

import { ICategory } from '../../screens/OrderDetails';

import { Text } from '../Text';

import { IProduct } from '../../screens/OrderDetails';


import {
  Container,
  Header,
  Main,
  ButtonSelect,
} from './styles';

interface Props {
  product: IProduct[];
  setProductSelected: (value: ICategory) => void;
  setVisibleMenu: () => void;
}

export function MenuFoods({
  product,
  setProductSelected,
  setVisibleMenu
} : Props) {
  
  function handleProduct(item: ICategory){
    setProductSelected({
      name: item.name,
      id: item.id,
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
            <Text>{item.name}</Text>
          </ButtonSelect>
         
          )}

        
        />


      </Main>

    </Container>
  );
}