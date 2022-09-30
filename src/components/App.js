import CARDS from "../cards";
import styled from "styled-components";
import GlobalStyle from "../globalstyles";
import { useState } from "react";
import Deck from "./Deck";
import Reactions from "./Reactions";
import StatusIndicator from "./StatusIndicator";
import logo from "../assets/img/logo.png"

export default function App() {
    return (
        <>
            <GlobalStyle/>
            <ScreenContainer>
                <LogoContainer>
                    <img src={logo}></img>
                    <h1>ZapRecall</h1>
                </LogoContainer>
                <Footer>
                    <Reactions/>
                </Footer>
            </ScreenContainer>
        </>
    )
}

const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;

    img{
        width: 52px;
    }

    h1{
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }
`;

const Footer = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;

`;