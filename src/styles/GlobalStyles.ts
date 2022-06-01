import {createGlobalStyle} from "styled-components";

export default createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Merriweather', serif;
  }
  body{
    height: 100%;
    background-color:  #1e203c;
  }
  html, body, #root{
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
  }

  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
`