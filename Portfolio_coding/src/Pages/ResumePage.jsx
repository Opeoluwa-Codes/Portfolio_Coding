import React from 'react'
import styled from 'styled-components';
import HeaderDesign from '../Components/Reusable/HeaderDesign';
import ResumeDisplay from '../Components/Reusable/ResumeDisplay'
import DialogueBox from '../Components/Reusable/DialogueBox';

const ResumePage = () => {




  return (
    <ResumeWrapper>
        <HeaderDesign title="MY RESUME"/>

        <EduExp>
          <One>
            <h2>EDUCATION</h2>
              <Education>
                <ItemCover>
                  <ResumeDisplay name='Senator Abiru Innovation Lab' title='FrontEnd Engineering' description='A six-month program focusing on FrontEnd Software Development.' view='View certificate' here='here' link=''/>
                </ItemCover>
                <ItemCover>
                  <ResumeDisplay name='Obafemi Awolowo University' title='BSc. Biochemistry' description='Obafemi Awolowo University graduate with a Second Class Upper in Biochemistry.' view='View certificate' here='here' link='src\Assets\File\Certificate.pdf' target='_blank'/>
                </ItemCover>
              </Education>
          </One>
          
          <Two>
            <h2>EXPERIENCE</h2>
              <Experience>
                <ItemCover>
                  <ResumeDisplay name='Farmera' title='FrontEnd Engineer' description='Farmera is an organization focused on connecting farmers and buyers.' view=''/>
                  <DialogueBox from='From: July 2024' to='To: December 2024' one='I worked in a team tasked with creating a simple solution for marketing farm produce. ' two='I collaborated with six other individuals using Git/GitHub.' three='I worked on the sign-in page using ReactJS.' four='I developed an appealing sign-in page using HTML and CSS (Styled-Components).' five="I connected the sign-in frontend to the project's backend using Axios." six='I utilised AuthContext for easy access and management of authentication data.' seven='I defined specific pages accessible by each category of users using Protected-Route.'/>
                </ItemCover>
              </Experience>
          </Two>

        </EduExp>
        
    </ResumeWrapper>
  );
};

export default ResumePage;


const ResumeWrapper = styled.div`
  
  position: relative;

  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 2%;
  padding-bottom: 2%;
  box-sizing: border-box;

  margin-left: 165px;

  background-color: #0b1e26;

`

const EduExp = styled.div`

  box-sizing: border-box;

  height: 100vh;
  width: 970px;


  h2{
    color: #bb8a52;

    width: fit-content;
    height: fit-content;
    
    display: flex;
    align-items: center;

    box-sizing: border-box;
    
    font-size: 22px;
    font-weight: 600;

    margin: 0px;

    margin-bottom: 15px;

  }
`

const One = styled.div`
  height: fit-content;
  margin-bottom: 10px;
`

const Two = styled.div`
  height: fit-content;
  border-top: 1px #bb8a52 solid;

  box-sizing: border-box;
  padding-top: 30px;
`

const Education = styled.div`
  
  height: fit-content;
  width: 970px;

  display: flex;
  justify-content: start;
  align-items: center;

  gap: 35px;

  overflow-x: auto;
  scroll-behavior: smooth;
  
  padding-bottom: 15px;
  scroll-padding-bottom: 15px;

  scrollbar-color: white #bb8a52;

  box-sizing: border-box;
`

const Experience = styled.div`
  
  height: fit-content;
  width: 970px;

  display: flex;
  justify-content: start;
  align-items: center;

  gap: 35px;

  overflow-x: auto;
  scroll-behavior: smooth;
  
  padding-bottom: 15px;
  scroll-padding-bottom: 15px;

  scrollbar-color: white #bb8a52;

  box-sizing: border-box;
`

const ItemCover = styled.div`
  
  height: fit-content;

  box-sizing: border-box;

  a{
    margin-top: 0px;

    width: fit-content;
    height: 100%;

    font-size: 14px;
    font-weight: 300;
    color: #bb8a52;

    text-decoration: underline;
  }
  
  a:hover{
    color: white;
  }
`