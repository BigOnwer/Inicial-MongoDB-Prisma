import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem;
    
    img{
        width: 20rem;
    }

    h2{
        font-size: 23px;
        width: 23rem;
    }

    p{
        width: 30rem;
    }

    button{
        width: 100%;
        height: 52px;
        border-radius: 9999px;
        border: 0;
        background: #00A2FF;
        cursor: pointer;

        &:hover{
            transition: 200ms background-color;
            background: #0089D7
        }
    }
`

export const InfosContent = styled.div`
    margin: 1rem;
    p{
        color: #B3B3B3;
    }
`