import React from 'react';

import { Text } from '../../components/Text';

import { useTheme } from 'styled-components';
import { useRoute } from '@react-navigation/native';

import {
  Container,
  Header,
  Wrapper,
  ButtonCancel,
  IconDelete,
} from './styles';

interface Props {
  orderNumber: string;
}

export function OrderDetails() {
  const theme = useTheme();
  const { params } = useRoute();
  const { orderNumber } = params as Props;

  return (
    <Container>
      <Header>
        
          <Text size={22} color={theme.colors.white}>Aberta a mesa {orderNumber}  
         </Text>

         <ButtonCancel>
            <IconDelete name="trash" />
          </ButtonCancel>

      </Header>

    </Container>
  );
}