import styled from "styled-components";

export const ConteinerDiv = styled.div`
    width: 21.875rem;
    height: 14rem;
    border-radius: 16px;
    background: #27262B;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0.5rem;
    margin: 1rem;
    p{
        margin-top: 0.5rem;
    }
    button{
        background: none;
        border: 0;
        cursor: pointer;
        position: relative;
        left: 90%;
        
        img{
            width: 70%
        }
    }
`

export const ButtonAddBook = styled.button`
    background: #00a814;
    padding: 0.8rem;
    height: 3rem;
    width: 10rem;
    margin: 1rem;
    border-radius: 1rem;
    border: 0;
    position: relative;
    float: right;

    &:hover{
        transition: 0.2s background-color;
        background: #00610b;
    }
`

export const Conatiner = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 20px;
`