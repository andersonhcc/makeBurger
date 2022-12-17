import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
  width: 100%;
  padding-top: 10%;
  flex-direction: row;
  justify-content: center;

`;

export const Wrapper = styled.View`
  width: 100%;
  
  align-items: center;
  justify-items: center;
  
  `;

export const ButtonCancel = styled.TouchableOpacity``;

export const IconDelete = styled(Feather)`
  font-size: ${RFValue(22)}px;
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.attention};
  margin-left: 5px;

`;
