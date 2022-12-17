import React from 'react';

import { Text } from '../Text';
import { ICategory } from '../../screens/OrderDetails';


import {
  Container,
  Main,
  WrapperScroll,
  ButtonCategory
} from './styles';


interface Props {
  categories: ICategory[];
  setVisibleDrop: () => void;
  setCategorySelected: (value: ICategory) => void;
}

export function DropCategories({
  categories,
  setVisibleDrop,
  setCategorySelected
} : Props) {


  function handleCategorySelected(item: ICategory){
    setCategorySelected({
      name: item.name,
      id: item.id,
    });
    setVisibleDrop();
  }
  
  return (
    <Container>
        <Main>
          <WrapperScroll>
              {categories.map((item, index) => {
                return (
                <ButtonCategory 
                key={item.id} 
                onPress={() =>handleCategorySelected(item)}
                >
                    <Text size={20}>{item.name}</Text>
                </ButtonCategory>
                )
              })}
          </WrapperScroll>
        </Main>
    </Container>
  );
}