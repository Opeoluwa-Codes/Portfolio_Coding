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

  min-width: 30%;
  height: fit-content;
  flex-shrink: 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 767px) {
    min-width: 32%;

  }

  @media (max-width: 499px) {
    min-width: 48.5%;

  }

`
const SchoolorJob = styled.div`

  font-size: 16px;
  font-weight: 400;
  color: #cccccc;

  font-family: Montserrat;

  height: 40px;

  display: flex;
  justify-content: start;
  align-items: start;

  @media (max-width: 705px) {
    font-size: 14px;

  }

  @media (max-width: 615px) {
    justify-content: center;

  }

  /* @media (max-width: 632px) {
    font-size: 12px;

  } */

`
const SchoolorJobTitle = styled.div`

  font-size: 18px;
  font-weight: 700;
  color: white;

  font-family: Montserrat;

  height: 40px;

  display: flex;
  justify-content: start;
  align-items: center;

  @media (max-width: 705px) {
    font-size: 14px;

  }

  @media (max-width: 615px) {
    justify-content: center;

  }

  /* @media (max-width: 632px) {
    font-size: 12px;

  } */

`
const Description = styled.div`

  font-size: 14px;
  font-weight: 200;
  color: #cccccc;

  font-family: Arial;

  margin-top: 5px;
  margin-bottom: 10px;

  /* @media (max-width: 705px) {
    font-size: 12px;

  } */

  @media (max-width: 632px) {
    font-weight: 100;

  }

`

const Certification = styled.div`
  font-size: 14px;
  font-weight: 200;
  color: #cccccc;

  font-family: Arial;

  display: flex;
  align-items: center;

  gap: 5px;


  /* @media (max-width: 705px) {
    font-size: 12px;

  } */

  @media (max-width: 615px) {

    justify-content: center;

  }


  a{

    font-size: 14px;
    font-weight: 200;
    color: #cccccc;

    font-family: Arial;

    text-decoration: underline;
    
    &:hover{
      transform: scale(1.05);
    }

    /* @media (max-width: 705px) {
      font-size: 12px;

    } */

    @media (max-width: 615px) {

      justify-content: center;

    }

  }
`

