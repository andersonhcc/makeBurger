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
  colorFont?: string;
  fontTitle?: string;
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