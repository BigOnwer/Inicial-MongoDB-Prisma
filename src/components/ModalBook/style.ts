import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: #00000075;
`
export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem; 
    background: ${props => props.theme['gray-800']};
    
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form{
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        input{
            border-radius: 6px;
            border: 0;
            background: #404040;
            color: #ffff;
            padding: 1rem;

            &::placeholder{
                color: ${props => props.theme['gray-500']};
            }
        }

        button[type="submit"] {
            height:58px;
            border: 0;
            background: #0089D7;
            color: #ffff;
            font-weight: bold;
            padding: 0 1.25rem;
            border-radius: 6px;
            margin-top: 1.5rem;
            cursor: pointer;

            &:disabled{
                opacity: 0.6;
                cursor: not-allowed;
            }

            &:not(:disabled):hover{
                background: ${props => props.theme['green-700']};
                transition: background-color 0.2s;
            }
        }

    }

    header{
        display: flex;
        justify-content: space-between;
    }
`

export const Close = styled(Dialog.Close)`
    color: #9e9e9e;
    background: transparent;
    border: 0;
    cursor: pointer;
    line-height: 0;
`