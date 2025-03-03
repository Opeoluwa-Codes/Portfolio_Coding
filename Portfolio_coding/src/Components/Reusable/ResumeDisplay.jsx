import React from 'react'
import styled from 'styled-components';

const ResumeDisplay = (props) => {
  return (
    <ResumeDisplayWrapper>
      <SchoolorJob>
        {props.name}
      </SchoolorJob>
      <SchoolorJobTitle>
        {props.tile}
      </SchoolorJobTitle>
      <Description>
        {props.description}
      </Description>
    </ResumeDisplayWrapper>
  );
};

export default ResumeDisplay;

const ResumeDisplayWrapper = styled.div`
  width: 300px;
  height: 200px;

  display: flex;
  flex-direction: column;

  row-gap: 5%;
`
const SchoolorJob = styled.div`
  height: 30px;
  width: fit-content;

  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;

  display: flex;
  align-items: center;

  font-size: 14px;
  font-weight: 400;
  color: #E5B299;

  text-transform: capitalize;

  background-color: #7D5A50;
`
const SchoolorJobTitle = styled.div`
  height: 40px;

  display: flex;
  align-items: center;

  font-size: 18px;
  font-weight: 800;
  color: #7D5A50;

  text-transform: capitalize;
`
const Description = styled.div`
  height: 106px;

  font-size: 14px;
  font-weight: 300;
  color: #7D5A50;

  text-align: justify;
`