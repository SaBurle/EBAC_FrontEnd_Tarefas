import styled from 'styled-components';

export const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 0;
    border-bottom: 1px solid #ddd;
`;

export const Botao = styled.button`
    min-height: 44px;
    padding: 0 16px;
    border: none;
    color: white;
    border-radius: 4px;
    cursor: pointer;
`;

export const BotaoAlerta = styled(Botao)`
    background-color: #f44336;

    &:hover {
        background-color: #d32f2f;
    }
`;

export const TextoItem = styled.span`
    flex: 1;
    word-break: break-word;
    text-decoration: ${({$concluida}) => ($concluida ? "line-through" : "none")};
    color: ${({$concluida}) => ($concluida ? "#999" : "#000")};
`;
