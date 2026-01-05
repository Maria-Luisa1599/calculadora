import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    width: 100%;
    height: 75px;    
    font-size: 24px;
    font-family: 'Roboto';
    margin: 15px 0 35px 0;

    input{
        width: 100%;
        height: 75px;
        background-color:  #363636ff;
        color: #FFF;
        border:none;
        border-left: 1px solid #454545ff;
        border-bottom: 1px solid #454545ff;
        border-radius: 2px;

        font-size: 24px;
        font-family: 'Arial';

        padding: 0 15px;
    }
`
