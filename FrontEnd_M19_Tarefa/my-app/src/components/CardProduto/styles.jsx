import styled from "styled-components";

export const Card = styled.article`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 16px;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Nome = styled.h2`
    margin: 0;
    font-size: 18px;
    color: #333;
`;

export const Preco = styled.p`
    margin: 0;
    font-size: 20px;
    font-weight: bold;
    color: #198754;
`;

// $adicionado: prop só de estilo (não vai para o HTML)
export const Botao = styled.button`
    min-height: 44px;
    padding: 10px 16px;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    background-color: ${({ $adicionado }) => ($adicionado ? '#198754' : '#6c757d')};

    &:hover {
        opacity: 0.9;
    }
`;
