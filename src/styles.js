import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #cdcdcdff;
    `

export const Content = styled.div`
    background-color: #2b2b2bff;
    width: 20%;
    padding: 30px;
    min-height: 350px;

    border-radius: 10px;
    box-shadow: 0px 0px 5px 2px #000000aa;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`