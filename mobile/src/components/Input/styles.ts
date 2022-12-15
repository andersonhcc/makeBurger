import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from '@expo/vector-icons';



interface PropsInput {
  colorBorda: string;
  color: string;
}

export const BoxInput = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

export const Container = styled.View`
  width: 100%;
`;

export const InputN = styled.TextInput<PropsInput>`
  height: 50px;
  flex:1;
  background-color: ${({ theme }) => theme.colors.background};
  padding-left: 40px;
  margin-right: 20px;
  margin-left: 20px;
  border-radius: 8px;
  font-size: ${RFValue(15)}px;
  border-color: ${props => props.colorBorda};
  border-Width: 1px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const IconInput = styled(MaterialCommunityIcons)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(24)}px;
  
  position: absolute;
  left: 30px;
  top: 12px;
`;

export const ButtonVisiblePassword = styled.TouchableOpacity``;


export const IconVisiblePassword = styled(MaterialCommunityIcons)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(24)}px;
  
  position: absolute;
  right: 30px;
  top: 12px;
`;

