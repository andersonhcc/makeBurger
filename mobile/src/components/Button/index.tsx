import React from 'react';

import { useTheme } from 'styled-components';
import {PropsButton} from './types';

import {
  Container,
  Indicator,
  Icon,
  WrapperElements
} from './styles';
import { Text } from '../Text';

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
  colorFont,
  fontTitle,
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
              color={colorFont ? colorFont : theme.colors.white}
              size={fontSize ? fontSize : 20}
              fontFamily={ fontTitle ? fontTitle : theme.fonts.regular}
            >
              {title}
            </Text>

            {icon &&
            <Icon 
            name="shopping-cart" 
            color={colorFont ? colorFont : theme.colors.white}
            />
            }
          </WrapperElements>
      }

    </Container>
  );
}