import React, { useEffect } from 'react';

import { useTheme } from 'styled-components';

import { Text } from '../Text';

import { IRequest } from '../../screens/OrderDetails';
import { IconDelete } from '../../screens/OrderDetails/styles';

import { api } from '../../service/api';

import {
  Container,
  WrapperTitle,
  Main,
  WrapperAmount,
  ButtonDelete,
} from './styles';
import { Alert } from 'react-native';


interface Props {
  data: IRequest
  handleDeleteProduct: (item_id: string) => void;
}



export function RequestFood({ data, handleDeleteProduct }: Props) {
  const theme = useTheme();

  async function handleDelete(){
    handleDeleteProduct(data.id);
  }


  return (
    <Container>

      <WrapperAmount>
        <Text size={20}>{data.amount}x</Text>
        <Text size={17} color={theme.colors.attention}>R$ {data.price}</Text>
      </WrapperAmount>
      <Main>
        <WrapperTitle>
          <Text size={18}>{data.name}</Text>
          <ButtonDelete>
            <IconDelete name="trash" onPress={handleDelete}/>
          </ButtonDelete>
          
        </WrapperTitle>

        <Text size={15} color={theme.colors.gray}>{data.description}</Text>
      </Main>

    </Container>
  );
}