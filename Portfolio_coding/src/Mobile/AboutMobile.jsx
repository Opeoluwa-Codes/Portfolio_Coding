import React from 'react'
import styled from 'styled-components';
import keyframes from 'styled-components';
import { useState, useEffect } from 'react';
import HeaderDesign from '../Components/Reusable/HeaderDesign';
import BoxDisplay from '../Components/Not_Reusable/BoxDisplay';
import WhatIDo from "../Components/Reusable/WhatIDo"
import Interactive from "../Assets/PNG/Interactive.png"
import Responsive from "../Assets/PNG/Responsive.png"
import Functional from "../Assets/PNG/Functional.png"

const AboutMobile = () => {
  const description = "I am Opeoluwa...";
  const [displayedDescription, setDisplayedDescription] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  
  useEffect(() => {

    let timeout;
    
    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 2000);
    } else if (isTyping && !isDeleting) {
      if (displayedDescription.length < description.length) {
        timeout = setTimeout(() => {
          setDisplayedDescription(description.substring(0, displayedDescription.length + 1));
        }, 500);
      } else {
        setIsTyping(false);
        setIsWaiting(true);
      }
    } else if (isDeleting) {
      if (displayedDescription.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedDescription(description.substring(0, displayedDescription.length - 1));
        }, 100);
      } else {
        setIsDeleting(false);
        setIsTyping(true);
        timeout = setTimeout(() => {}, 500);
      }
    }
    
    return () => clearTimeout(timeout);

  }, [displayedDescription, isTyping, isDeleting, isWaiting]);

  return (
    <AboutWrapper>

      <HeaderDesign title="ABOUT ME"/>

      <TandB>

        <TitleAndDescription>

          <h2>{displayedDescription}<Cursor>|</Cursor></h2>
          <p>I create engaging websites with ReactJS that work well on all devices. I build user-friendly interfaces with smooth interactions and secure login systems. I connect frontends to backends and use Git/GitHub for team projects. I'm seeking new opportunities and mentorship connections!</p>

          <BoxContainer>

            <BoxDisplay/>

          </BoxContainer>

        </TitleAndDescription>

        <What>

          <h3>What I Do!</h3>
          <WhatIDo image={Interactive} title="Interactive UI" description="Crafting dynamic and user-friendly interfaces and ensuring seamless interactivity."/>
          <WhatIDo image={Responsive} title="Responsive UI" description="Designing adaptable and visually appealing layouts and guaranteeing optimal performance."/>
          <WhatIDo image={Functional} title="Functional Websites" description="Building robust web solutions and managing authentication efficiently."/>
            
        </What>
        
      </TandB>

    </AboutWrapper>
  );
};

export default AboutMobile;

const pulseAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const Cursor = styled.span`
  animation: ${pulseAnimation} 1.5s ease-in-out infinite;
  font-weight: bold;
`;

const AboutWrapper = styled.div`
  background: black;

  margin: 0px;
  padding: 0px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  height: fit-content;

`

const TandB = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  height: fit-content;
  width: 78%;

  margin-top: 15px;
  margin-bottom: 15px;

`

const TitleAndDescription = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 365px;

  margin-bottom: 10px;

  h2{
    color: white;

    margin: 0px;
    padding: 0px;
    box-sizing: border-box;

    font-size: 22px;

  }

  P{
    color: white;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    
    text-align: center;

    line-height: 25px;

    font-size: 14px;

  }

`

const BoxContainer = styled.div`
  width: 100%;
  height: fit-content;

`

const What = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 310px;

  h3{
    color: white;

    margin: 0px;
    padding: 0px;
    box-sizing: border-box;

    font-size: 20px;

  }

`