import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Main = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const WrapperIcon = styled.View`
  padding-bottom: 10%;
`;

export const WrapperButton = styled.View`
  padding-top: 20%;


`;