import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 120px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 75px;

  .logo{
    width: 340px;
    height: auto;
  }

  nav{
    display: flex;
    gap: 50px;
    font-size: 26px;
  }

  a{
    color: #fff;
    text-decoration: none;
  }

  .logout--button{
    margin-left: 20px;
    cursor: pointer;
  }
`;

export const Main = styled.main`
  margin: auto;
  width: 50%;
`;
