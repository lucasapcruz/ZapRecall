import styled from "styled-components";
import playIcon from "../assets/img/seta_play.png"
import turnIcon from "../assets/img/seta_virar.png"
import rightIcon from "../assets/img/icone_certo.png"
import wrongIcon from "../assets/img/icone_erro.png"
import almostIcon from "../assets/img/icone_quase.png"
import { useState } from "react";



export default function Board(props) {
  const { cards, flippedCards, setFlippedCards } = props

  return (
    <>
      {cards.map((c, i) => <Card key={i} index={i} question={c.question} answer={c.answer} flippedCards={flippedCards} setFlippedCard={setFlippedCards}/>)}
    </>
  )

}

function Card(props) {

  const {index, question, answer, flippedCards, setFlippedCard} = props

  const [cardFace, setCardFace] = useState("cover")

  const adjIndex = index + 1

  function flipCard(adjIndex){
    setCardFace("question")
    setFlippedCard([...flippedCards, adjIndex])
  }

  return (
    <>
      <Cover load={cardFace === "cover"}>
        <p>Pergunta {adjIndex}</p>
        <img src={playIcon} onClick={()=>flipCard(adjIndex)}></img>
      </Cover>

      <Question load={cardFace === "question"}>
        <p>{question}</p>
        <img src={turnIcon} onClick={()=>setCardFace("answer")}></img>
      </Question>

      <Answer load={cardFace === "answer"}>
        <p>{answer}</p>
      </Answer>
    </>
  )
}


const Cover = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${props => props.load? 'flex':'none'};;
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
    display: ${props => props.load? 'flex':'none'};;
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
`
