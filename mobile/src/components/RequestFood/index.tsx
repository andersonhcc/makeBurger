import React from 'react';

import { useTheme } from 'styled-components';

import { Text } from '../Text';

import { IconDelete } from '../../screens/OrderDetails/styles';

import { Props } from './types';

import {
  Container,
  WrapperTitle,
  Main,
  WrapperAmount,
  ButtonDelete,
} from './styles';

export function RequestFood({ data, handleDeleteProduct }: Props) {
  const theme = useTheme();

  async function handleDelete(){
    handleDeleteProduct(data.id);
  }

  return (
    <Container>

      <WrapperAmount>
        <Text size={20}>{data.amount}x</Text>
        <Text size={17} color={theme.colors.attention}>R$ {data.acc}</Text>
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