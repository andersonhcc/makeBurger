import React from 'react';

import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

import {
  Container,
  Indicator,
  Icon,
  WrapperElements
} from './styles';
import { Text } from '../Text';


interface PropsButton extends TouchableOpacityProps {
  marginTop?: number;
  backgroundColor?: string;
  title: string;
  disabled?: boolean;
  isLoading?: boolean;
  width?: number;
  height?: number;
  fontSize?: number;
  icon?: boolean;
}

export function Button({
  marginTop,
  title,
  backgroundColor,
  isLoading,
  disabled,
  width,
  height,
  fontSize,
  icon,
  ...props }
  : PropsButton) {

  const theme = useTheme();

  return (
    <Container
      marginTop={marginTop}
      width={width}
      height={height}
      disabled={disabled}
      activeOpacity={0.5}
      backgroundColor={backgroundColor}
      {...props}
    >
      {
        isLoading ?
          <Indicator />
          :

          <WrapperElements>
            <Text
              color={theme.colors.white}
              size={fontSize ? fontSize : 20}
            >
              {title}
            </Text>

            {icon &&
            <Icon name="shopping-cart" />
            }
          </WrapperElements>

      }



    </Container>
  );
}