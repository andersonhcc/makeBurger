import React from 'react';

import { useTheme } from 'styled-components';

import { Text } from '../Text';

import { IRequest } from '../../screens/OrderDetails';

import {
  Container,
  WrapperTitle,
  Main,
  WrapperAmount
} from './styles';


interface Props {
  data: IRequest
}

export function RequestFood({ data }: Props) {
  const theme = useTheme();

  return (
    <Container>

      <WrapperAmount>
        <Text size={20}>{data.amount}x</Text>
      </WrapperAmount>

      <Main>
        <WrapperTitle>
          <Text size={18}>{data.name}</Text>
          <Text size={17} color={theme.colors.attention}>R$ {data.amount}</Text>
        </WrapperTitle>

        <Text size={15} color={theme.colors.gray}>{data.description}</Text>
      </Main>


    </Container>
  );
}