import styled from "styled-components";

export const ConteinerDiv = styled.div`
    width: 21.875rem;
    height: 14rem;
    border-radius: 16px;
    background: #27262B;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding-top: 0.5rem;
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