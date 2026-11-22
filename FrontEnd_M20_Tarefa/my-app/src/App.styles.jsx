import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * { box-sizing: border-box; }
    body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        background: #f4f4f8;
        color: #222;
    }
`;

export const Main = styled.main`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 16px;

    @media (min-width: 768px) {
        padding: 32px 16px;
    }
`;

export const Titulo = styled.h1`
    font-size: 1.5rem;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 2rem;
    }
`;
