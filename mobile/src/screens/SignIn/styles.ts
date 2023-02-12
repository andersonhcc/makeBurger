import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 297px;
  height: 58px;
  margin-bottom: 60px;
`;