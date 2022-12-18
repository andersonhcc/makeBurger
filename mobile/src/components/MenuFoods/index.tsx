import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { IProductSelected } from '../../screens/OrderDetails';

import { Text } from '../Text';
import { api } from '../../service/api'

import { useTheme } from 'styled-components';

import { IProduct } from '../../screens/OrderDetails';


import {
  Container,
  Header,
  Main,
  ButtonSelect,
  SeparatorComponent,
  ImageLoading,
  WrapperInfo,
} from './styles';

interface Props {
  product: IProduct[];
  setProductSelected: (value: IProductSelected) => void;
  setVisibleMenu: () => void;
}

export function MenuFoods({
  product,
  setProductSelected,
  setVisibleMenu
} : Props) {

  const [imagesFoods, setImagesFoods] = useState({

  });

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




  // async function downloadImage(){
  //   const images = {}; 
  //   Promise.all(product.map(async (item) => {
      
  //     const response = await api.get(`/files/${item.banner}`);
      
  //     return images[item.banner] = response.request.responseURL;
      
  //   }))

  //   setImagesFoods(images);
    
  // }

  // async function teste(item){
   
  //   const response = await api.get(`/files/${item.banner}`);

  //   return (response.request.responseURL);
  
  // }



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
            <ImageLoading></ImageLoading>
            
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

