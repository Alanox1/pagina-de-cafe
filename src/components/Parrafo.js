import styled from "styled-components";

export const Parrafo = styled.p`
    font-weight: 500;
    line-height: 1.8em;
    color : #666;
    text-align:center;
    font-size: 23px;
`

export const ParrafoGrande = styled(Parrafo)`
    font-size: 25px; 
    text-align: start;
`

export const ParrafoBlanco = styled(Parrafo)`
     color : white;
`
export const ParrafoCentradoAlInicio = styled(Parrafo)`
font-weight: 500;
line-height: 1.8em;
color : #666;
text-align:start;
font-size: 23px;
color: white;
` 
