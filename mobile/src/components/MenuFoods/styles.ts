import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
  padding-left: 5%;

`;

export const Header = styled.View`
  width: 100%;
  height: 80px;
  justify-content: flex-end;
`;

export const Main = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const ButtonSelect = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 5px;

  flex-direction: row;


`;

export const SeparatorComponent = styled.View`
  height: 1px;
  width: 90%;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const ImageFood = styled.Image`
  width: 90px;
  height: 1000px;
`;

export const ImageLoading = styled.View`
  background-color: gray;
  opacity: 0.2;
  width: 90px;
  height: 100px;
  border-radius: 7px;
  `;

  export const WrapperInfo = styled.View`
    flex:1;
    flex-direction: column;
    padding-left: 5%;
  `;
