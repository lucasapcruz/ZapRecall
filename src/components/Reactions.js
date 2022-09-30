import styled from "styled-components";

export default function Reactions(){
    return(
        <>
            <ButtonsContainer>
                <ZapReaction>Zap!</ZapReaction>
                <AlmostReaction>Quase não lembrei!</AlmostReaction>
                <NahReaction>Não lembrei</NahReaction>
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
    border: 1px solid blue;
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