import styled from "styled-components";

export const Content = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
    background: #121214;
    width:80%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    height: 2.5rem;
    border-radius: 12px;
    button{
        position: absolute;
        background: transparent;
        border: 0;
        top: 50%;
        transform: translateY(-50%);
        margin: 3px;
        margin-left: 0.6rem;
    }
`

export const InputSearch = styled.input`
    background: #121214;
    width:100%;
    height: 100%;
    border-radius: 12px;
    padding-left: 3rem;
    border: 0;
`