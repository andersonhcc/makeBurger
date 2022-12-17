import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
  width: 100%;
  padding-left: 5%;
  height: 80px;
  justify-content: flex-end;
`;

export const Main = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const ButtonSelect = styled.TouchableOpacity``;