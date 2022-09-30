import styled from "styled-components";

export default function StatusIndicator(props) {

    return(
        <>
            <p>{props.flippedCards}/{props.numOfCards} CONCLUÍDOS</p>
        </>
    )
    
}