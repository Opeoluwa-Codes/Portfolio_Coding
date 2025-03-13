import React from 'react'
import HeaderDesign from '../Components/Reusable/HeaderDesign'
import styled from 'styled-components';
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { GrHtml5 } from "react-icons/gr";
import { RiCss3Line } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { SiPostman } from "react-icons/si";

const ToolStackPage = () => {
  return (
    <ToolStackWrapper>
        <HeaderDesign title='MY TOOLSTACK'/>
        <Tools>
            <Ht>
                <Html/>
            </Ht>

            <Sc>
                <Styled/>
            </Sc>

            <Vc>
                <Vscode/>
            </Vc>

            <Vr>
                <Vercel/>
            </Vr>

            <Cs>
                <Css/>
            </Cs>

            <Gi>
                <Git/>
            </Gi>

            <Fi>
                <Figma/>  
            </Fi>

            <Po>
                <Postman/>
            </Po>

            <Ja>
                <Js/>
            </Ja>

            <Gh>
                <GitHub/>
            </Gh>
        </Tools>
    </ToolStackWrapper>
  );
};

export default ToolStackPage;



const ToolStackWrapper = styled.div`

    background-color: #0b1e26;

    margin-left: 165px;
    
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
 
    box-sizing: border-box;
    padding-top: 2%;
    padding-bottom: 2%;

    @keyframes vscode{
        0%   {left:460px; top:5%;}
        10%   {left:690px; top:15%;}
        20%   {left:920px; top:35%;}
        30%   {left:920px; top:55%;}
        40%   {left:690px; top:75%;}
        50%   {left:460px; top:85%;}
        60%   {left:230px; top:75%;}
        70%   {left:0px; top:55%;}
        80%   {left:0px; top:35%;}
        90%   {left:230px; top:15%;}
        100% {left:460px; top:5%;}
    }

    @keyframes vercel{
        0%   {left:690px; top:15%;}
        10%   {left:920px; top:35%;}
        20%   {left:920px; top:55%;}
        30%   {left:690px; top:75%;}
        40%   {left:460px; top:85%;}
        50%   {left:230px; top:75%;}
        60%   {left:0px; top:55%;}
        70%   {left:0px; top:35%;}
        80%   {left:230px; top:15%;}
        90% {left:460px; top:5%;}
        100%   {left:690px; top:15%;}
    }

    @keyframes css{
        0%   {left:920px; top:35%;}
        10%   {left:920px; top:55%;}
        20%   {left:690px; top:75%;}
        30%   {left:460px; top:85%;}
        40%   {left:230px; top:75%;}
        50%   {left:0px; top:55%;}
        60%   {left:0px; top:35%;}
        70%   {left:230px; top:15%;}
        80% {left:460px; top:5%;}
        90%   {left:690px; top:15%;}
        100%   {left:920px; top:35%;}
    }

    @keyframes github{
        0%   {left:920px; top:55%;}
        10%   {left:690px; top:75%;}
        20%   {left:460px; top:85%;}
        30%   {left:230px; top:75%;}
        40%   {left:0px; top:55%;}
        50%   {left:0px; top:35%;}
        60%   {left:230px; top:15%;}
        70% {left:460px; top:5%;}
        80%   {left:690px; top:15%;}
        90%   {left:920px; top:35%;}
        100%   {left:920px; top:55%;}
    }

    @keyframes javascript{
        0%   {left:690px; top:75%;}
        10%   {left:460px; top:85%;}
        20%   {left:230px; top:75%;}
        30%   {left:0px; top:55%;}
        40%   {left:0px; top:35%;}
        50%   {left:230px; top:15%;}
        60% {left:460px; top:5%;}
        70%   {left:690px; top:15%;}
        80%   {left:920px; top:35%;}
        90%   {left:920px; top:55%;}
        100%   {left:690px; top:75%;}
    }

    @keyframes postman{
        0%   {left:460px; top:85%;}
        10%   {left:230px; top:75%;}
        20%   {left:0px; top:55%;}
        30%   {left:0px; top:35%;}
        40%   {left:230px; top:15%;}
        50% {left:460px; top:5%;}
        60%   {left:690px; top:15%;}
        70%   {left:920px; top:35%;}
        80%   {left:920px; top:55%;}
        90%   {left:690px; top:75%;}
        100%   {left:460px; top:85%;}
    }

    @keyframes figma{
        0%   {left:230px; top:75%;}
        10%   {left:0px; top:55%;}
        20%   {left:0px; top:35%;}
        30%   {left:230px; top:15%;}
        40% {left:460px; top:5%;}
        50%   {left:690px; top:15%;}
        60%   {left:920px; top:35%;}
        70%   {left:920px; top:55%;}
        80%   {left:690px; top:75%;}
        90%   {left:460px; top:85%;}
        100%   {left:230px; top:75%;}
    }

    @keyframes git{
        0%   {left:0px; top:55%;}
        10%   {left:0px; top:35%;}
        20%   {left:230px; top:15%;}
        30% {left:460px; top:5%;}
        40%   {left:690px; top:15%;}
        50%   {left:920px; top:35%;}
        60%   {left:920px; top:55%;}
        70%   {left:690px; top:75%;}
        80%   {left:460px; top:85%;}
        90%   {left:230px; top:75%;}
        100%   {left:0px; top:55%;}
    }

    @keyframes html{
        0%   {left:0px; top:35%;}
        10%   {left:230px; top:15%;}
        20% {left:460px; top:5%;}
        30%   {left:690px; top:15%;}
        40%   {left:920px; top:35%;}
        50%   {left:920px; top: 55%;}
        60%   {left:690px; top:75%;}
        70%   {left:460px; top:85%;}
        80%   {left:230px; top:75%;}
        90%   {left:0px; top:55%;}
        100%   {left:0px; top:35%;}
    }

    @keyframes styledcomponent{
        0%   {left:230px; top:15%;}
        10% {left:460px; top:5%;}
        20%   {left:690px; top:15%;}
        30%   {left:920px; top:35%;}
        40%   {left:920px; top: 55%;}
        50%   {left:690px; top:75%;}
        60%   {left:460px; top:85%;}
        70%   {left:230px; top:75%;}
        80%   {left:0px; top:55%;}
        90%   {left:0px; top:35%;}
        100%   {left:230px; top:15%;}
    }

`

