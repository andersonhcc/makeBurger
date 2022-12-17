import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';


interface Props {
  marginTop?: number;
  backgroundColor?: string;
  height: number;
  width: number;
}

export const Container = styled.TouchableOpacity<Props>`
  ${({ marginTop }) => marginTop ? css`margin-top: ${marginTop}px;` : ''};
  
  ${({ backgroundColor, theme }) => backgroundColor ? css`background-color: ${backgroundColor};` : css`${theme.colors.primary};`};

  ${({ width }) => width ? css`width: ${RFValue(width)}px;` : css`width: ${RFValue(300)}px;`}
  
  ${({ height }) => height ? css`height: ${RFValue(height)}px;` : css`height: ${RFValue(50)}px;`}
  
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  border-radius: 7px;
  align-items: center;
  justify-content: center;

`;

export const WrapperElements = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Indicator = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#ffff'
})`
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(20)}px;
  margin-left: 5px;

`;