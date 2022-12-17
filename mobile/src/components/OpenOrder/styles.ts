import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(34, 34, 34, 0.4);
  justify-content: center;
  align-items: center;
`;

export const WrapperTitle = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputOrder = styled.TextInput`
  border-color: ${({ theme }) => theme.colors.color_borda};
  color: ${({ theme }) => theme.colors.gray};
  border-style: dashed;
  border-width: 1px;
  padding: 10px 15px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;

export const Main = styled.View`
  width: 90%;
  height: 240px;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.background};


`;

export const WrapperInput = styled.View`
  justify-content: center;
  height: 100px;

`;

export const IconX = styled(Feather)`
  font-size: ${RFValue(18)}px;
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.white};

`;

export const WrapperButton = styled.View`
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;

`;