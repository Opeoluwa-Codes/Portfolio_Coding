import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import HeaderDesign from '../Components/Reusable/HeaderDesign';
import BoxDisplay from '../Components/Not_Reusable/BoxDisplay';
import WhatIDo from "../Components/Reusable/WhatIDo"
import Interactive from "../Assets/PNG/Interactive.png"
import Responsive from "../Assets/PNG/Responsive.png"
import Functional from "../Assets/PNG/Functional.png"

const AboutPage = () => {
  const description = "I am Opeoluwa, FrontEnd Developer"
  const [displayedDescription, setDisplayedDescription] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() =>{

    const interval = setInterval(() =>{

      if (currentIndex < description.length){
        setDisplayedDescription((prev) => prev + description[currentIndex]);
        setCurrentIndex((prev) => prev + 1)
      }else{
        clearInterval(interval);
      }
      
    }, 100); 

    return () => clearInterval(interval);
      
    }, [currentIndex, description]);

  return (
    <AboutWrapper>
      <HeaderDesign title="ABOUT ME"/>

      <TandB>
        <TitleAndDescription>
          <h2>{displayedDescription}</h2>
          <p>I create engaging websites with ReactJS that work well on all devices. I build user-friendly interfaces with smooth interactions and secure login systems. I connect frontends to backends and use Git/GitHub for team projects. I'm seeking new opportunities and mentorship connections!</p>
        </TitleAndDescription>
        <BoxAndWhat>
          <BoxDisplay/>
          <What>
            <h3>What I Do!</h3>
            <WhatIDo image={Interactive} title="Interactive UI" description="Crafting dynamic and user-friendly interfaces and ensuring seamless interactivity."/>
            <WhatIDo image={Responsive} title="Responsive UI" description="Designing adaptable and visually appealing layouts and guaranteeing optimal performance."/>
            <WhatIDo image={Functional} title="Functional Websites" description="Building robust web solutions and managing authentication efficiently."/>
          </What>
        </BoxAndWhat>
      </TandB>

    </AboutWrapper>
  );
};

export default AboutPage;

const AboutWrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  padding-top: 3%;
  padding-left: 12%;

  background-color: black;


  @media (max-width: 914px) {
    padding-left: 0%;

    align-items: center;

  }
`

const TandB = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  gap: 2%;

  width: 89.5%;
  height: 70vh;

  @media (max-width: 914px) {
    width: 78%;

  }

  @media(max-width: 774px){
    height: 74vh;
    
  }

  @media (max-width: 615px) {
    width: 80%;

  }

  @media (max-width: 534px) {
    height: 76vh;

  }

  @media (max-width: 500px) {
    height: 85vh;

  }

`

const TitleAndDescription = styled.div`
  height: fit-content;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: start;

  box-sizing: border-box;


  h2{
    width: 100%;
    height: fit-content;

    font-size: 25px;
    font-weight: 600;
    color: white;

    margin-bottom: 1%;
    margin-top: 0px;

    @media (max-width: 615px) {
    text-align: center;

    }

    @media (max-width: 705px) {
    font-size: 18px;

    }

  }

  p{
    width: 100%;
    height: fit-content;

    font-size: 14px;
    font-weight: 200;
    color: #cccccc;

    
    text-align: left;

    line-height: 23px;

    margin-top: 0px;
    margin-bottom: 0px;

    @media (max-width: 615px) {
    text-align: center;

    }

  }
`


const BoxAndWhat = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 70%;

  box-sizing: border-box;

  @media(max-width: 774px){
    height: 68%;
  }
  

`

const What = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  gap: 25px;

  width: 48.5%;

  box-sizing: border-box;

  @media (max-width: 914px) {
    width: 55%;

  }

  @media (max-width: 594px) {
    gap: 10px;

    width: 51%;

  }


  h3{
    font-size: 20px;
    font-weight: 700;
    color: white;
    
    margin-top: 0px;
    margin-bottom: 5px;

    @media (max-width: 705px) {
    font-size: 18px;

    }

  }
`