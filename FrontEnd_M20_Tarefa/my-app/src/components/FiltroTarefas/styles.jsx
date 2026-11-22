import styled from 'styled-components';

export const Filtros = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
`;

export const BotaoFiltro = styled.button`
    flex: 1;
    min-height: 44px;
    border: 1px solid #1976d2;
    border-radius: 4px;
    font-size: 0.9rem;
    cursor: pointer;
    background-color: ${({$ativo}) => ($ativo ? "#1976d2" : "white")};
    color: ${({$ativo}) => ($ativo ? "white" : "#1976d2")};
`;
