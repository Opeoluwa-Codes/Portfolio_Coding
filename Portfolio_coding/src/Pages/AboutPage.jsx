import React from 'react'
import styled from 'styled-components';
import HeaderDesign from '../Components/Reusable/HeaderDesign';
import BoxDisplay from '../Components/Not_Reusable/BoxDisplay';
import WhatIDo from "../Components/Reusable/WhatIDo"
import Interactive from "../Assets/PNG/Interactive.png"
import Responsive from "../Assets/PNG/Responsive.png"
import Functional from "../Assets/PNG/Functional.png"

const AboutPage = () => {
  return (
    <AboutWrapper>
      <HeaderDesign title="ABOUT ME"/>
      <TitleAndDescription>
        <h2>I am <Cut>Opeoluwa,</Cut> FrondEnd Developer</h2>
        <p>
        I am a frontEnd developer passionate about scalable, efficient solutions using ReactJS. I am experienced in team collaboration using Git/GitHub. Moreover, I build user-friendly sign-in functionality and connected frontends to backends. Furthermore, I am open to exciting projects and mentorship opportunities!</p>
      </TitleAndDescription>
      <BoxAndWhat>
        <BoxDisplay/>
        <What>
          <h3>What I Do!</h3>
          <WhatIDo image={Interactive} title="Interactive UI" description="Crafting dynamic and user-friendly interfaces using ReactJS, HTML, and CSS, ensuring seamless interactivity and engaging user experiences."/>
          <WhatIDo image={Responsive} title="Responsive UI" description="Designing adaptable and visually appealing layouts and guaranteeing optimal performance across devices and screen sizes."/>
          <WhatIDo image={Functional} title="Functional Websites" description="Building robust web solutions and managing authentication efficiently."/>
        </What>
      </BoxAndWhat>
    </AboutWrapper>
  );
};

export default AboutPage;

const AboutWrapper = styled.div`
  width: 87.92%;
  height: 100vh;

  position: fixed;
  left: 164px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
  padding-top: 30px;
  padding-bottom: 30px;
`

const TitleAndDescription = styled.div`
  width: 970px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 15px;

  margin-bottom: 20px;

  box-sizing: border-box;
  padding-left: 30px;

  h2{
    width: fit-content;
    height: fit-content;

    display: flex;
    gap: 10px;

    font-size: 25px;
    font-weight: 300;
    color: #7D5A50;

    margin-bottom: 0px;
    margin-top: 0px;
  }

  p{
    width: 100%;
    height: fit-content;

    font-size: 14px;
    font-weight: 300;
    color: #7D5A50;
    
    text-align: justify;

    line-height: 23px;

    margin-top: 0px;
    margin-bottom: 0px;
  }
`

const Cut = styled.div`
  font-weight: 500;
`

const BoxAndWhat = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 970px;
  height: 315px;

  box-sizing: border-box;
  padding-left: 30px;
`

const What = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  gap: 10px;

  width:44%;
  height: 100%;

  box-sizing: border-box;

  h3{
    font-size: 22px;
    font-weight: 500;
    color: #7D5A50;
    
    margin-top: 0px;
    margin-bottom: 0px;

  }
`