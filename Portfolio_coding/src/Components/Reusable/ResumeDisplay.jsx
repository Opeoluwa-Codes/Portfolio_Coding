import React from 'react'
import styled from 'styled-components';

const ResumeDisplay = (props) => {
  return (
    <ResumeDisplayWrapper>
      <SchoolorJob>
        {props.name}
      </SchoolorJob>
      <SchoolorJobTitle>
        {props.title}
      </SchoolorJobTitle>
      <Description>
        {props.description}
      </Description>
      <Certification>
        {props.view}       
        <a href={props.link} target={props.target} download={props.download}>{props.here}</a>
      </Certification>
    </ResumeDisplayWrapper>
  );
};

export default ResumeDisplay;

const ResumeDisplayWrapper = styled.div`
  width: 290px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;

  box-sizing: border-box;


`
const SchoolorJob = styled.div`
  height: 30px;
  width: fit-content;

  box-sizing: border-box;

  display: flex;
  align-items: center;

  font-size: 14px;
  font-weight: 100;
  font-family: Roboto;
  color: white;

  box-sizing: border-box;
  padding: 5px;

  background-color: #bb8a52;

`
const SchoolorJobTitle = styled.div`
  height: 30px;
  width: fit-content;

  display: flex;
  align-items: center;

  font-size: 20px;
  font-weight: 500;
  color: #bb8a52;
  font-family: Cormorant;
  margin-bottom: 5px;

`
const Description = styled.div`
  height: fit-content;
  width: fit-content;

  font-size: 14px;
  font-weight: 100;
  color: white;

  font-family: Roboto;

  line-height: 25px;

  margin-bottom: 5px;

  text-align: left;
`

const Certification = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: #bb8a52;

  font-family: Roboto;

  display: flex;
  align-items: center;
  gap: 4px;


  box-sizing: border-box;

  a{
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

