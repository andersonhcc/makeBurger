import styled from 'styled-components/native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
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

export const Main = styled.View`
  flex:1;
  width: 90%;
  
  padding-top: 10%;
  padding-left: 5%;
  
  justify-items: center;
  
`;

export const WrapperOptions = styled.View`
  padding-top: 3%;

`;

export const ButtonCancel = styled.TouchableOpacity``;

export const IconDelete = styled(Feather)`
  font-size: ${RFValue(22)}px;
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.attention};
  margin-left: 5px;

`;

export const ButtonFoods = styled.TouchableOpacity.attrs({
  activeOpacity: 0.2
})`
    width: 100%;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.shape};
    border: 1px solid ${({ theme }) => theme.colors.color_borda};
    font-size: ${RFValue(12)}px;
    padding: 15px 10px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 7px;
    margin-bottom: 7px;
`;

export const BoxNameIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconMaterial = styled(MaterialIcons)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.gray_intense};
`;

export const Foods = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  margin-left: 5px;

`;
export const IconFeather = styled(Feather)`
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.gray_intense};
`;

export const InputQuantity = styled.TextInput`
  flex: 1;
  width: 100%;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.white};
  margin-left: 2%;

`;

export const WrapperQuantity = styled.View`
  width: 100%;
  padding-top: 3%;
  align-items: center;
  flex-direction: row;

`;

export const InputMore = styled.TouchableOpacity`
  width: 50px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.attention};
  border-radius: 4px;
  align-items: center;
  justify-content: center;

`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;
  padding-bottom: 10px;
`;