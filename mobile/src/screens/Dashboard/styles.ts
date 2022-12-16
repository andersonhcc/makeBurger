import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons'; 


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
  width: 100%;
  height: 100px;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`;

export const WrapperImage = styled.View`
  width: 40px;
  height: 40px;
`;

export const ImageProfile = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;

export const IconExit = styled(Ionicons).attrs({
  name: 'ios-exit-outline'
})`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 30px;
`;

export const WrapperIcon = styled.TouchableOpacity``;

export const Main = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
`;

export const ImageMain = styled.Image`
  width: 400px;
  height: 400px;
`;