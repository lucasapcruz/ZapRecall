import styled from "styled-components";

export default function StatusIndicator(props) {

    return(
        <>
            <p data-identifier="flashcard-counter">{props.flippedCards}/{props.numOfCards} CONCLUÍDOS</p>
        </>
    )
    
}