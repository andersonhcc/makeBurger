import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};


`;

export const Header = styled.View`
  flex:1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const LogoView = styled.View`
  width: 100%;
  height: 100px;
  justify-content: flex-end;
  align-items: center;
`;

export const Logo = styled.Image``;

export const Main = styled.View`
  flex:1;
  width: 100%;
  align-items: center;

`;

export const ImageSlider = styled.Image`
  width: 300px;
  height: 300px;
`;

export const ButtonNext = styled.TouchableOpacity`
  width: 80px;
  height: 50px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

