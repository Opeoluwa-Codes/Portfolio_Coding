import React from 'react'
import styled from 'styled-components';
import HeaderDesign from '../Components/Reusable/HeaderDesign';
import ResumeDisplay from '../Components/Reusable/ResumeDisplay'
import DialogueBox from '../Components/Reusable/DialogueBox';

import NextButton from '../Components/Reusable/NextButton';

const ResumePage = () => {
  return (
    <ResumeWrapper>

        <HeaderDesign title="MY RESUME"/>

        <EduExp>
          <One>
            <h2>EDUCATION</h2>
              <Education>
                
                  <ResumeDisplay name='SAIL Innovation Lab' title='FrontEnd Engineering' description='A six-month program focused on FrontEnd Software Development.' view='View' here='resume' link='https://drive.google.com/file/d/1WfhTHdp3H-770eMhbkChK_qLLp6pHNez/view?usp=sharing'/>

              </Education>
          </One>
          
          <Two>
            <h2>EXPERIENCE</h2>
              <Experience>

                <Cover>
                  <ResumeDisplay name='Farmera' title='FrontEnd Engineer' description='Farmera is an organization focused on connecting farmers and buyers.'/>
                  <DialogueBox from='From: July 2024' to='To: December 2024' one='I worked in a team tasked with creating a simple solution for marketing farm produce. ' two='I worked on the sign-in page using ReactJS.' three='I developed an appealing sign-in page using HTML and CSS (Styled-Components).' four="I connected the sign-in frontend to the project's backend using Axios." five='I utilised AuthContext for easy access and management of authentication data.' six='I defined specific pages accessible by each category of users using Protected-Route.'/>
                </Cover>

              </Experience>
          </Two>

        </EduExp>

        <NextButton link="/toolstack"/>
        
    </ResumeWrapper>
  );
};

export default ResumePage;


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

  @media (max-width: 499px) {
    width: 75%;
    margin-bottom: 3%;

  }

  h2{

    font-size: 25px;
    font-weight: 600;
    font-family: Montserrat;

    color: white;

    margin-top: 10px;
    margin-bottom: 20px;

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

  border-top: 1px white solid;

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

  margin-top: 2%;

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

  margin-top: 2%;

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