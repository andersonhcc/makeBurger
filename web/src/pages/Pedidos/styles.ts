import styled from "styled-components";

export const Container = styled.div`
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2{
    font-size: 44px;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 15px;

    button{
      background-color: transparent;
      border: none;
      cursor: pointer;

      #icon{
        font-size: 24px;
        color: lightblue;
      }
    }
  }

  .container---pedidos{
    display: flex;
    flex-direction: column;
    gap: 26px;
  }
`;

export const Item = styled.button`
  height: 60px;

  padding: 10px;

  text-align: start;
  cursor: pointer;

  font-size: 22px;
  font-weight: bold;
  color: #fff;

  background-color: #101026;
  border-radius: 6px;
  border: none;
  border-left: 9px solid #3FFFA3;
`;
