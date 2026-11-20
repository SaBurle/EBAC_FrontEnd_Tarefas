import styled from "styled-components";

export const Pagina = styled.main`
    max-width: 960px;
    margin: 0 auto;
    padding: 16px;
`;

export const Titulo = styled.h1`
    text-align: center;
    color: #333;
`;

// Mobile first: 1 coluna; 2 e 3 colunas em telas maiores
export const Lista = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const Resumo = styled.section`
    margin-top: 24px;
    padding: 16px;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ResumoTitulo = styled.h2`
    margin: 0 0 10px;
    font-size: 18px;
    color: #333;
`;

export const ResumoLinha = styled.p`
    margin: 0 0 6px;
`;

export const Total = styled.p`
    margin: 0;
    font-size: 20px;
    font-weight: bold;
    color: #198754;
`;
