import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
.status {
    width: 10px;
    heigth: 10px;
    color: ${({ isOnline }) => isOnline===false? 'red' : 'green'};
}`