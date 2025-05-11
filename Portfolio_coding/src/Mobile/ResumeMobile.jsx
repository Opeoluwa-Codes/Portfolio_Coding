import React from 'react'
import styled from 'styled-components';
import HeaderDesign from '../Components/Reusable/HeaderDesign';
import ResumeDisplay from '../Components/Reusable/ResumeDisplay'
import DialogueBox from '../Components/Reusable/DialogueBox';

const ResumeMobile = () => {
  return (
    <ResumeWrapper>

        <HeaderDesign title="MY RESUME"/>

        <EduExp>
          <One>
            <h2>EDUCATION</h2>
            <Education>

              <ResumeDisplay name='Canadore College' title='Project Management' description='' view='View' here='resume' link='https://drive.google.com/file/d/1qrwaPEzCCa6wbumR2zuP_CI6EAo1JvDI/view?usp=drive_link'/>

              <ResumeDisplay name='SAIL' title='Software Development' description='' view='' here='' link=''/>

            </Education>
          </One>
          
          <Two>
            <h2>EXPERIENCE</h2>
              <Experience>

                <Cover>
                  <ResumeDisplay name='Farmera' title='FrontEnd Engineer' view='Farmera is an organization focused on connecting farmers and buyers.'/>
                  <DialogueBox from='From: November 2024' to='To: Present' one='1. I worked in a team tasked with creating a simple solution for marketing farm produce. ' two='2. I worked on the sign-in page using ReactJS.' three='3. I developed an appealing sign-in page using HTML and CSS (Styled-Components).' four="4. I connected the sign-in frontend to the project's backend using Axios." five='5. I utilised AuthContext for easy access and management of authentication data.' six='6. I defined specific pages accessible by each category of users using Protected-Route.'/>
                </Cover>

              </Experience>
          </Two>

        </EduExp>
        
    </ResumeWrapper>
  );
};

export default ResumeMobile;


const ResumeWrapper = styled.div`

  max-height: 85vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  padding-left: 0%;
  padding-bottom: 20px;

  background-color: black;

  position: relative;

`

const EduExp = styled.div`

  width: 75%;
  height: 85%;

  margin-top: 5%;

  display: flex;
  flex-direction: column;
  
  align-items: center;

  gap: 5%;


  h2{

    font-size: 22px;
    font-weight: 600;
    font-family: Montserrat;

    color: white;

    margin: 0% 0% 5% 0%;

  }
  
`

const One = styled.div`

  height: fit-content;
  width: 100%;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

`

const Two = styled.div`

  height: fit-content;
  width: 100%;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  box-sizing: border-box;

`

const Education = styled.div`

  width: 100%;
  height: fit-content;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  overflow-x: auto;
  scroll-behavior: smooth;

  scrollbar-width: thin;

  margin-top: 2%;

  padding-bottom: 7%;
  box-sizing: border-box;

  scrollbar-color: black;

  gap: 1.5%;

`

const Experience = styled.div`


  width: fit-content;
  height: fit-content;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  gap: 1.5%;

  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: thin;

  padding-bottom: 7%;
  box-sizing: border-box;

  scrollbar-color: black;


`

const Cover = styled.div`
  
  min-width: 48.5%;
  height: fit-content;
  flex-shrink: 0px;

  text-align: center;
  align-items: center;

`