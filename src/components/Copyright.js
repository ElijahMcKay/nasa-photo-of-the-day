import React from "react"; 
import styled from "styled-components"; 

function Copyright(props) {

    const StyleDiv = styled.div`
    color: #ffffff; 
    font-size: 1.2rem; 
    margin-top: 2rem; 
    `
    return (
        <StyleDiv>
            {props.copyright}
        </StyleDiv>
    )
}


export default Copyright; 