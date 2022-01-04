import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
.status {
    width: 10px;
    heigth: 10px;
}

.online{
    display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: green;
}

.offline{
    align-items: center;
  display: block;
  border-radius: 50%;
  background-color: red;
  width: 10px;
  height: 10px;
}`