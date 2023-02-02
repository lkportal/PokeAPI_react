import styled from "styled-components";
export const ConteinerInput = styled.div`
    display: flex;
    flex-direction: column;
     justify-content: center;
     align-items: center;
`

export const InputItem = styled.input`
   width: 250px ;
   text-align: center;
  padding: 1rem;
  &[type=number]::-webkit-outer-spin-button,
  &[type=number]::-webkit-inner-spin-button{
    text-decoration: none;
    -webkit-appearance: none;
  }
  &[type=number]{
    -moz-appearance: none;
  }
`