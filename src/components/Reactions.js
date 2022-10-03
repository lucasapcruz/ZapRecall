import styled from "styled-components";

export default function Reactions(props){

    const {flippedCards, reactionsOfCards, setReactionsOfCards, currentCard, setCurrentCard, answerFaceLoaded, setAnswerFaceLoaded} = props

    function reactToAnswer(reaction){
        if(answerFaceLoaded){
            setReactionsOfCards([...reactionsOfCards, reaction])
            setCurrentCard(null)
            setAnswerFaceLoaded(false)
        }
    }

    return(
        <>
            <ButtonsContainer>
                <NahReaction onClick={() => reactToAnswer("forgot")} data-identifier="forgot-btn">Não lembrei</NahReaction>
                <AlmostReaction onClick={() => reactToAnswer("almost")} data-identifier="almost-forgot-btn">Quase não lembrei!</AlmostReaction>
                <ZapReaction onClick={() => reactToAnswer("zap")} data-identifier="zap-btn">Zap!</ZapReaction>
            </ButtonsContainer>
        </>
    );
}

const ButtonsContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
`

const Reaction = styled.button`
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    border-radius: 5px;
    padding:5px;
`;

const ZapReaction = styled(Reaction)`
        background: #2FBE34;
`;

const AlmostReaction = styled(Reaction)`
        background: #FF922E;
`;

const NahReaction = styled(Reaction)`
        background: #FF3030;
`;