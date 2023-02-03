import styled from "styled-components";

export const Titulo = styled.h2`
    font-size: 48px;
    letter-spacing: 2px;
    line-height: 1.5em;
    color: #333;
    padding-bottom: 10px;
    margin: 0;
`

export const TituloBlanco = styled.h2`
    font-size: 48px;
    letter-spacing: 2px;
    line-height: 1.5em;
    color: #fff;
    padding-bottom: 10px;
    margin: 50px;
    text-align: center;
`


export const TituloBlancoCentradoAlInicio = styled(TituloBlanco)`
    text-align: start;
    margin : 0px;
`