const Tools = styled.div`
    width: 970px;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 100px;

    margin-top: 1%;
    margin-bottom: 1%;

    box-sizing: border-box;

    position: relative;
    
`

const Postman = styled(SiPostman)`
    color: #bb8a52;
    font-size: 50px

`

const Vercel = styled(IoLogoVercel)`
    color: #bb8a52;
    font-size: 50px
`

const Js = styled(RiReactjsFill)`
    color: #bb8a52;
    font-size: 50px
`

const Styled = styled(SiStyledcomponents)`
    color: #bb8a52;
    font-size: 50px
`

const Css = styled(RiCss3Line)`
    color: #bb8a52;
    font-size: 50px
`

const Html = styled(GrHtml5)`
    color: #bb8a52;
    font-size: 50px
`

const Vscode = styled(VscVscode)`
    color: #bb8a52;
    font-size: 50px
`

const Figma = styled(FaFigma)`
    color: #bb8a52;
    font-size: 50px
`

const Git = styled(FaGitAlt)`
    color: #bb8a52;
    font-size: 50px
`

const GitHub = styled(FaGithub)`
    color: #bb8a52;
    font-size: 50px
`

const Ht = styled.div`
    position: absolute;
    top: 35%;
    left: 0px;

    animation-name: html;
    animation-duration: 50s;
    animation-direction: normal;
    animation-iteration-count: infinite;

`

const Sc = styled.div`
    position: absolute;
    top: 15%;
    left: 230px;

    animation-name: styledcomponent;
    animation-duration: 50s;
    animation-direction: normal;
    animation-iteration-count: infinite;
`

const Vc = styled.div`
    position: absolute;
    top: 5%;
    left: 460px;

    animation-name: vscode;
    animation-duration: 50s;
    animation-direction: normal;
    animation-iteration-count: infinite;
`

const Vr = styled.div`
    position: absolute;
    top: 15%;
    left: 690px;

    animation-name: vercel;
    animation-duration: 50s;
    animation-direction: normal;
    animation-iteration-count: infinite;
`

const Cs = styled.div`
    position: absolute;
    top: 35%;
    left: 920px;

    animation-name: css;
    animation-duration: 50s;
    animation-direction: normal;
    animation-iteration-count: infinite;
`

const Gi = styled.div`
    position: absolute;
    bottom: 35%;
    left: 0px;

    animation-name: git;
    animation-duration: 50s;
    animation-direction: normal;
    animation-iteration-count: infinite;
`

const Fi = styled.div`
    position: absolute;
    bottom: 15%;
    left: 230px;

    animation-name: figma;
    animation-duration: 50s;
    animation-direction: normal;
    animation-iteration-count: infinite;
`

const Po = styled.div`
    position: absolute;
    bottom: 5%;
    left: 460px;

    animation-name: postman;
    animation-duration: 50s;
    animation-direction: normal;
    animation-iteration-count: infinite;
`

const Ja = styled.div`
    position: absolute;
    bottom: 15%;
    left: 690px;

    animation-name: javascript;
    animation-duration: 50s;
    animation-direction: normal;
    animation-iteration-count: infinite;
`

const Gh = styled.div`
    position: absolute;
    bottom: 35%;
    left: 920px;

    animation-name: github;
    animation-duration: 50s;
    animation-direction: normal;
    animation-iteration-count: infinite;
`


