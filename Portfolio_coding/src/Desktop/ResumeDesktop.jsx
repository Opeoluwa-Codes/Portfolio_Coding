import React from 'react'
import styled from 'styled-components';
import HeaderDesign from '../Components/Reusable/HeaderDesign';
import ResumeDisplay from '../Components/Reusable/ResumeDisplay'
import DialogueBox from '../Components/Reusable/DialogueBox';

import NextButton from '../Components/Reusable/NextButton';

const ResumeDesktop = () => {
  return (
    <ResumeWrapper>

        <HeaderDesign title="MY RESUME"/>

        <EduExp>
          <One>
            <h2>EDUCATION</h2>
              <Education>

                <ResumeDisplay name='Canadore College' title='Project Management - IT' description='' view='View' here='resume' link='https://drive.google.com/file/d/1JvAT15rXI5gy1tcbwrHR65Kv39GisFHR/view?usp=drive_link'/>
                
                <ResumeDisplay name='SAIL Innovation Lab' title='Software Development' description='' view='' here='' link=''/>

              </Education>
          </One>
          
          <Two>
            <h2>EXPERIENCE</h2>
              <Experience>

                <Cover>
                  <ResumeDisplay name='Farmera' title='FrontEnd Engineer' view='Farmera is an organization focused on connecting farmers and buyers.'/>
                  <DialogueBox from='From: July 2024' to='To: December 2024' one='1. I worked in a team tasked with creating a simple solution for marketing farm produce. ' two='2. I worked on the sign-in page using ReactJS.' three='3. I developed an appealing sign-in page using HTML and CSS (Styled-Components).' four="4. I connected the sign-in frontend to the project's backend using Axios." five='5. I utilised AuthContext for easy access and management of authentication data.' six='6. I defined specific pages accessible by each category of users using Protected-Route.'/>
                </Cover>

              </Experience>
          </Two>

        </EduExp>

        <NextButton link="/toolstack"/>
        
    </ResumeWrapper>
  );
};

export default ResumeDesktop;


const ResumeWrapper = styled.div`
  
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  padding-top: 3%;
  padding-left: 12%;

  background-color: black;

  position: relative;

  @media (max-width: 914px) {
    padding-left: 0%;
  }

`

const EduExp = styled.div`

  width: 89.5%;
  height: 80vh;

  margin-top: 2%;


  @media (min-width: 700px) {
    margin-top: 0%;

    height: 70vh;
  }

  @media (max-width: 914px) {
    width: 84%;
  }

  @media (max-width: 767px) {
    width: 86%;
  }

  @media (max-width: 705px) {
    width: 84%;
  }

  @media (max-width: 615px) {
    width: 80%;
  }

  h2{

    font-size: 25px;
    font-weight: 600;
    font-family: Montserrat;

    color: white;

    margin-top: 10px;
    margin-bottom: 0px;

    @media (max-width: 705px) {
      font-size: 22px;
    }

  }
  
`

const One = styled.div`

  height: fit-content;
  width: 100%;

  @media (max-width: 615px) {
    text-align: center;
  }

`

const Two = styled.div`

  height: fit-content;
  width: 100%;
  
  margin-top: 10%;

  padding-top: 10%;
  box-sizing: border-box;

  @media (min-width: 700px) {
    margin-top: 5%;
    padding-top: 0%;
  }

  @media (max-width: 615px) {
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

`

const Education = styled.div`

  width: 100%;
  height: fit-content;

  display: flex;
  flex-wrap: nowrap;
  align-items: start;

  gap: 4.8%;

  overflow-x: auto;
  scroll-behavior: smooth;

  scrollbar-width: thin;

  padding-bottom: 10px;
  box-sizing: border-box;

  scrollbar-color: black;

  @media (max-width: 767px) {
    gap: 1.5%;
  }

  @media (max-width: 615px) {
    text-align: center;
  }

`

const Experience = styled.div`

  width: fit-content;
  height: fit-content;

  display: flex;
  flex-wrap: nowrap;
  align-items: start;

  gap: 4.8%;

  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: thin;

  padding-bottom: 10px;
  box-sizing: border-box;

  scrollbar-color: black;

  @media (max-width: 767px) {
    gap: 1.5%;
  }

  @media (max-width: 615px) {
    text-align: center;
  }

`

const Cover = styled.div`
  
  min-width: 46%;
  height: fit-content;
  flex-shrink: 0px;

  @media (max-width: 767px) {
    min-width: 48.5%;
  }

  @media (max-width: 615px) {
    text-align: center;
    align-items: center;
  }

`