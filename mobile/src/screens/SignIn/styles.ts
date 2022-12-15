import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
  flex:1;
`;

export const Main = styled.View`
  flex:1;
  align-items: center;
`;