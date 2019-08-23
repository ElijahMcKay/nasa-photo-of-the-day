import React from "react"; 
import styled from "styled-components"; 


function Date(props) {

    const StyleP = styled.p`
    color: #ffffff; 
    font-size: 1rem; 
    `
    return (
        <StyleP>
            {props.date}
        </StyleP>
    )
}

export default Date; 