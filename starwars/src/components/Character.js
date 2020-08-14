// Write your Character component here
import React from "react";
import styled from "styled-components";



const StyledCharacter = styled.div`
    background-color: ${({ theme }) => theme.primaryColor};
    border: 5px solid ${({ theme }) => theme.secondaryColor};
    opacity: 0.8;

    h1, h2 {
        color: ${({ theme }) => theme.secondaryColor};
            &:hover {
            color: ${({ theme }) => theme.tertiaryColor};
            }
    }


`

function Character(props) {
    const { character } = props;
    return (
        <div>
            <StyledCharacter>
                <h1>{character.name}</h1>
                <h2>Gender: {character.gender}</h2>
                <h2>Birth Year: {character.birthYear}</h2>
                <h2>Hair Color: {character.hairColor}</h2>
            </StyledCharacter>
        </div>
    )

}

export default Character;