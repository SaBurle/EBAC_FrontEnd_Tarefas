import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;

    @media (min-width: 480px) {
        flex-direction: row;
    }
`;

export const Input = styled.input`
    flex: 1;
    min-height: 44px;
    padding: 0 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
`;

export const Botao = styled.button`
    min-height: 44px;
    padding: 0 16px;
    border: none;
    border-radius: 4px;
    background-color: #4caf50;
    color: white;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #388e3c;
    }
`;
