import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContactTile = (props) => {
  return (
    
    <ContactWrapper>
      <ContactIcon>
        {props.icon}
      </ContactIcon>

      <ContactInfo>
        {props.info}
      </ContactInfo>
    </ContactWrapper>

  );
};

export default ContactTile;

const ContactWrapper = styled.div`
  width: inherit;
  height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 5%;

`
const ContactIcon = styled.div`
  width: 30%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 570px) {
    width: 15%;

  }

  &:hover{
    background-color: black;
  }
`

const ContactInfo = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  align-items: center;

  font-size: 16px;


  color: #cccccc;
  font-weight: 200;

  font-family: Arial;

  transition: all 1s ease-in-out;

  /* &:hover{
    transform: scale(1.05);
  } */

  @media (max-width: 570px) {
    font-size: 14px;
    width: 80%;

  }

`