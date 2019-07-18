import React from "react"; 
import styled from "styled-components"; 

function Explanation(props) {
    
    const StyleP = styled.p`
    color: #ffffff; 
    font-size: 1.5rem; 
    width: 70%; 
    text-align: center; 
    margin: auto; 
    `
    return (
        <StyleP>
            {props.exp}
        </StyleP>
    )
}

export default Explanation; 