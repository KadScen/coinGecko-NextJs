import styled from "styled-components";

export const SelectedCoinFormContainerStyled = styled.div`
    padding: 5%;
    width: 50%;
    border: 1px solid #e2e2e2;

    select {
        border: none;
        border-bottom: 1px solid #e2e2e2;
        margin-bottom: 15%;
        height: 40px;
        background-color: white;
        width: 100%;
      }
      
      input[type="number"] {
        border: none;
        border-bottom: 1px solid #e2e2e2;
        margin-bottom: 15%;
        height: 40px;
        width: 100%;
      }
      
      input[type="submit"] {
        background-color: #ff962e;
        color: white;
        border: none;
        padding: 20px 60px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        width: 100%;
      }
`

export const ButtonStyled = styled.button`
  background-color: ${props => props.bgColor || 'white'};
  color: ${props => props.textColor || '#ff962e'};
  border: 2px solid #ff962e; /* Green */
  // padding: 20px 60px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  width: 200px;
  height: 50px;
`

export const SelectedCoinFormButtonsStyled = styled.div`
    padding: 15% 0;
    display: flex;
    justify-content: space-around;
`