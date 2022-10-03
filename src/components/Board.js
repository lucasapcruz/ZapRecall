import styled from "styled-components";
import playIcon from "../assets/img/seta_play.png"
import turnIcon from "../assets/img/seta_virar.png"
import zapIcon from "../assets/img/icone_certo.png"
import forgotIcon from "../assets/img/icone_erro.png"
import almostIcon from "../assets/img/icone_quase.png"
import { useState } from "react";



export default function Board(props) {
  const { cards, flippedCards, setFlippedCards, answerFaceLoaded, setAnswerFaceLoaded, currentCard, setCurrentCard, reactionsOfCards} = props

  return (
    <>
      {cards.map((c, i) => <Card  key={i} 
                                  index={i} 
                                  question={c.question} 
                                  answer={c.answer}
                                  currentCard ={currentCard}
                                  setCurrentCard = {setCurrentCard}
                                  flippedCards={flippedCards} 
                                  setFlippedCards={setFlippedCards} 
                                  answerFaceLoaded={answerFaceLoaded} 
                                  setAnswerFaceLoaded={setAnswerFaceLoaded}
                                  reactionsOfCards={reactionsOfCards}/>)}
    </>
  )

}

function Card(props) {

  const {index, question, answer, flippedCards, setFlippedCards, currentCard, setCurrentCard, answerFaceLoaded, setAnswerFaceLoaded, reactionsOfCards} = props

  const [cardFace, setCardFace] = useState("cover")

  const adjIndex = index + 1

  const reaction = reactionsOfCards[flippedCards.indexOf(adjIndex)]

  function flipToQuestion(adjIndex){
    setCurrentCard(adjIndex)
    setCardFace("question")
    setFlippedCards([...flippedCards, adjIndex])

  }

  function flipToAnswer(){
    setCardFace("answer")
    setAnswerFaceLoaded(true)
    console.log(flippedCards.indexOf(adjIndex))
  }

  return (
    <div  data-identifier="flashcard">
      <Cover load={cardFace === "cover"} clickEnabled={currentCard == null}>
        <p data-identifier="flashcard-index-item">Pergunta {adjIndex}</p>
        <img src={playIcon} onClick={()=>flipToQuestion(adjIndex)} data-identifier="flashcard-show-btn"></img>
      </Cover>

      <Question load={cardFace === "question" && currentCard == adjIndex}>
        <p data-identifier="flashcard-question">{question}</p>
        <img src={turnIcon} onClick={()=>flipToAnswer(adjIndex)} data-identifier="flashcard-turn-btn"></img>
      </Question>

      <Answer load={cardFace === "answer" && currentCard == adjIndex}>
        <p data-identifier="flashcard-answer">{answer}</p>
      </Answer>

      <AnswerReacted load={flippedCards.includes(adjIndex) && currentCard !== adjIndex} reaction={reaction}>
        <ReactionContent adjIndex={adjIndex} reaction={reaction}/>
      </AnswerReacted>
    </div>
  )
}

function ReactionContent(props){
  const {adjIndex, reaction} = props

  let icon = zapIcon

  switch(reaction){
    case "zap":
      icon = zapIcon
      break
    case "almost":
      icon = almostIcon
      break
    case "forgot":
      icon = forgotIcon
      break
  }

  return(
    <>
      <p>Pergunta {adjIndex}</p>
      <img src={icon}></img>
    </>
  )
}

function handleColor(reaction){

  let color

  switch(reaction){
    case "zap":
      color = "#2FBE34;"
      break
    case "almost":
      color = "#FF922E;"
      break
    case "forgot":
      color = "#FF3030;"
      break
  }

  return(color)
}

const Cover = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${props => props.load? 'flex':'none'};
    align-items: center;
    justify-content: space-between;

  p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
  img{
    pointer-events: ${props => props.clickEnabled?'auto':'none'};
  }
`

const Question = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: ${props => props.load? 'flex':'none'};
    flex-direction: column;
    justify-content: space-between;

  img{
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`
const Answer = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${props => props.load? 'flex':'none'};
    align-items: center;
    justify-content: space-between;

  p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`

const AnswerReacted = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${props => props.load? 'flex':'none'};
    align-items: center;
    justify-content: space-between;

  p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => handleColor(props.reaction)};
    text-decoration: line-through;
  }
`
