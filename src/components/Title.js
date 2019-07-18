import React from "react"; 
import styled from "styled-components"; 

function Title(props) {
    
    const StyleH1 = styled.h1`
    color: #ffffff; 
    font-size: 2.4rem; 
    font-weight: 400; 
    `
    return (
        <StyleH1>
            {props.title}
        </StyleH1>
    )
};


export default Title; 