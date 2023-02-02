import styled from "styled-components";

export const ConteinerCard = styled.div`
    display: grid;
    grid-auto-flow: row;
    text-align: center;
    
`
export const ULCont = styled.ul`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    

`
export const Lista = styled.li`
     border: solid 1px #9E87C7;
     background-color:#BCA1ED ;
     padding: 1em;
     margin: 1em;
    list-style: none;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    color: #1D1A66;
`