import React from 'react'
import HeaderDesign from '../Components/Reusable/HeaderDesign'
import styled, { keyframes, css } from 'styled-components';

import { VscVscode } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const ToolstackMobile = () => {
  return (
    <ToolStackWrapper>
        <HeaderDesign title="MY TOOLSTACK" />

        <Tools>
            <IconWrapper delay="0s"><Vscode /></IconWrapper>
            <IconWrapper delay="5s"><Figma /></IconWrapper>
            <IconWrapper delay="10s"><Vercel /></IconWrapper>
            <IconWrapper delay="15s"><ReactJS /></IconWrapper>
            <IconWrapper delay="20s"><TypeScript /></IconWrapper>
            <IconWrapper delay="25s"><GitHub /></IconWrapper>
        </Tools>

    </ToolStackWrapper>
  );
};

export default ToolstackMobile;

// Create two separate animations
const orbitAnimationLarge = keyframes`
  0% {
    transform: rotateY(0deg) translateZ(350px);
    opacity: 1;
  }
  1% {
    opacity: 1;
  }
  25% {
    transform: rotateY(90deg) translateZ(350px);
    opacity: 1;
  }
  50% {
    transform: rotateY(180deg) translateZ(350px);
    opacity: 0.5;
  }
  75% {
    transform: rotateY(270deg) translateZ(350px);
    opacity: 1;
  }
  100% {
    transform: rotateY(360deg) translateZ(350px);
    opacity: 1
  }
`;

const orbitAnimationSmall = keyframes`
  0% {
    transform: rotateY(0deg) translateZ(180px);
    opacity: 1;
  }
  5% {
    opacity: 1;
  }
  25% {
    transform: rotateY(90deg) translateZ(180px);
    opacity: 1;
  }
  50% {
    transform: rotateY(180deg) translateZ(180px);
    opacity: 0.5;
  }
  75% {
    transform: rotateY(270deg) translateZ(180px);
    opacity: 1;
  }
  100% {
    transform: rotateY(360deg) translateZ(180px);
    opacity: 1;
  }
`;

const orbitAnimationSmaller = keyframes`
  0% {
    transform: rotateY(0deg) translateZ(120px);
    opacity: 1;
  }
  5% {
    opacity: 1;
  }
  25% {
    transform: rotateY(90deg) translateZ(120px);
    opacity: 1;
  }
  50% {
    transform: rotateY(180deg) translateZ(120px);
    opacity: 0.5;
  }
  75% {
    transform: rotateY(270deg) translateZ(120px);
    opacity: 1;
  }
  100% {
    transform: rotateY(360deg) translateZ(120px);
    opacity: 1;
  }
`;

const iconStyle = `
  color: white;
  font-size: 60px;

  @media (max-width: 914px) {
    font-size: 50px;
  }

  @media (max-width: 499px) {
    font-size: 40px;
  }
`;

const Vscode = styled(VscVscode)`${iconStyle}`;

const Figma = styled(FaFigma)`${iconStyle}`;

const Vercel = styled(IoLogoVercel)`${iconStyle}`;

const TypeScript = styled(SiTypescript)`${iconStyle}`;

const ReactJS = styled(RiReactjsFill)`${iconStyle}`;

const GitHub = styled(FaGithub)`${iconStyle}`;

const ToolStackWrapper = styled.div`

  height: 40vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  padding-left: 0%;

  background-color: black;

  position: relative;

`;

const Tools = styled.div`
  width: 85%;
  height: 300px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 35%;

  perspective: 500px;

  margin-bottom: 55%;

`;

const IconWrapper = styled.div`
  position: absolute;
  transform-style: preserve-3d;
  opacity: 0;

  animation: ${orbitAnimationSmaller} 30s linear infinite;
  animation-delay: ${(props) => props.delay};

`;