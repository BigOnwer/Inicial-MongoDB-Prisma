import styled from "styled-components";

export const Divisor = styled.section`
    border: 1px solid #DEDEDE;
    width: 100%;
    height: 3px;
    background: #DEDEDE;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 3rem;
`

export const ContainerForm = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #27262B;
    width: 46.875rem;
    height: 25rem;
    padding-left: 2rem;
    padding-right: 2rem;
`

export const Form = styled.form`
    h2{
        text-align: center
    }
    button{
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        height: 3rem;
        margin-top: 2rem;
        border-radius: 6px;
        border: 0;
        background: #0089D7;
    }
    padding: 1rem;
`

export const DivInput = styled.div`
    div{
        float: right;
        display: flex;
        flex-direction: column;
        margin: 3px;
        margin-top: 2rem
    }
    input{
        width: 20rem;
        height: 2.2rem;
        padding: 1rem;
        border-radius: 8px;
        border: 0;
        background: #121214;
        margin-bottom: 0.5rem
    }
`

export const Image = styled.img`
    width: 25%;
`